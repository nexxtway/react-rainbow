import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ProgressBar from './../index';

describe('<ProgressBar/>', () => {
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
    it('should have the right class names when variant, color and size default and have a custom class', () => {
        const component = renderer.create(
            <ProgressBar className="custom-class" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant circular', () => {
        const component = renderer.create(
            <ProgressBar variant="circular" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size large', () => {
        const component = renderer.create(
            <ProgressBar size="large" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size medium', () => {
        const component = renderer.create(
            <ProgressBar size="medium" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size small', () => {
        const component = renderer.create(
            <ProgressBar size="small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when size x-small', () => {
        const component = renderer.create(
            <ProgressBar size="x-small" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when color success', () => {
        const component = renderer.create(
            <ProgressBar color="success" />,
        );
        expect(component).toMatchSnapshot();
    });
});
