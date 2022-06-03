const PageCarouselCard = require('../../../src/components/CarouselCard/pageObject');

const CAROUSEL = '#carousel-3';

const addNewCard = () => $('#button-icon_add-new-card').click();

describe('CarouselCard with CarouselImagen changed dynamically', () => {
    beforeAll(() => {
        browser.url('/#!/CarouselCard/3');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(CAROUSEL);
        component.waitForExist();
    });
    it('should select the new option with keyboard after it is added dynamically', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(0);
        indicator.click();
        browser.keys('ArrowRight');
        const indicator2 = carousel.getIndicatorItem(1);
        expect(indicator2.isSelected()).toBe(true);
        const carouselImagen2 = carousel.getImageItem(1);
        expect(carouselImagen2.getHeaderText()).toBe('Second Card');
        browser.refresh();
        addNewCard();
        indicator.click();
        browser.keys('ArrowRight');
        expect(indicator2.isSelected()).toBe(true);
        expect(carouselImagen2.getHeaderText()).toBe('New Card');
    });
    it('should select the second option with keyboard after it is added and removeed dynamically a new element', () => {
        const carousel = new PageCarouselCard(CAROUSEL);
        const indicator = carousel.getIndicatorItem(0);
        addNewCard();
        indicator.click();
        browser.keys('ArrowRight');
        const indicator2 = carousel.getIndicatorItem(1);
        expect(indicator2.isSelected()).toBe(true);
        const carouselImagen2 = carousel.getImageItem(1);
        expect(carouselImagen2.getHeaderText()).toBe('New Card');
        addNewCard();
        indicator.click();
        browser.keys('ArrowRight');
        expect(indicator2.isSelected()).toBe(true);
        expect(carouselImagen2.getHeaderText()).toBe('Second Card');
    });
});
