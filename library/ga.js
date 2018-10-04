import ReactGA from 'react-ga';

const trackId = 'UA-126214096-1';
const isProduction = process.env.NODE_ENV === 'production';

ReactGA.initialize(trackId, {
    testMode: !isProduction,
});

if (window.location.hash === '') {
    ReactGA.pageview('/#/Overview');
} else {
    ReactGA.pageview(window.location.hash);
}

export default ReactGA;
