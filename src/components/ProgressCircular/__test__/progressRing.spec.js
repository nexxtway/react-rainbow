import React from 'react';
import { shallow } from 'enzyme';
import ProgressRing from './../progressRing';

describe('<ProgressRing/>', () => {
    it('should be accesible', () => {
        const component = shallow(<ProgressRing percent={25} />);
        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
});
