import ReactGA from 'react-ga';

const trackId = 'UA-126214096-1';

ReactGA.initialize(trackId, {
    testMode: process.env.NODE_ENV !== 'production',
});

export default ReactGA;
