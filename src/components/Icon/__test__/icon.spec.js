import React from 'react';
import Icon from './../index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Icon/>', () => {

    it('should render a custom icon', () => {
        const component = renderer.create(
            <Icon iconName="custom:custom5"/>
        );

        expect(component).toMatchSnapshot();
    }); 

    it('should render a utility icon with title and variant props', () => {
        const component = renderer.create(
            <Icon iconName="utility:like" title="like button" variant="light" />
        );

        expect(component).toMatchSnapshot();
    }); 

    it('should render a standard icon with size and style props', () => {
        const component = renderer.create(
            <Icon iconName="standard:announcement" size="large" style={{ backgroundColor: 'aqua', borderRadius: '10px' }} />
        );

        expect(component).toMatchSnapshot();
    });

     it('should render nothing when the iconName\'s format is wrong', () => {
        const component = renderer.create(
            <Icon iconName="utility-like:custom5" />
        );

        expect(component).toMatchSnapshot();
    });

    it('should show a console warning when the iconName\'s format is wrong', () => {
        console.warn = jest.fn();
        const component = shallow(
            <Icon iconName="custom-custom5" />
        );

        expect(console.warn).toHaveBeenCalledTimes(1);

    });

    it(': should be replaced by -', () => {
        const component = shallow(
            <Icon iconName="custom:custom5" />
        );    

        expect(component.find('.slds-icon-custom-custom5').exists()).toBe(true);

    });

    it('should show a console warning when variant is used in a sprite other than utility', () => {
        console.warn = jest.fn()
        const component = shallow(
            <Icon iconName="custom:custom5" variant="error" />
        );

        expect(console.warn).toHaveBeenCalledTimes(1);

    });

    it('should render a component with light variant', () => {
        const component = shallow(
            <Icon iconName="utility:like" variant="light" />
        );

        expect(component.find('.slds-icon-text-light').exists()).toBe(true);

    });

    it('should render a component with a large size', () => {
        const component = shallow(
            <Icon iconName="utility:like" size="large" />
        );

        expect(component.find('.slds-icon_large').exists()).toBe(true);

    });

});