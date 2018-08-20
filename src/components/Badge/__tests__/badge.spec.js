import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Badge from './../index';

describe('<Badge/>', () => {
    it('should have the right class names when variant default and have a custom class', () => {
        const component = renderer.create(
            <Badge label="Badge label" className="custom-class" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant inverse', () => {
        const component = renderer.create(
            <Badge label="Inverse Badge" variant="inverse" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when variant lightest', () => {
        const component = renderer.create(
            <Badge label="Lightest Badge" variant="lightest" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should render an icon on the left when iconName is passed', () => {
        const component = mount(
            <Badge label="Lightest Badge" iconName="utility:world" />,
        );
        const leftIcon = component.find('[data-id="left-icon"]');
        const rightIcon = component.find('[data-id="right-icon"]');

        expect(leftIcon.prop('isVisible')).toBe(true);
        expect(rightIcon.prop('isVisible')).toBe(false);
    });
    it('should render an icon on the right when iconName is passed and iconPosition is right', () => {
        const component = mount(
            <Badge label="Lightest Badge" iconName="utility:world" iconPosition="right" />,
        );
        const leftIcon = component.find('[data-id="left-icon"]');
        const rightIcon = component.find('[data-id="right-icon"]');

        expect(leftIcon.prop('isVisible')).toBe(false);
        expect(rightIcon.prop('isVisible')).toBe(true);
    });
});
