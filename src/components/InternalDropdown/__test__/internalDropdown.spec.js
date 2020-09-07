import React from 'react';
import { mount } from 'enzyme';
import { ENTER_KEY } from '../../../libs/constants';
import InternalDropdown from '../';
import Option from '../../Option';
import Spinner from '../../Spinner';

jest.useFakeTimers();
jest.mock('../helpers/scrollTo', () => jest.fn());

describe('InternalDropdown', () => {
    beforeEach(() => {
        jest.useFakeTimers();
    });
    it('should fire onChange when option is selected by click', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn}>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        jest.runAllTimers();
        expect(onChangeFn).toHaveBeenCalledWith({
            icon: null,
            label: 'Option 2',
            name: 'option2',
            value: undefined,
        });
    });
    it('should fire onChange with the right data when select one option and multiple is passed and there are no options selected', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        component
            .find('li')
            .at(2)
            .simulate('mousedown');
        jest.runAllTimers();
        expect(onChangeFn).toHaveBeenCalledWith([
            {
                icon: null,
                label: 'Option 3',
                name: 'option3',
                value: undefined,
            },
        ]);
    });
    it('should fire onChange with the right data when select one option and multiple is passed and have other options selected', () => {
        const onChangeFn = jest.fn();
        const value = [
            {
                icon: null,
                label: 'Option 1',
                name: 'option1',
                value: undefined,
            },
        ];
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple value={value}>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        jest.runAllTimers();
        expect(onChangeFn).toHaveBeenCalledWith([
            {
                icon: null,
                label: 'Option 1',
                name: 'option1',
                value: undefined,
            },
            {
                icon: null,
                label: 'Option 2',
                name: 'option2',
                value: undefined,
            },
        ]);
    });
    it('should fire onChange with the right data when deselecting one option and multiple is passed and have other options selected', () => {
        const onChangeFn = jest.fn();
        const value = [
            {
                icon: null,
                label: 'Option 1',
                name: 'option1',
                value: undefined,
            },
            {
                icon: null,
                label: 'Option 2',
                name: 'option2',
                value: undefined,
            },
        ];
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple value={value}>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        const optionsSelected = [
            {
                icon: null,
                label: 'Option 1',
                name: 'option1',
                value: undefined,
            },
        ];
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        jest.runAllTimers();
        expect(onChangeFn).toHaveBeenCalledWith(optionsSelected);
    });

    it('should fire onChange when option is selected by pressing ENTER key', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn}>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        jest.runAllTimers();
        component
            .find('li')
            .at(1)
            .simulate('keyDown', {
                keyCode: ENTER_KEY,
            });
        expect(onChangeFn).toHaveBeenCalledWith({
            icon: null,
            label: 'Option 1',
            name: 'option1',
            value: undefined,
        });
    });
    it('should render svg and input elements when enableSearch is passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist" enableSearch>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find('SearchIcon').exists()).toBe(true);
        expect(component.find('input[type="search"]').exists()).toBe(true);
    });
    it('should not render svg and input elements if enableSearch is not passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist">
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find('SearchIcon').exists()).toBe(false);
        expect(component.find('input[type="search"]').exists()).toBe(false);
    });
    it('should render loading icon when isLoading is passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist" isLoading>
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find(Spinner).exists()).toBe(true);
    });

    it('should div with role="listbox" have aria-activedescendant = to id to option on focus', () => {
        const component = mount(
            <InternalDropdown label="Picklist">
                <Option label="Option 1" name="option1" />
                <Option label="Option 2" name="option2" />
                <Option label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        const divOption = component.find('li').at(1);
        divOption.simulate('mouseenter');
        const divListbox = component.find('div[role="listbox"]');
        expect(divListbox.prop('aria-activedescendant')).toBe('option2');
    });
});
