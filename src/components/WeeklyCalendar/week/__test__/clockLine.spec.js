import React from 'react';
import { mount } from 'enzyme';
import ClockLine from '../clockLine';
import StyledClockLine from '../styled/clockLine';

jest.mock('../../hooks', () => ({
    useTimer: () => new Date().setHours(8, 0, 0, 0),
}));

describe('<ClockLine />', () => {
    it('should render on top 320px when the clock is 8:00 AM', () => {
        const wrapper = mount(<ClockLine />);
        expect(wrapper.find(StyledClockLine).prop('style').top).toBe('320px');
    });
});
