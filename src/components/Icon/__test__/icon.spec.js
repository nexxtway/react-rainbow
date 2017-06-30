import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Icon from './../index';

describe('<Icon/>', () => {
    it('should render a custom icon', () => {
        const component = renderer.create(<Icon iconName="custom:custom5" />);

        expect(component).toMatchSnapshot();
    });

    it('should render a utility icon with title and variant props', () => {
        const component = renderer.create(
            <Icon iconName="utility:like" title="like button" variant="light" />,
        );

        expect(component).toMatchSnapshot();
    });

    it('should render a standard icon with size and style props', () => {
        const component = renderer.create(
            <Icon iconName="standard:announcement" size="large" style={{ backgroundColor: 'aqua', borderRadius: '10px' }} />,
        );

        expect(component).toMatchSnapshot();
    });

    it(': should be replaced by -', () => {
        const component = shallow(<Icon iconName="custom:custom5" />);

        expect(component.find('.slds-icon-custom-custom5').exists()).toBe(true);
    });
});
