import React from 'react';
import { mount } from 'enzyme';
import AssignFieldModalTitle from '../assignFieldModalTitle';

describe('<assignFieldModalTitle />', () => {
    it('should render the right modal description', () => {
        const component = mount(<AssignFieldModalTitle field="test" />);
        expect(component.text()).toBe(`Assign to the field: test`);
    });
});
