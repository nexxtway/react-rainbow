import React from 'react';
import renderer from 'react-test-renderer';
import Avatar from './../index';

describe('<Avatar />', () => {
    it('should render a large image avatar', () => {
        const component = renderer.create(
            <Avatar src="images/avatar1.jpg"
                    initials="JL"
                    size="large"
                    title="Jose Leandro"
                    alt="Jose Leandro" />,
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with initials', () => {
        const component = renderer.create(<Avatar initials="JL" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a default user icon', () => {
        const component = renderer.create(<Avatar />);

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a default user icon when the initials provided are wrong', () => {
        const component = renderer.create(<Avatar initials="JLl" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a custom icon', () => {
        const component = renderer.create(<Avatar iconName="custom:custom1" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a cirle style when variant is set to true', () => {
        const component = renderer.create(<Avatar src="images/avatar2.jpg" variant />);

        expect(component).toMatchSnapshot();
    });
});
