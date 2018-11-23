import React from 'react';
import { mount } from 'enzyme';
import Button from '../index';

describe('<Button />', () => {
    it('should be focusable', () => {
        const component = mount(
            <Button label="button label" />,
        );
        expect(component).toBeFocusable();
    });
});
