import Logo from '../components/Logo';
import RichardPicture from '../assets/Richard.jpeg';
import JeanPicture from '../assets/jean.jpeg';
import AmyPicture from '../assets/amy.jpeg';
import DevPicture from '../assets/dev.jpeg';

const contentEnglish = {
  topBar: {
    logo: 'Adinkra Institute',
    navItems: [
      {
        name: 'Home',
        link: '/#home',
        tag: 'home',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
             t size-3"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
      {
        name: 'Honorees',
        link: 'honorees',
        tag: 'honorees',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
             t size-3"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
      {
        name: 'Team',
        link: '/#team',
        tag: 'team',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
             t size-3"
            >
              <path
                fillRule="evenodd"
                d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
      {
        name: 'About Us',
        link: '/#about',
        tag: 'about',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
              size-3"
            >
              <path
                fillRule="evenodd"
                d="M4 16.5v-13h-.25a.75.75 0 0 1 0-1.5h12.5a.75.75 0 0 1 0 1.5H16v13h.25a.75.75 0 0 1 0 1.5h-3.5a.75.75 0 0 1-.75-.75v-2.5a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75v2.5a.75.75 0 0 1-.75.75h-3.5a.75.75 0 0 1 0-1.5H4Zm3-11a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 9a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM11 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm.5 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
      {
        name: 'Press',
        link: '#press',
        tag: 'press',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
              size-3"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 1 1-16 0 8 8 0 0 1 16 0Zm-6.5 6.326a6.52 6.52 0 0 1-1.5.174 6.487 6.487 0 0 1-5.011-2.36l.49-.98a.423.423 0 0 1 .614-.164l.294.196a.992.992 0 0 0 1.491-1.139l-.197-.593a.252.252 0 0 1 .126-.304l1.973-.987a.938.938 0 0 0 .361-1.359.375.375 0 0 1 .239-.576l.125-.025A2.421 2.421 0 0 0 12.327 6.6l.05-.149a1 1 0 0 0-.242-1.023l-1.489-1.489a.5.5 0 0 1-.146-.353v-.067a6.5 6.5 0 0 1 5.392 9.23 1.398 1.398 0 0 0-.68-.244l-.566-.566a1.5 1.5 0 0 0-1.06-.439h-.172a1.5 1.5 0 0 0-1.06.44l-.593.592a.501.501 0 0 1-.13.093l-1.578.79a1 1 0 0 0-.553.894v.191a1 1 0 0 0 1 1h.5a.5.5 0 0 1 .5.5v.326Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
      {
        name: 'Contact Us',
        link: '/#contact',
        tag: 'contact',
        Logo: () => {
          return (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="
              size-3"
            >
              <path
                fillRule="evenodd"
                d="M10 3c-4.31 0-8 3.033-8 7 0 2.024.978 3.825 2.499 5.085a3.478 3.478 0 0 1-.522 1.756.75.75 0 0 0 .584 1.143 5.976 5.976 0 0 0 3.936-1.108c.487.082.99.124 1.503.124 4.31 0 8-3.033 8-7s-3.69-7-8-7Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-2-1a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
                clipRule="evenodd"
              />
            </svg>
          );
        },
      },
    ],
    contact: {
      name: 'Get in Touch',
      link: '#contact',
    },
  },
  header: {
    title: 'Adinkra Distinguished Black Achievers Honors',
    subTitle:
      'Select any state on the map below to explore the 2024 laureates !',
    content:
      'Discover the exceptional individuals honored as Adinkra Distinguished Black Achievers. These leaders have made profound contributions to their communities throughout the United States.',
    button: {
      name: 'Learn more',
      link: '#about',
      tag: 'about',
    },
  },
  team: {
    title: 'Our Team',
    subTitle: 'Meet the dedicated team behind the initiative.',
    members: [
      {
        name: 'Richard Seshie',
        Subtitle: 'President',
        linkedin: 'https://www.linkedin.com/in/richardseshie/',
        Image: () => {
          return (
            <img
              src={RichardPicture}
              alt="Richard Seshie"
              className="rounded-full w-32"
            />
          );
        },
      },
      {
        name: 'Jean Claude Gouesse',
        linkedin: 'https://www.linkedin.com/in/jeanclaudegouesse/',
        Subtitle: 'Vice President',
        Image: () => {
          return (
            <img
              src={JeanPicture}
              alt="Jean Claude Gouesse"
              className="rounded-full w-32"
            />
          );
        },
      },
      {
        name: 'Aminata Toure',
        linkedin: 'https://www.linkedin.com/in/aminata-toure-41a2a025a/',
        Subtitle: 'Project Manager',
        Image: () => {
          return (
            <img
              src={AmyPicture}
              alt="Aminata Toure"
              className="rounded-full w-32 h-32"
            />
          );
        },
      },
      {
        name: 'Sylla Ibrahim',
        linkedin: 'https://www.linkedin.com/in/brahimcode',
        Subtitle: 'IT Manager',
        Image: () => {
          return (
            <img
              src={DevPicture}
              alt="Sylla Ibrahim"
              className="rounded-full w-32 h-32"
            />
          );
        },
      },
    ],
  },
  about: {
    title: 'About us',
    subTitle: 'About Adinkra Distinguished Black Achievers Honors',
    content:
      'The Adinkra Distinguished Black Achievers Honors is a prestigious recognition program by the Adinkra Alliance Institute, aimed at celebrating individuals who have shown outstanding leadership and made a lasting impact in their communities. Our mission is to honor and uplift the unsung Black heroes creating positive change across the United States.',
    organization: {
      title: 'Our Organization',
      subTitle: 'Adinkra Alliance Institute',
      content:
        ' is a 501(c)3 non-profit organization dedicated to improving the lives of Black communities and minority groups and championing initiatives for development, environmental justice, and equity in the United States and globally.',
      sections: [
        {
          title: '',
          content:
            'To recognize and support outstanding Black leaders who contribute significantly to their communities.',
          Logo: () => <Logo small />,
        },
        {
          title: '',
          content:
            'To inspire and empower individuals by highlighting exemplary role models and their achievements.',
          Logo: () => <Logo small />,
        },
      ],
    },
  },
  contact: {
    title: 'Get in Touch',
    content:
      "We'd love to connect with you! Whether you have questions or are interested in collaborating, don’t hesitate to get in touch.",
    form: {
      title: 'Contact Us',
    },
    list: [
      {
        name: 'team@adinkrafellowship.com',
        Logo: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
            <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
          </svg>
        ),
      },
      {
        name: '8 the Green Suite G Dover, DE 19901-3618 United States',
        Logo: () => (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="size-4"
          >
            <path
              fillRule="evenodd"
              d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
              clipRule="evenodd"
            />
          </svg>
        ),
      },
    ],
  },
};

export default contentEnglish;

{
  /* <RectangleStackIcon className="h-5 w-5" /> */
}
