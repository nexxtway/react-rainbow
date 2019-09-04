import React from 'react';
import { mount } from 'enzyme';
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
        expect(component.instance().activeChildren.length).toEqual(3);
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
        expect(component.instance().activeChildren.length).toEqual(2);
        expect(itemIndex).toEqual(-1);
    });
});
