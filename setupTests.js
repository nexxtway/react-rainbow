/* eslint-disable import/no-extraneous-dependencies */
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { toHaveNoViolations } from 'jest-axe';
import 'jest-styled-components';
import toBeFocusable from './jestMatchers/toBeFocusable';

configure({ adapter: new Adapter() });

expect.extend({
    ...toHaveNoViolations,
    toBeFocusable,
});
