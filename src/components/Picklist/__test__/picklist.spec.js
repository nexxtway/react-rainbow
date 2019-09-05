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
    it('should set the value label as value in the input element', () => {
        const component = mount(
            <Picklist label="Picklist" value={{ label: 'Option 1' }}>
                <PicklistOption label="Option 1" name="option1" />
            </Picklist>,
        );
        expect(component.find('input').prop('value')).toBe('Option 1');
    });
    it('should have the right number of childs registered when mounted', () => {
        const optionRegisterChildFn = jest.spyOn(Picklist.prototype, 'registerChild');
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
        expect(optionRegisterChildFn).toHaveBeenCalledTimes(3);
    });
    it('should remove child from list when it is selected', () => {
        const optionUnregisterChildFn = jest.spyOn(Picklist.prototype, 'unregisterChild');
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        component.setProps({
            value: {
                name: 'option1',
            },
        });
        jest.runAllTimers();
        const itemIndex = component
            .instance()
            .activeChildren.findIndex(child => child.name === 'option1');
        expect(optionUnregisterChildFn).toHaveBeenCalled();
        expect(component.instance().activeChildren.length).toBe(2);
        expect(itemIndex).toBe(-1);
    });
    it('should open menu when click the picklist input', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();
        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.find('input').simulate('click');
        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should open menu when picklist is focused and press UP navigation key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        const input = component.find('input');
        input.simulate('focus');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );

        input.simulate('keyDown', {
            keyCode: UP_KEY,
        });

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should open menu when picklist is focused and press RIGHT navigation key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        const input = component.find('input');
        input.simulate('focus');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );

        input.simulate('keyDown', {
            keyCode: RIGHT_KEY,
        });

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should open menu when picklist is focused and press DOWN navigation key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        const input = component.find('input');
        input.simulate('focus');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );

        input.simulate('keyDown', {
            keyCode: DOWN_KEY,
        });

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should open menu when picklist is focused and press LEFT navigation key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        const input = component.find('input');
        input.simulate('focus');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );

        input.simulate('keyDown', {
            keyCode: LEFT_KEY,
        });

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should open menu when picklist is focused and press SPACE key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        const input = component.find('input');
        input.simulate('focus');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );

        input.simulate('keyDown', {
            keyCode: SPACE_KEY,
        });

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );
    });
    it('should close menu when is opened and click the picklist input', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );

        component.find('input').simulate('click');

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
    });
    it('should close menu when is opened and press ESCAPE key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );

        component.find('input').simulate('keyDown', {
            keyCode: ESCAPE_KEY,
        });

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
    });
    it('should close menu when is opened and press TAB key', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </Picklist>,
        );
        jest.runAllTimers();

        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();

        expect(component.state().isOpen).toBe(true);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist rainbow-picklist--open',
        );

        component.find('input').simulate('keyDown', {
            keyCode: TAB_KEY,
        });

        expect(component.state().isOpen).toBe(false);
        expect(component.find("div[role='presentation']").prop('className')).toBe(
            'rainbow-picklist',
        );
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
        jest.runAllTimers();
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();
        component
            .find('li.rainbow-picklist-option')
            .at(1)
            .simulate('mousedown');
        expect(onChangeFn).toHaveBeenCalled();
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
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 285,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();
        component
            .find('li.rainbow-picklist-option')
            .at(1)
            .simulate('keyDown', {
                keyCode: ENTER_KEY,
            });
        expect(onChangeFn).toHaveBeenCalled();
    });
    it('should render scroll down arrow when number of childs is more than five', () => {
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
        jest.runAllTimers();
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 225,
                scrollTop: 0,
                scrollHeight: 360,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='down']").exists()).toBe(true);
    });
    it('should not render scroll down arrow when number of childs is less than five', () => {
        const component = mount(
            <Picklist label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
                <PicklistOption label="Option 4" name="option4" />
                <PicklistOption label="Option 5" name="option5" />
            </Picklist>,
        );
        jest.runAllTimers();
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 200,
                scrollTop: 0,
                scrollHeight: 200,
                scrollTo: jest.fn(() => {}),
            },
        );
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
        jest.runAllTimers();
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 230,
                scrollTop: 0,
                scrollHeight: 320,
                scrollTo: jest.fn(() => {}),
            },
        );
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
        jest.runAllTimers();
        component.instance().menuRef.current = Object.assign(
            {},
            component.instance().menuRef.current,
            {
                clientHeight: 230,
                scrollTop: 80,
                scrollHeight: 320,
                scrollTo: jest.fn(() => {}),
            },
        );
        component.instance().openMenu();
        component.update();
        expect(component.find("MenuArrowButton[arrow='up']").exists()).toBe(true);
    });
});
