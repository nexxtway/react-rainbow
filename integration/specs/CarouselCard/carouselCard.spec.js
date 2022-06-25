const PageCarouselCard = require('../../../src/components/CarouselCard/pageObject');

const CAROUSEL = '#carousel-1';

describe('CarouselCard base example', () => {
    beforeAll(async () => {
        await browser.url('/#!/CarouselCard/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CAROUSEL);
        await component.waitForExist();
    });

    it('should select the first indicator when selected', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const carouselIem = await carousel.getIndicatorItem(0);
        await carouselIem.click();
        await expect(await carouselIem.isSelected()).toBe(true);
    });
    it('should select the last indicator when the first has focus and left arrow key is pressed', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        await indicator.click();
        await browser.keys('ArrowLeft');
        const indicator3 = await carousel.getIndicatorItem(2);
        await expect(await indicator3.isSelected()).toBe(true);
    });
    it('should select the next indicator when the first has focus and right arrow key is pressed', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        await indicator.click();
        await browser.keys('ArrowRight');
        const indicator2 = await carousel.getIndicatorItem(1);
        await expect(await indicator2.isSelected()).toBe(true);
    });
    it('should select the first indicator when the last has focus and right arrow key is pressed', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(2);
        await indicator.click();
        await browser.keys('ArrowRight');
        const indicator2 = await carousel.getIndicatorItem(0);
        await expect(await indicator2.isSelected()).toBe(true);
    });
    it('should loose focus if other indicator is selected', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        const indicator2 = await carousel.getIndicatorItem(1);
        await indicator.click();
        await indicator2.click();
        await expect(await indicator.hasFocus()).toBe(false);
    });
    it('should loose focus if other indicator is selected by keyboard navigation', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        await indicator.click();
        await browser.keys('ArrowRight');
        await expect(await indicator.hasFocus()).toBe(false);
    });
    it('should navigate to CarouselImage page when click on the first CarouselIamge', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const carouselImage = await carousel.getImageItem(0);
        await carouselImage.click();
        await expect(await browser.getUrl()).toContain('Components/CarouselImage');
    });
});
