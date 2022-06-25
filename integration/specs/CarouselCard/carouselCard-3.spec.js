const PageCarouselCard = require('../../../src/components/CarouselCard/pageObject');

const CAROUSEL = '#carousel-3';

const addNewCard = () => $('#button-icon_add-new-card').click();

describe('CarouselCard with CarouselImagen changed dynamically', () => {
    beforeAll(async () => {
        await browser.url('/#!/CarouselCard/3');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(CAROUSEL);
        await component.waitForExist();
    });
    it('should select the new option with keyboard after it is added dynamically', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        await indicator.click();
        await browser.keys('ArrowRight');
        const indicator2 = await carousel.getIndicatorItem(1);
        await expect(await indicator2.isSelected()).toBe(true);
        const carouselImagen2 = await carousel.getImageItem(1);
        await expect(await carouselImagen2.getHeaderText()).toBe('Second Card');
        await browser.refresh();
        await addNewCard();
        await indicator.click();
        await browser.keys('ArrowRight');
        await expect(await indicator2.isSelected()).toBe(true);
        await expect(await carouselImagen2.getHeaderText()).toBe('New Card');
    });
    it('should select the second option with keyboard after it is added and removeed dynamically a new element', async () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = await carousel.getIndicatorItem(0);
        await addNewCard();
        await indicator.click();
        await browser.keys('ArrowRight');
        const indicator2 = await carousel.getIndicatorItem(1);
        await expect(await indicator2.isSelected()).toBe(true);
        const carouselImagen2 = await carousel.getImageItem(1);
        await expect(await carouselImagen2.getHeaderText()).toBe('New Card');
        await addNewCard();
        await indicator.click();
        await browser.keys('ArrowRight');
        await expect(await indicator2.isSelected()).toBe(true);
        await expect(await carouselImagen2.getHeaderText()).toBe('Second Card');
    });
});
