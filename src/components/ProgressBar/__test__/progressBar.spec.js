import React from 'react';
import { mount, shallow } from 'enzyme';
import ProgressBar from './../index';

describe('<ProgressBar/>', () => {
    it('should has set the value passed', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('span.rainbow-progress-bar__value').prop('style').width).toBe('25%');
    });
    it('should be accesible', () => {
        const component = shallow(<ProgressBar value={25} />);

        expect(component.find('div[role="progressbar"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemax="100"]').exists()).toBe(true);
        expect(component.find('div[aria-valuemin="0"]').exists()).toBe(true);
        expect(component.find('div[aria-valuenow=25]').exists()).toBe(true);
    });
    it('should have the right class names when variant, color and size default and have a custom class', () => {
        const component = mount(
            <ProgressBar className="custom-class" />,
        );
        const container = component.find('div.rainbow-progress-bar.rainbow-progress-bar_medium.custom-class');
        const progressBar = component.find('span.rainbow-progress-bar__value');

        expect(container.exists()).toBe(true);
        expect(progressBar.exists()).toBe(true);
    });
    it('should have the right class names when size large', () => {
        const component = mount(
            <ProgressBar size="large" />,
        );
        expect(component.find('div.rainbow-progress-bar.rainbow-progress-bar_large').exists()).toBe(true);
    });
    it('should have the right class names when size medium', () => {
        const component = mount(
            <ProgressBar size="medium" />,
        );
        expect(component.find('div.rainbow-progress-bar.rainbow-progress-bar_medium').exists()).toBe(true);
    });
    it('should have the right class names when size small', () => {
        const component = mount(
            <ProgressBar size="small" />,
        );
        expect(component.find('div.rainbow-progress-bar.rainbow-progress-bar_small').exists()).toBe(true);
    });
    it('should have the right class names when size x-small', () => {
        const component = mount(
            <ProgressBar size="x-small" />,
        );
        expect(component.find('div.rainbow-progress-bar.rainbow-progress-bar_x-small').exists()).toBe(true);
    });
    it('should have the right class names when varaint success', () => {
        const component = mount(
            <ProgressBar variant="success" />,
        );

        const container = component.find('div.rainbow-progress-bar.rainbow-progress-bar_medium.rainbow-progress-bar_success');
        const progressBar = component.find('span.rainbow-progress-bar__value.rainbow-progress-bar__value_success');

        expect(container.exists()).toBe(true);
        expect(progressBar.exists()).toBe(true);
    });
});
