import ReactGA from 'react-ga';

ReactGA.initialize(process.env.REACT_APP_GA_ID, {
    testMode: process.env.NODE_ENV !== 'production' || process.env.CI,
});

export default ReactGA;
