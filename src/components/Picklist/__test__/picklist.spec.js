import React from 'react';
import { mount } from 'enzyme';
import {
    SPACE_KEY,
    TAB_KEY,
    ESCAPE_KEY,
    UP_KEY,
    RIGHT_KEY,
    DOWN_KEY,
    LEFT_KEY,
} from '../../../libs/constants';
import { Component as Picklist } from '..';
import PicklistOption from '../../PicklistOption';
import InternalOverlay from '../../InternalOverlay';

jest.mock('../../InternalOverlay', () =>
    // eslint-disable-next-line react/jsx-props-no-spreading
    jest.fn((...props) => <div {...props} data-id="internal-dropdown" />),
);

jest.useFakeTimers();

describe('<Picklist />', () => {
    it('should set the value label as value in the input element', () => {
        const component = mount(
            <Picklist label="Picklist" value={{ label: 'Option 1' }}>
                <PicklistOption label="Option 1" name="option1" />
            </Picklist>,
        );
        expect(component.find('input').prop('value')).toBe('Option 1');
    });
    it('should open menu when click the picklist input', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
        component.find('input').simulate('click');
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    });
    it('should open menu when picklist is focused and press a navigation key', () => {
        const keyCodes = [UP_KEY, LEFT_KEY, RIGHT_KEY, DOWN_KEY];
        keyCodes.forEach(keyCode => {
            const component = mount(
                <Picklist label="Picklist">
                    <PicklistOption label="Option 1" name="option1" />
                    <PicklistOption label="Option 2" name="option2" />
                    <PicklistOption label="Option 3" name="option3" />
                </Picklist>,
            );
            const input = component.find('input');
            input.simulate('focus');
            expect(component.find('[aria-expanded=true]').exists()).toBe(false);
            expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
            input.simulate('keyDown', { keyCode });
            expect(component.find('[aria-expanded=true]').exists()).toBe(true);
            expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
        });
    });
    it('should open menu when picklist is focused and press SPACE key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        const input = component.find('input');
        input.simulate('focus');
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
        input.simulate('keyDown', {
            keyCode: SPACE_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
    });
    it('should close menu when is opened and click the picklist input', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
        component.find('input').simulate('click');
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    });
    it('should close menu when is opened and press ESCAPE key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
        component.find('input').simulate('keyDown', {
            keyCode: ESCAPE_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    });
    it('should close menu when is opened and press TAB key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(true);
        component.find('input').simulate('keyDown', {
            keyCode: TAB_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
        expect(component.find(InternalOverlay).prop('isVisible')).toBe(false);
    });
});
