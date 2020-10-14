/* eslint-disable import/no-extraneous-dependencies */
import { configureAxe } from 'jest-axe';

const axe = configureAxe({
    rules: {
        region: { enabled: false },
    },
});

export default axe;
