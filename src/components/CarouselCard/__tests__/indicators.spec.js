import React from 'react';
import { mount } from 'enzyme';
import Indicators from '../indicators';

const carouselItems = [
    {
        indicatorID: 'indicator-1',
        containerID: 'container-1',
        ref: {
            click: jest.fn(),
        },
        header: 'Header',
    },
    {
        indicatorID: 'indicator-2',
        containerID: 'container-2',
        ref: {
            click: jest.fn(),
        },
        header: 'Header 2',
    },
];

describe('<Indicators />', () => {
    it('should render the right amount of indicators', () => {
        const component = mount(<Indicators carouselChildren={carouselItems} />);

        expect(component.find('li').length).toBe(2);
    });
    it('should set the role as tablist in ul element', () => {
        const component = mount(<Indicators carouselChildren={carouselItems} />);

        expect(component.find('ul').prop('role')).toBe('tablist');
    });
});
