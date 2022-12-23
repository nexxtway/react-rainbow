import React from 'react';
import { render } from '@testing-library/react';
import CarouselImage from '../index';

describe('<CarouselImage />', () => {
    it('should render an anchor when href is passed', () => {
        const { container } = render(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
                href="/"
            />,
        );

        expect(
            container.querySelector('a[data-id="carousel-image_inner-container"]'),
        ).toHaveAttribute('href', '/');
    });
    it('should render a div when href is not passed', () => {
        const { container } = render(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
            />,
        );

        expect(
            container.querySelector('div[data-id="carousel-image_inner-container"]'),
        ).toBeDefined();
    });
    it('should set tabIndex to -1 when href is passed', () => {
        const { container } = render(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
                href="/"
            />,
        );

        expect(
            container.querySelector('a[data-id="carousel-image_inner-container"]'),
        ).toHaveAttribute('tabindex', '-1');
    });
    it('should set tabIndex to undefined when href is not passed', () => {
        const { container } = render(
            <CarouselImage
                src="images/illustrations/rainbows-background.svg"
                header="First Card"
                description="First card description."
                alternativeText="First card accessible description."
            />,
        );

        expect(
            container.querySelector('div[data-id="carousel-image_inner-container"]'),
        ).not.toHaveAttribute('tabindex');
    });
});
