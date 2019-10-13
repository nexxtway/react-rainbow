import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from './../index';

describe('<ProgressBar/>', () => {
    it('should has set the value passed', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('span').prop('style').width).toBe('25%');
    });
    it('should be accessible', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
});
