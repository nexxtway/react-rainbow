import React from 'react';
import { mount } from 'enzyme';
import Indicators from '../indicators';

const carouselChildren = [
    {
        indicatorID: 'indicator-1',
        containerID: 'container-1',
        ref: {
            click: jest.fn(),
        },
        header: 'Header',
    },
];

describe('<Indicators />', () => {
    it('should set the right props if the indicator is selected', () => {
        const component = mount(<Indicators selectedItem="indicator-1" carouselChildren={carouselChildren} />);
        const anchorComponent = component.find('a.rainbow-carousel_indicator.rainbow-carousel_indicator--active');

        expect(anchorComponent.exists()).toBe(true);
        expect(anchorComponent.prop('aria-selected')).toBe(true);
        expect(anchorComponent.prop('tabIndex')).toBe(0);
    });
    it('should set the assistive text to the anchor element', () => {
        const component = mount(<Indicators carouselChildren={carouselChildren} />);
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.prop('title')).toBe('Header Tab');
        expect(anchorComponent.text()).toBe('Header Tab');
    });
    it('should set the right accesivillity props', () => {
        const component = mount(<Indicators carouselChildren={carouselChildren} />);
        const anchorComponent = component.find('a.rainbow-carousel_indicator');

        expect(anchorComponent.prop('id')).toBe('indicator-1');
        expect(anchorComponent.prop('aria-controls')).toBe('container-1');
    });
    it('should call the function passed in onSelect prop', () => {
        const onSelectMockFn = jest.fn();
        const component = mount(
            <Indicators carouselChildren={carouselChildren} onSelect={onSelectMockFn} />,
        );
        const anchorComponent = component.find('a.rainbow-carousel_indicator');
        anchorComponent.simulate('click');

        expect(onSelectMockFn).toHaveBeenCalledWith('indicator-1');
    });
    it('should render the right amount of indicators', () => {
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

        const component = mount(
            <Indicators carouselChildren={carouselItems} />,
        );

        expect(component.find('li').length).toBe(2);
    });
});
