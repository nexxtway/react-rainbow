import React from 'react';
import { mount } from 'enzyme';
import Child from './../child';

describe('<Child/>', () => {
    it('should render the PrimitiveCheckbox component when isChecked prop has the right value', () => {
        [true, false, 'indeterminate'].forEach(value => {
            const component = mount(<Child isChecked={value} />);
            expect(component.find('PrimitiveCheckbox').exists()).toBe(true);
        });
    });
    it('should not render the PrimitiveCheckbox component when isChecked prop has the wrong value', () => {
        ['indeterminates', 'one', 'six'].forEach(value => {
            const component = mount(<Child isChecked={value} />);
            expect(component.find('PrimitiveCheckbox').exists()).toBe(false);
        });
    });
    it('should render the TreeChildren component when children prop is not undefined', () => {
        const children = [{ label: 'Tree Item' }, { label: 'Tree Item' }];
        // eslint-disable-next-line react/no-children-prop
        const component = mount(<Child children={children} isExpanded />);
        expect(component.find('TreeChildren').exists()).toBe(true);
    });
});
