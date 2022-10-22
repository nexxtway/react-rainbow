/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { toHaveNoViolations } from 'jest-axe';
import toBeFocusable from './jestMatchers/toBeFocusable';
import '@testing-library/jest-dom';

configure({ adapter: new Adapter() });

expect.extend({
    ...toHaveNoViolations,
    toBeFocusable,
});
