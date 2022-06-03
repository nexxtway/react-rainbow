const PageCarouselCard = require('../../../src/components/CarouselCard/pageObject');

const CAROUSEL = '#carousel-1';

describe('CarouselCard base example', () => {
    beforeAll(() => {
        browser.url('/#!/CarouselCard/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CAROUSEL);
        component.waitForExist();
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
        browser.keys('ArrowLeft');
        const indicator3 = carousel.getIndicatorItem(2);
        expect(indicator3.isSelected()).toBe(true);
    });
    it('should select the next indicator when the first has focus and right arrow key is pressed', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(0);
        indicator.click();
        browser.keys('ArrowRight');
        const indicator2 = carousel.getIndicatorItem(1);
        expect(indicator2.isSelected()).toBe(true);
    });
    it('should select the first indicator when the last has focus and right arrow key is pressed', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(2);
        indicator.click();
        browser.keys('ArrowRight');
        const indicator2 = carousel.getIndicatorItem(0);
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
        browser.keys('ArrowRight');
        expect(indicator.hasFocus()).toBe(false);
    });
    it('should navigate to CarouselImage page when click on the first CarouselIamge', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const carouselImage = carousel.getImageItem(0);
        carouselImage.click();
        expect(browser.getUrl()).toContain('Components/CarouselImage');
    });
});
