import React from 'react';
import { mount } from 'enzyme';
import { ENTER_KEY } from '../../../libs/constants';
import InternalDropdown from '../';
import PicklistOption from '../../PicklistOption';
import Spinner from '../../Spinner';

jest.useFakeTimers();
jest.mock('../helpers/scrollTo', () => jest.fn());

describe('InternalDropdown', () => {
    it('should fire onChange when option is selected by click', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
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
    it('should fire onChange with the right data when select one option and multiple is passed and there are no options selected', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        component
            .find('li')
            .at(2)
            .simulate('mousedown');
        expect(onChangeFn).toHaveBeenCalledWith([
            {
                label: 'Option 3',
                name: 'option3',
                icon: null,
                value: undefined,
            },
        ]);
    });
    it('should fire onChange with the right data when select one option and multiple is passed and have other options selected', () => {
        const onChangeFn = jest.fn();
        const value = [
            {
                label: 'Option 1',
                name: 'option1',
                icon: null,
                value: undefined,
            },
        ];
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple value={value}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        expect(onChangeFn).toHaveBeenCalledWith([
            {
                label: 'Option 1',
                name: 'option1',
                icon: null,
                value: undefined,
            },
            {
                label: 'Option 2',
                name: 'option2',
                icon: null,
                value: undefined,
            },
        ]);
    });
    it('should fire onChange with the right data when deselecting one option and multiple is passed and have other options selected', () => {
        const onChangeFn = jest.fn();
        const value = [
            {
                label: 'Option 1',
                name: 'option1',
                icon: null,
                value: undefined,
            },
            {
                label: 'Option 2',
                name: 'option2',
                icon: null,
                value: undefined,
            },
        ];
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn} multiple value={value}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        const optionsSelected = [
            {
                label: 'Option 1',
                name: 'option1',
                icon: null,
                value: undefined,
            },
        ];
        component
            .find('li')
            .at(1)
            .simulate('mousedown');
        expect(onChangeFn).toHaveBeenCalledWith(optionsSelected);
    });

    it('should fire onChange when option is selected by pressing ENTER key', () => {
        const onChangeFn = jest.fn();
        const component = mount(
            <InternalDropdown label="Picklist" onChange={onChangeFn}>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
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
            label: 'Option 1',
            name: 'option1',
            icon: null,
            value: undefined,
        });
    });
    it('should render svg and input elements when enableSearch is passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist" enableSearch>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find('svg').exists()).toBe(true);
        expect(component.find('input').exists()).toBe(true);
    });
    it('should not render svg and input elements if enableSearch is not passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist">
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find('svg').exists()).toBe(false);
        expect(component.find('input').exists()).toBe(false);
    });
    it('should render loading icon when isLoading is passed', () => {
        const component = mount(
            <InternalDropdown label="Picklist" isLoading>
                <PicklistOption label="Option 1" name="option1" />
                <PicklistOption label="Option 2" name="option2" />
                <PicklistOption label="Option 3" name="option3" />
            </InternalDropdown>,
        );
        expect(component.find(Spinner).exists()).toBe(true);
    });
});
