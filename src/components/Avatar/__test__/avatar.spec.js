import React from 'react';
import Avatar from './../index';
import {shallow} from 'enzyme';
import renderer from 'react-test-renderer';

describe('<Avatar />', () => {
    it('should render a large image avatar', () => {
        const component = renderer.create(
            <Avatar src="images/avatar1.jpg" initials="JL" size="large" title="Jose Leandro" alt="Jose Leandro" />
        );

        expect(component).toMatchSnapshot();
    }); 

    it('should render a avatar with initials', () => {
        const component = renderer.create(
            <Avatar initials="JL" />
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a default user icon', () => {
        const component = renderer.create(
            <Avatar />
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a default user icon when the initials provided are wrong', () => {
        const component = renderer.create(
            <Avatar initials="JLl" />
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a custom icon', () => {
        const component = renderer.create(
            <Avatar iconName="custom:custom1" />
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a avatar with a cirle style when variant is set to true', () => {
        const component = renderer.create(
            <Avatar src="images/avatar2.jpg" variant={ true } />
        );

        expect(component).toMatchSnapshot();
    });

    it('should fire onError event when src prop is not valid (image is not loaded)', done => {
        const onErrorMockFnCallback = jest.fn(() => done());
        const component = shallow(
            <Avatar src="wrong/path" onError={ onErrorMockFnCallback() } />
        );

        expect(onErrorMockFnCallback).toHaveBeenCalledTimes(1);
    });

});