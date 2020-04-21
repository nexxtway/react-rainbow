import React from 'react';
import { mount } from 'enzyme';
import FileFieldCell from '../fileFieldCell';

describe('<FileFieldCell />', () => {
    it('should return the same value if value is sent as param', () => {
        const returnValue = FileFieldCell({ value: 'test-value' });
        expect(returnValue).toBe('test-value');
    });
    it('should have assign field content when no value is sent as param', () => {
        const component = mount(<FileFieldCell />);
        expect(component.text()).toBe('Not assigned yet');
    });
});
