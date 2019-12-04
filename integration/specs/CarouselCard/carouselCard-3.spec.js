const PageCarouselCard = require('../../../src/components/CarouselCard/pageObject');
const { ARROW_RIGHT_KEY } = require('../../constants');

const CAROUSEL = '#carousel-3';

const addNewCard = () => $('#button-icon_add-new-card').click();

describe('CarouselCard with CarouselImagen changed dynamically', () => {
    it('should select the new option with keyboard after it is added dynamically', () => {
        browser.url('/#!/CarouselCard/3');
        const component = $(CAROUSEL);
        component.waitForExist();
        var carousel = new PageCarouselCard(CAROUSEL);
        carousel.getSelecteds();
        const indicator = carousel.getIndicatorItem(0);
        indicator.click();
        browser.keys(ARROW_RIGHT_KEY);
        const indicator2 = carousel.getIndicatorItem(1);
        expect(indicator2.isSelected()).toBe(true);
        const carouselImagen2 = carousel.getImageItem(1);
        expect(carouselImagen2.getHeader()).toBe('Second Card');
        browser.refresh();
        addNewCard();
        indicator.click();
        browser.keys(ARROW_RIGHT_KEY);
        expect(indicator2.isSelected()).toBe(true);
        expect(carouselImagen2.getHeader()).toBe('New Card');
    });
});
