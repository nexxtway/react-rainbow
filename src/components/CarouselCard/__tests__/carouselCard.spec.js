import React from 'react';
import { mount } from 'enzyme';
import CarouselCard from '../index';
import CarouselImage from '../../CarouselImage';

describe('<CarouselCard />', () => {
    it('should render the children passed', () => {
        const component = mount(
            <CarouselCard disableAutoScroll>
                <CarouselImage
                    src="images/illustrations/rainbows-background.svg"
                    header="First Card"
                    description="First card description."
                    alternativeText="First card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/rainbow-background-2.svg"
                    header="Second Card"
                    description="Second card description."
                    alternativeText="Second card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-1.svg"
                    header="Third Card"
                    description="Third card description."
                    alternativeText="Third card accessible description."
                    href="/"
                />
            </CarouselCard>,
        );
        expect(component.find('a[href="/"]').length).toBe(3);
    });
    it('should set the right state when disableAutoScroll is passed', () => {
        const component = mount(<CarouselCard disableAutoScroll />);
        expect(component.state().isAnimationPaused).toBe(true);
    });
});
