import ReactGA from 'react-ga';

const trackId = 'UA-126214096-1';
ReactGA.initialize(trackId);

ReactGA.pageview(window.location.pathname);
