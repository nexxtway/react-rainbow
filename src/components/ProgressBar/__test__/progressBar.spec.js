import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ProgressBar from './../index';

describe('<ProgressBar/>', () => {
    it('should render a large progress bar', () => {
        const component = renderer.create(<ProgressBar value={40} size="large" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a progress bar with assistive text', () => {
        const component = renderer.create(<ProgressBar assistiveText="Progress: 0%" />);

        expect(component).toMatchSnapshot();
    });

    it('should has set the value passed', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('span.slds-progress-bar__value').prop('style').width).toBe('25%');
    });

    it('should be accesible', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
});
