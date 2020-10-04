import React from 'react';
import { mount } from 'enzyme';
import LoadingShape from '../';
import { StyledImageIcon, StyledAvatarIcon } from '../styled';

describe('<LoadingShape', () => {
    it('should have "rounded-rect" as default shape', () => {
        const component = mount(<LoadingShape />);
        expect(component.prop('shape')).toBe('rounded-rect');
    });

    it('should render the image icon when variant is "image"', () => {
        const component = mount(<LoadingShape shape="square" variant="image" />);
        expect(component.find(StyledImageIcon).length).toBe(1);
    });

    it('should render the user icon when variant is "avatar"', () => {
        const component = mount(<LoadingShape shape="square" variant="avatar" />);
        expect(component.find(StyledAvatarIcon).length).toBe(1);
    });
});
