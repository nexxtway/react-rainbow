import React from 'react';
import { mount } from 'enzyme';
import {
    SPACE_KEY,
    TAB_KEY,
    ESCAPE_KEY,
    ENTER_KEY,
    UP_KEY,
    RIGHT_KEY,
    DOWN_KEY,
    LEFT_KEY,
} from '../../../libs/constants';
import { Component as Picklist } from '../';
import PicklistOption from '../../PicklistOption';

jest.useFakeTimers();

describe('<Picklist />', () => {
    const menuRef = {
        clientHeight: 225,
        scrollTop: 0,
        scrollHeight: 285,
        scrollTo: jest.fn(() => {}),
    };
    it('should set the value label as value in the input element', () => {
        const component = mount(
            <Picklist label="Picklist" value={{ label: 'Option 1' }}>
                <PicklistOption label="Option 1" name="option1" />
            </Picklist>,
        );
        expect(component.find('input').prop('value')).toBe('Option 1');
    });
    it('should have the right number of children registered when mounted', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption disabled label="Option 2" name="option2" />
                <PicklistOption variant="header" label="Header 3" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
            </Picklist>,
        );
        jest.runAllTimers();
        expect(component.instance().activeChildren.length).toBe(3);
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
        component.instance().menuRef.current = menuRef;
        component.find('input').simulate('click');
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
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
            component.instance().menuRef.current = menuRef;
            input.simulate('keyDown', { keyCode });
            expect(component.find('[aria-expanded=true]').exists()).toBe(true);
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
        component.instance().menuRef.current = menuRef;
        input.simulate('keyDown', {
            keyCode: SPACE_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
    });
    it('should close menu when is opened and click the picklist input', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().menuRef.current = menuRef;
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        component.find('input').simulate('click');
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    });
    it('should close menu when is opened and press ESCAPE key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().menuRef.current = menuRef;
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        component.find('input').simulate('keyDown', {
            keyCode: ESCAPE_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    });
    it('should close menu when is opened and press TAB key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().menuRef.current = menuRef;
        component.instance().openMenu();
        component.update();
        expect(component.find('[aria-expanded=true]').exists()).toBe(true);
        component.find('input').simulate('keyDown', {
            keyCode: TAB_KEY,
        });
        expect(component.find('[aria-expanded=true]').exists()).toBe(false);
    });
    it('should fire onChange when option is selected by click', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Picklist label="Picklist" onChange={onChangeFn}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.instance().menuRef.current = menuRef;
        component.instance().openMenu();
        component.update();
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        expect(onChangeFn).toHaveBeenCalledWith({
            label: 'Option 2',
            name: 'option2',
            icon: null,
            value: undefined,
        });
    });
    it('should fire onChange when option is selected by pressing ENTER key', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <Picklist label="Picklist" onChange={onChangeFn}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();
        component.instance().menuRef.current = menuRef;
        component.instance().openMenu();
        component.update();
        component
            .find('li')
            .at(1)
            .simulate('keyDown', {
                keyCode: ENTER_KEY,
            });
        expect(onChangeFn).toHaveBeenCalledWith({
            label: 'Option 1',
            name: 'option1',
            icon: null,
            value: undefined,
        });
    });
    it('should render scroll down arrow when number of children is more than five', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
                <PicklistOption label="Option 5" name="option5" />
                <PicklistOption label="Option 6" name="option6" />
                <PicklistOption label="Option 7" name="option7" />
                <PicklistOption label="Option 8" name="option8" />
            </Picklist>,
        );
        component.instance().menuRef.current = {
            ...menuRef,
            scrollHeight: 360,
        };
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='down']").exists()).toBe(true);
    });
    it('should not render scroll down arrow when number of children is less than five', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
                <PicklistOption label="Option 5" name="option5" />
            </Picklist>,
        );

        component.instance().menuRef.current = {
            ...menuRef,
            clientHeight: 200,
            scrollHeight: 200,
        };
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='down']").exists()).toBe(false);
    });
    it('should not render scroll up arrow when popup menu scroll position is zero', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
                <PicklistOption label="Option 5" name="option5" />
                <PicklistOption label="Option 6" name="option6" />
                <PicklistOption label="Option 7" name="option7" />
                <PicklistOption label="Option 8" name="option8" />
            </Picklist>,
        );
        component.instance().menuRef.current = {
            ...menuRef,
            clientHeight: 230,
            scrollHeight: 320,
        };
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='up']").exists()).toBe(false);
    });
    it('should render scroll up arrow when popup menu scroll position is greater than zero', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
                <PicklistOption label="Option 5" name="option5" />
                <PicklistOption label="Option 6" name="option6" />
                <PicklistOption label="Option 7" name="option7" />
                <PicklistOption label="Option 8" name="option8" />
            </Picklist>,
        );
        component.instance().menuRef.current = {
            ...menuRef,
            scrollTop: 80,
            clientHeight: 230,
            scrollHeight: 320,
        };
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='up']").exists()).toBe(true);
    });
});
