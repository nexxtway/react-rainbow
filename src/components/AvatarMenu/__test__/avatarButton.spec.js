import React from 'react';
import { mount } from 'enzyme';
import AvatarButton from '../avatarButton';
import StyledButton from '../styled/button';

describe('<AvatarButton/>', () => {
    it('should focus the AvatarButton when the focus method is called', () => {
        const component = mount(<AvatarButton />);

        component.instance().focus();
        const focusedElementDataId = document.activeElement.getAttribute('data-id');
        const buttonDataId = component.find(StyledButton).prop('data-id');
        expect(focusedElementDataId).toBe(buttonDataId);
    });
    it('should blur the AvatarButton when the blur method is called', () => {
        const component = mount(<AvatarButton />);
        const instance = component.instance();
        const buttonDataId = component.find(StyledButton).prop('data-id');

        instance.focus();
        expect(document.activeElement.getAttribute('data-id')).toBe(buttonDataId);
        instance.blur();
        expect(document.activeElement.getAttribute('data-id')).toBeNull();
    });
});
