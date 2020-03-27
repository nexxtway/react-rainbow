import React from 'react';
import { mount } from 'enzyme';
import AssignFieldModalTitle from '../assignFieldModalTitle';

describe('<assignFieldModalTitle />', () => {
    it('should render the right modal description', () => {
        const field = 'test';
        const component = mount(<AssignFieldModalTitle field={field} />);
        const compareText = `Assign to the field: ${field}`;
        expect(component.text()).toBe(compareText);
    });
});
