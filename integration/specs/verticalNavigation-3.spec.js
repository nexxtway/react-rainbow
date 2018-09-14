describe('VerticalNavigation with href example', () => {
    const AVATAR_ITEM = 'div.rainbow-background-color_white.rainbow-p-top_small.rainbow-p-vertical_medium > nav > div > ul > li.rainbow-vertical-item > a';

    it('should go to "avatar page" when click on the "Avatar" item', () => {
        browser.url('/#!/VerticalNavigation/3');
        browser.click(AVATAR_ITEM);
        expect(browser.getUrl()).toContain('Components/Avatar');
    });
});
