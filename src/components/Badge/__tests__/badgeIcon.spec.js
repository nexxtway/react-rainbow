import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';
import BadgeIcon from '../badgeIcon';

describe('<BadgeIcon/> in the Badge component', () => {
    it('should not have children when the isVisible is not passed', () => {
        const component = mount(
            <BadgeIcon />,
        );
        expect(component.children().length).toBe(0);
    });
    it('should have the right class names when the label is not passed', () => {
        const component = renderer.create(
            <BadgeIcon iconName="utility:world" isVisible iconPosition="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the label is passed and iconPosition is left', () => {
        const component = renderer.create(
            <BadgeIcon label="testing BadgeIcon" isVisible iconName="utility:world" iconPosition="left" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when the label is passed and iconPosition is right', () => {
        const component = renderer.create(
            <BadgeIcon label="testing BadgeIcon" isVisible iconName="utility:world" iconPosition="right" />,
        );
        expect(component).toMatchSnapshot();
    });
});
