import React from 'react';
import { shallow } from 'enzyme';
import IconSvg from './../index';

describe('<IconSvg/>', () => {
    it('should show a console warning when the iconName\'s format is wrong', () => {
        console.warn = jest.fn();
        shallow(<IconSvg iconName="custom-custom5" />);

        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('should show a console warning when variant is used in a sprite other than utility', () => {
        console.warn = jest.fn();
        shallow(<IconSvg iconName="custom:custom5" variant="error" />);

        expect(console.warn).toHaveBeenCalledTimes(1);
    });

    it('should render a component with light variant', () => {
        const component = shallow(<IconSvg iconName="utility:like" variant="light" />);

        expect(component.find('.slds-icon-text-light').exists()).toBe(true);
    });

    it('should render a component with a large size', () => {
        const component = shallow(
            <IconSvg iconName="utility:like" size="large" variant="default" />,
        );

        expect(component.find('.slds-icon_large').exists()).toBe(true);
    });

    it('should use default variant when sprite is utility and variant was not passed', () => {
        const component = shallow(<IconSvg iconName="utility:like" />);

        expect(component.find('.slds-icon-text-default').exists()).toBe(true);
    });
});
