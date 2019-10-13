import React from 'react';
import { shallow } from 'enzyme';
import ProgressCircular from './../index';

describe('<ProgressCircular/>', () => {
    it('should be accessible', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
    it('should has set the value passed', () => {
        const component = shallow(<ProgressCircular value={25} />);
        expect(component.find('ProgressRing').prop('percent')).toBe(25);
        expect(component.find('.rainbow-progress-circular_percent-text').text()).toBe('25%');
    });
});
