import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { axe } from 'jest-axe';
import CarouselCard from '..';
import CarouselImage from '../../CarouselImage';

describe('<CarouselCard/>', () => {
    it('should be accessible', async () => {
        expect.assertions(1);
        const html = ReactDOMServer.renderToString(
            <CarouselCard>
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-4.svg"
                    header="First Card"
                    description="First card description."
                    alternativeText="First card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-3.svg"
                    header="Second Card"
                    description="Second card description."
                    alternativeText="Second card accessible description."
                    href="/"
                />
                <CarouselImage
                    src="images/illustrations/Illustration-rainbow-5.svg"
                    header="Third Card"
                    description="Third card description."
                    alternativeText="Third card accessible description."
                    href="/"
                />
            </CarouselCard>,
        );
        const results = await axe(html);
        expect(results).toHaveNoViolations();
    });
});
