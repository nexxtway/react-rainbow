import React from 'react';
import { mount } from 'enzyme';
import Child from './../child';
import { Provider } from '../context';

const contextValue = {
    autoFocus: undefined,
    focusedNode: undefined,
    setFocusedNode: undefined,
    clearFocusedNode: undefined,
    privateKeyDown: undefined,
};

describe('<Child/>', () => {
    it('should render the PrimitiveCheckbox component when isChecked prop has the right value', () => {
        [true, false, 'indeterminate'].forEach(value => {
            const component = mount(<Child isChecked={value} />, {
                wrappingComponent: Provider,
                wrappingComponentProps: {
                    value: contextValue,
                },
            });
            expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
        });
    });
    it('should not render the PrimitiveCheckbox component when isChecked prop has the wrong value', () => {
        ['indeterminates', 'one', 'six'].forEach(value => {
            const component = mount(<Child isChecked={value} />, {
                wrappingComponent: Provider,
                wrappingComponentProps: {
                    value: contextValue,
                },
            });
            expect(component.find('PrimitiveCheckbox').exists()).toBe(false);
        });
    });
    it('should render the TreeChildren component when children prop is not undefined', () => {
        const children = [{ label: 'Tree Item' }, { label: 'Tree Item' }];
        // eslint-disable-next-line react/no-children-prop
        const component = mount(<Child children={children} isExpanded />, {
            wrappingComponent: Provider,
            wrappingComponentProps: {
                value: contextValue,
            },
        });
        expect(component.find('TreeChildren').exists()).toBe(true);
    });
    it('should set the aria-selected value to true when the node is selected', () => {
        const component = mount(<Child isSelected />, {
            wrappingComponent: Provider,
            wrappingComponentProps: {
                value: contextValue,
            },
        });
        const node = component.find('li');
        expect(node.prop('aria-selected')).toBe(true);
    });
    it('should not set the aria-selected value when the node is not selected', () => {
        const component = mount(<Child />, {
            wrappingComponent: Provider,
            wrappingComponentProps: {
                value: contextValue,
            },
        });
        const node = component.find('li');
        expect(node.prop('aria-selected')).toBeUndefined();
    });
});
