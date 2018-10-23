import React from 'react';
import { mount } from 'enzyme';
import AvatarMenu from '..';

describe('<AvatarMenu/>', () => {
    it('should pass the icon passed to the AvatarButton', () => {
        const component = mount(
            <AvatarMenu icon={<svg />}>
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('icon')).toEqual(<svg />);
    });
    it('should set the title passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu title="my title">
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('title')).toBe('my title');
    });
    it('should set the disabled passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu disabled>
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('disabled')).toBe(true);
    });
    it('should set the tabIndex passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu tabIndex={0}>
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('tabIndex')).toBe(0);
    });
    it('should set the initials passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu initials="CM">
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('initials')).toBe('CM');
    });
    it('should set the initialsVariant passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu initialsVariant="inverse">
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('initialsVariant')).toBe('inverse');
    });
    it('should set the avatarSize passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu avatarSize="small">
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('avatarSize')).toBe('small');
    });
    it('should set the src passed in the AvatarButton', () => {
        const component = mount(
            <AvatarMenu src="mages/user/user2.jpg">
                <span />
            </AvatarMenu>,
        );
        expect(component.find('AvatarButton').prop('src')).toBe('mages/user/user2.jpg');
    });
});
