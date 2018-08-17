import React from 'react';
import { mount } from 'enzyme/build/index';
import renderer from 'react-test-renderer';
import AvatarContent from './../avatarContent';

describe('<AvatarContent/>', () => {
    it('should render an img when src is passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" src="images/avatar1.jpg" />,
        );
        expect(component.find('img'));
    });
    it('should pass right props when a valid src is passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" src="images/avatar1.jpg" title="Title" />,
        );
        expect(component.find('img').props()).toEqual({
            src: 'images/avatar1.jpg',
            onError: expect.any(Function),
            title: 'Title',
        });
    });
    it('should render an abbr when src is not passed and initials props is passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" initials="JD" />,
        );
        expect(component.find('abbr'));
    });
    it('should pass right props when src is not passed and initials props is passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" initials="JD" title="Title" />,
        );
        expect(component.find('abbr').props()).toEqual({
            children: 'JD',
            className: 'slds-avatar__initials slds-icon-standard-user',
            title: 'Title',
        });
    });
    it('should render an Icon when src and initials are not passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" />,
        );
        expect(component.find('Icon'));
    });
    it('should render an Icon when src is not passed and invalid initials is passed', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" initials="jd" />,
        );
        expect(component.find('Icon'));
    });
    it('should pass right props to Icon component', () => {
        const component = mount(
            <AvatarContent iconName="standard:user" title="Title" />,
        );
        expect(component.find('Icon').prop('iconName')).toBe('standard:user');
        expect(component.find('Icon').prop('title')).toBe('Title');
    });
    it('should have the right class names', () => {
        const component = renderer.create(
            <AvatarContent iconName="standard:user" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when initials variant is default', () => {
        const component = renderer.create(
            <AvatarContent iconName="standard:user" initials="JD" />,
        );
        expect(component).toMatchSnapshot();
    });
    it('should have the right class names when initials variant is inverse', () => {
        const component = renderer.create(
            <AvatarContent iconName="standard:user" initials="JD" initialsVariant="inverse" />,
        );
        expect(component).toMatchSnapshot();
    });
});
