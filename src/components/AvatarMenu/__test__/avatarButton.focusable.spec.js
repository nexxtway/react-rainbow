import React from 'react';
import { mount } from 'enzyme';
import AvatarButton from '../avatarButton';

describe('<AvatarButton/>', () => {
    it('should be focusable', () => {
        const component = mount(<AvatarButton label="AvatarButton label" />);
        expect(component).toBeFocusable();
    });
});
