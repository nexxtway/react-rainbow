import React from 'react';
import { mount } from 'enzyme';
import AvatarContent from './../avatarContent';

describe('<AvatarContent/>', () => {
    it('should render an img when src is passed', () => {
        const component = mount(<AvatarContent src="images/user/user1.jpg" />);
        expect(component.find('img').exists()).toBe(true);
    });
    it('should pass right props to the img element when a valid src is passed', () => {
        const component = mount(<AvatarContent src="images/user/user1.jpg" title="Title" />);
        expect(component.find('img').props()).toEqual({
            src: 'images/user/user1.jpg',
            onError: expect.any(Function),
            title: 'Title',
        });
    });
    it('should render an abbr when src is not passed and initials props is passed', () => {
        const component = mount(<AvatarContent initials="JD" />);
        expect(component.find('abbr').exists()).toBe(true);
    });
    it('should pass right props to the abbr element when src is not passed and initials props is passed', () => {
        const component = mount(
            <AvatarContent initialsVariant="default" initials="JD" title="Title" />,
        );
        expect(component.find('abbr').props()).toEqual({
            children: 'JD',
            className: 'rainbow-avatar_initials',
            title: 'Title',
        });
    });
    it('should have the right class names when initials variant is default', () => {
        const component = mount(<AvatarContent initialsVariant="default" />);
        expect(component.find('span[className="rainbow-avatar_initials"]').exists()).toBe(true);
    });
    it('should have the right class names when initials variant is inverse', () => {
        const component = mount(<AvatarContent initialsVariant="inverse" />);
        expect(
            component
                .find('span[className="rainbow-avatar_initials rainbow-avatar_initials--inverse"]')
                .exists(),
        ).toBe(true);
    });
    it('should have the right class names when initials, icon and variant are not passed', () => {
        const component = mount(<AvatarContent />);
        expect(component.find('span[className="rainbow-avatar_initials"]').exists()).toBe(true);
    });
    it('should return the icon passed when src and initials are not passed', () => {
        const component = mount(<AvatarContent icon={<svg />} />);
        expect(component.find('svg').exists()).toBe(true);
    });
});
