describe('VerticalNavigation with href example', () => {
    const AVATAR_ITEM = '#rsg-root > div > main > section > section > div > div > article > div > article > div > div > div.slds-large-size_1-of-3.slds-medium-size_1-of-2.slds-small-size_1-of-1.slds-color__background_gray-1.slds-p-vertical_medium.slds-border_right > nav > div > ul > li:nth-child(1)';

    it('should go to "avatar page" when click on the "Avatar" item', () => {
        browser.url('/#!/VerticalNavigation/3');
        browser.click(AVATAR_ITEM);
        expect(browser.getUrl()).toContain('Components/Avatar');
    });
});
