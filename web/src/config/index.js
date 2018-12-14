import moment from 'moment';
import logo from '../assets/images/logo-white.svg';

export default {
  apiUrl: 'http://yoursite.com/api/',
};
const siteConfig = {
  siteIcon: logo,
  footerText: `DanaQueue ©${moment().year()}. Made with ♥ by DanaQueue team`,
};

const themeConfig = {
  topbar: 'themedefault',
  sidebar: 'themedefault',
  layout: 'themedefault',
  theme: 'themedefault',
};
const language = 'english';
const AlgoliaSearchConfig = {
  appId: '',
  apiKey: '',
};
const Auth0Config = {
  domain: '',
  clientID: '', //
  options: {
    auth: {
      autoParseHash: true,
      redirect: false,
    },
    languageDictionary: {
      title: 'Isomorphic',
      emailInputPlaceholder: 'demo@gmail.com',
      passwordInputPlaceholder: 'demodemo',
    },
    icon: '',
    theme: {
      labeledSubmitButton: true,
      logo: 'https://s3.amazonaws.com/redqteam.com/logo/isomorphic.png',
      primaryColor: '#E14615',
      authButtons: {
        connectionName: {
          displayName: 'Log In',
          primaryColor: '#b7b7b7',
          foregroundColor: '#000000',
          icon: undefined,
        },
      },
    },
  },
};
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
};
const googleConfig = {
  apiKey: '', //
};
const mapboxConfig = {
  tileLayer: '',
  maxZoom: '',
  defaultZoom: '',
  center: [],
};
const youtubeSearchApi = '';

const appConfig = {
  REACT_APP_SERVER_URL: process.env.REACT_APP_SERVER_URL,
  PARSE_APP_ID: process.env.REACT_APP_PARSE_APP_ID,
  REST_API_KEY: process.env.REACT_APP_PARSE_REST_API_KEY,
};
export {
  siteConfig,
  themeConfig,
  language,
  AlgoliaSearchConfig,
  Auth0Config,
  firebaseConfig,
  googleConfig,
  mapboxConfig,
  youtubeSearchApi,
  appConfig,
};
