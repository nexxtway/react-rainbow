import React from 'react';
import { mount } from 'enzyme';
import { ENTER_KEY } from '../../../libs/constants';
import InternalDropdown from '../';
import PicklistOption from '../../PicklistOption';

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
});
