import { Typography } from '@material-tailwind/react';
import SearchBar from '../components/SearchBar';
import contentLaureat from '../content/contentLaureat';
import Laureat from '../components/Laureat';
import {
  activeCountry,
  statesChangeFormat,
} from '../content/contentFiltersLaureat';
import { useState } from 'react';

function checkLetters(input: string, requiredLetters: string): boolean {
  // Convert letters to an array for easier processing
  const lettersArray = requiredLetters.split('');

  // Check for 5 letters in the input
  const includedCount = lettersArray.filter((letter) =>
    input.includes(letter)
  ).length;

  // Return true if 5 letters are included and the excluded letter is not in the input
  return (
    includedCount > 3 ||
    requiredLetters.length == 0 ||
    input.includes(requiredLetters)
  );
}

const Achievers = () => {
  const [state, setState] = useState(activeCountry()[0].toLowerCase());
  const [search, setSearch] = useState('');

  const handleState = (state: string) => setState(state);
  const handleSearch = (search: string) => setSearch(search);

  return (
    <div className="pt-20 md:pt-44 lg:pt-36 min-h-[56dvh]">
      <div className="flex justify-center items-center mb-5">
        <div className="h-1 w-28 bg-primary"></div>
      </div>
      <Typography
        variant="h3"
        className="text-title mb-10 h-[10%] text-center uppercase w-full"
      >
        BLACK ACHIEVERS BIOGRAPHIES{' '}
      </Typography>
      <SearchBar
        state={state}
        search={search}
        onChangeState={handleState}
        onChangeSearch={handleSearch}
      />
      <div className="p-4 mt-2 flex justify-center items-center flex-wrap gap-x-10 gap-y-6 max-h-[70dvh] overflow-y-scroll">
        {contentLaureat()
          .filter(
            (Laureat) =>
              Laureat?.state?.toLowerCase() === state.toLowerCase() &&
              checkLetters(
                Laureat.subtitle.toLowerCase().split(' ').join(''),
                search.toLowerCase().split(' ').join('')
              )
          )
          .map(({ title, subtitle, content1, content2 }, index) => (
            <Laureat
              key={subtitle}
              index={index}
              state={
                state.charAt(0).toUpperCase() + state.slice(1, state.length)
              }
              content1={content1 ?? ''}
              content2={content2 ?? ''}
              title={
                statesChangeFormat.includes(
                  state.charAt(0).toUpperCase() + state.slice(1, state.length)
                )
                  ? subtitle
                  : title
              }
              subtitle={
                statesChangeFormat.includes(
                  state.charAt(0).toUpperCase() + state.slice(1, state.length)
                )
                  ? title
                  : subtitle
              }
            />
          ))}
      </div>
    </div>
  );
};

export default Achievers;
