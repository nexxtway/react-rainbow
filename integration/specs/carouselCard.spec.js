const PageCarouselCard = require('./../../src/components/CarouselCard/pageObject');
const { ARROW_LEFT_KEY, ARROW_RIGHT_KEY } = require('./../constants');

const CAROUSEL = '#carousel-1';

describe('CarouselCard base example', () => {
    beforeEach(() => {
        browser.url('/#!/CarouselCard/1');
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
    it('should loose focus if other indicator is selected', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(0);
        const indicator2 = carousel.getIndicatorItem(1);
        indicator.click();
        indicator2.click();
        expect(indicator.hasFocus()).toBe(false);
    });
    it('should loose focus if other indicator is selected by keyboard navigation', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(0);
        indicator.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(indicator.hasFocus()).toBe(false);
    });
});
