import { useEffect, useRef, useState } from 'react';
import mapboxgl, { LngLatBoundsLike } from 'mapbox-gl';
import {
  Button,
  Dialog,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import Laureat from '../components/Laureat';
import contentLaureat from '../content/contentLaureat';
import { activeCountry } from '../content/contentFiltersLaureat';
import { ExclamationCircleIcon } from '@heroicons/react/24/outline';

mapboxgl.accessToken = import.meta.env.VITE_MAP_KEY;
type stateData = { name: string };
const Map = () => {
  const mapContainerRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [selectedState, setSelectedState] = useState<stateData>({ name: '' });

  useEffect(() => {
    if (mapContainerRef.current) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/dark-v11',
        center: [-95.7129, 37.0902], // Centered on the USA
        zoom: 5, // Adjust zoom level as needed
        maxBounds: [
          [-179.9, 15], // Southwest corner of the bounds
          [-49.9, 74], // Northeast corner of the bounds
        ],
        interactive: false,
      });

      const bounds: LngLatBoundsLike = [
        [-125.00165, 24.396308], // Southwest coordinates
        [-66.93457, 49.384358], // Northeast coordinates
      ];

      map.fitBounds(bounds);

      // Optionally, set maxBounds to prevent panning outside the United States
      map.setMaxBounds(bounds);

      map.on('load', () => {
        // Add a source for the state boundaries
        map.addSource('states', {
          type: 'geojson',
          data: 'https://docs.mapbox.com/mapbox-gl-js/assets/us_states.geojson',
        });

        // Add a layer to mask other countries with a dark color
        map.addLayer({
          id: 'country-mask',
          type: 'fill',
          source: {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Polygon',
                    coordinates: [
                      [
                        [-179.9, 15],
                        [-49.9, 15],
                        [-49.9, 74],
                        [-179.9, 74],
                        [-179.9, 15],
                      ],
                    ],
                  },
                  properties: {}, // Ensure properties is included
                },
              ],
            },
          },
          layout: {},
          paint: {
            'fill-color': '#000000', // Dark color to mask other countries
            'fill-opacity': 1,
          },
          filter: ['all', ['!=', 'iso_3166_1_alpha_3', 'USA']],
        });

        // Add a layer for the state boundaries
        map.addLayer({
          id: 'state-fills',
          type: 'fill',
          source: 'states',
          layout: {},
          paint: {
            'fill-color': '#444444', // Dark color for states
            'fill-opacity': 0.8,
          },
        });

        // Add a layer for the state borders
        map.addLayer({
          id: 'state-borders',
          type: 'line',
          source: 'states',
          layout: {},
          paint: {
            'line-color': '#ffffff',
            'line-width': 1,
          },
        });

        // Existing layer to add labels (text) with color change
        map.addLayer({
          id: 'state-labels',
          type: 'symbol',
          source: 'states',
          layout: {
            'text-field': '{STATE_NAME}', // Use existing state name property
            'text-size': 10,
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
          },
          paint: {
            'text-color': '#ffffff', // White color for state names
          },
        });

        // Add a layer to hide other country names
        map.addLayer({
          id: 'country-labels',
          type: 'symbol',
          source: 'country-mask',
          layout: {
            'text-field': '{name}', // Adjust according to your data
            'text-size': 12,
            'text-font': ['Open Sans Regular', 'Arial Unicode MS Regular'],
          },
          paint: {
            'text-color': '#000000', // Black color to hide country names
          },
          filter: ['!=', 'iso_3166_1_alpha_3', 'USA'],
        });

        // Change state color on hover
        map.on('mousemove', 'state-fills', (e) => {
          if (e.features && e.features.length > 0) {
            // Get the state name from the feature properties
            const stateName = e.features[0].properties?.STATE_NAME;

            // Change the fill color of the hovered state
            map.setPaintProperty('state-fills', 'fill-color', [
              'case',
              ['==', ['get', 'STATE_NAME'], stateName],
              '#C6A650', // Highlight color
              '#444444', // Dark color for non-hovered states
            ]);
          }
        });

        map.on('click', 'state-fills', (e) => {
          if (e.features && e.features.length > 0) {
            const stateName = e.features[0].properties?.STATE_NAME;
            const stateData = getStateData(stateName); // Fetch state data based on the stateName
            if (activeCountry().includes(stateName)) {
              setSelectedState(() => stateData);
              setShowModal(true);
              setEmpty(false);
            } else {
              setSelectedState(() => stateData);
              setShowModal(true);
              setEmpty(true);
            }
          }
        });
        map.on('mouseenter', 'state-fills', () => {
          map.getCanvas().style.cursor = 'pointer';
        });

        map.on('mouseleave', 'state-fills', () => {
          map.getCanvas().style.cursor = '';
        });
        // Reset state color when not hovering
        map.on('mouseleave', 'state-fills', () => {
          map.setPaintProperty('state-fills', 'fill-color', '#444444');
        });

        map.style.stylesheet.layers.forEach(function (layer) {
          if (layer.type === 'symbol') {
            map.removeLayer(layer.id);
          }
        });
      });

      return () => {
        map.remove(); // Clean up the map when the component is unmounted
      };
    }
  }, []);

  const getStateData = (stateName: stateData) => {
    // Replace with your data fetching logic
    return {
      name: stateName,
    };
  };

  return (
    <div className="relative w-full h-0 pb-[56.25%] overflow-hidden border-4 border-gray-800 rounded-lg">
      <div ref={mapContainerRef} className="absolute inset-0" />
      <Dialog
        open={showModal}
        handler={() => setShowModal((state) => !state)}
        className="pt-2 flex items-center justify-center z-50"
        size="lg"
      >
        <div className="relative bg-white rounded-lg  w-full max-w-4xl max-h-[90vh] overflow-auto">
          <IconButton
            color="blue-gray"
            size="sm"
            variant="text"
            onClick={() => setShowModal((state) => !state)}
            className="ml-3 mt-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
          {selectedState && (
            <>
              {' '}
              <Typography
                variant="h2"
                className="text-title mb-10 h-[10%] text-center uppercase"
              >
                {selectedState.name}
              </Typography>
            </>
          )}
          <div className="p-4 flex justify-center items-center flex-wrap gap-x-10 gap-y-6">
            {!empty ? (
              contentLaureat()
                .filter(
                  (Laureat) =>
                    Laureat?.state?.toLowerCase() ===
                    selectedState.name.toLowerCase()
                )
                .map(({ title, subtitle, content1, content2 }, index) => (
                  <Laureat
                    key={index}
                    state={selectedState.name}
                    index={index}
                    content1={content1 ?? ''}
                    content2={content2 ?? ''}
                    title={title}
                    subtitle={subtitle}
                  />
                ))
            ) : (
              <div className="min-w-[max-content]">
                <ExclamationCircleIcon className="w-20 h-20 mx-auto" />
                <Typography
                  variant="h6"
                  className="mt-8 mb-14 text-[18px]  text-gray-500 mx-auto md:max-w-sm font-bold"
                >
                  The content for this state is coming soon. <br />
                  Here is the follwing available states below.
                </Typography>
                <div className="flex gap-x-1">
                  {activeCountry()
                    .slice(0, 4)
                    .map((state) => {
                      return (
                        <Button
                          size="sm"
                          key={state}
                          className="w-[min-content] cursor-pointer"
                          onClick={() => {
                            const newState = { name: state };
                            setSelectedState(() => newState);
                            setEmpty(false);
                          }}
                        >
                          {state}
                        </Button>
                      );
                    })}
                </div>
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Map;
