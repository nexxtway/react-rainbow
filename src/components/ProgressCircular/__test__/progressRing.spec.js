import React from 'react';
import { shallow } from 'enzyme';
import ProgressRing from './../progressRing';

describe('<ProgressRing/>', () => {
    it('should have the right classnames', () => {
        const component = shallow(<ProgressRing percent={25} />);
        const container = component.find('div.rainbow-progress-circular_ring');
        const svgRingPath = component.find('svg').find('path.rainbow-progress-circular_ring-path');
        expect(container.exists()).toBe(true);
        expect(svgRingPath.exists()).toBe(true);
    });
    it('should be accesible', () => {
        const component = shallow(<ProgressRing percent={25} />);
        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
});
