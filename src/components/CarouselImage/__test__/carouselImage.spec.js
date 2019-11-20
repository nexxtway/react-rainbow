import React from 'react';
import { mount } from 'enzyme';
import CarouselImage from '../index';

describe('<CarouselImage />', () => {
    it('should render an anchor when href is passed', () => {
        const component = mount(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
                href="/"
            />,
        );

        const anchor = component.find('a[data-id="carousel-image_inner-container"]');
        expect(anchor.exists()).toBe(true);
        expect(anchor.prop('href')).toBe('/');
    });
    it('should render a div when href is not passed', () => {
        const component = mount(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
            />,
        );

        const divElement = component.find('div[data-id="carousel-image_inner-container"]');
        expect(divElement.exists()).toBe(true);
    });
    it('should set tabIndex to -1 when href is passed', () => {
        const component = mount(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
                href="/"
            />,
        );

        const anchor = component.find('a[data-id="carousel-image_inner-container"]');
        expect(anchor.prop('tabIndex')).toBe(-1);
    });
    it('should set tabIndex to undefined when href is not passed', () => {
        const component = mount(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
            />,
        );

        const divElement = component.find('div[data-id="carousel-image_inner-container"]');
        expect(divElement.prop('tabIndex')).toBe(undefined);
    });
});
