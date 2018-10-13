Here is an overview about how to use the CarouselCard page object:

    const PageCarouselCard = require('react-rainbow-components/components/CarouselCard/pageObject');

    const CAROUSEL = '#carousel-1';
    const ARROW_RIGHT_KEY: '\uE014';
    const ARROW_LEFT_KEY: '\uE012';

    describe('CarouselCard base example', () => {
        beforeEach(() => {
            browser.url('/url/to/testing/page');
            browser.refresh();
        });

        it('should select the first indicator when selected', () => {
            const carousel = new PageCarouselCard(CAROUSEL);
            const carouselIem = carousel.getIndicatorItem(0);
            carouselIem.click();
            expect(carouselIem.isSelected()).toBe(true);
        });
        it('should select the last indicator when the first has focus and left arrow key is pressed', () => {
            const carousel = new PageCarouselCard(CAROUSEL);
            const indicator = carousel.getIndicatorItem(0);
            indicator.click();
            browser.keys(ARROW_LEFT_KEY);
            const indicator3 = carousel.getIndicatorItem(2);
            expect(indicator3.isSelected()).toBe(true);
        });
        it('should select the next indicator when the first has focus and right arrow key is pressed', () => {
            const carousel = new PageCarouselCard(CAROUSEL);
            const indicator = carousel.getIndicatorItem(0);
            indicator.click();
            browser.keys(ARROW_RIGHT_KEY);
            const indicator2 = carousel.getIndicatorItem(1);
            expect(indicator2.isSelected()).toBe(true);
        });
    });
