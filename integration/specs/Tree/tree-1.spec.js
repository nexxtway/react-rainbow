const PageTree = require('../../../src/components/Tree/pageObject');
const { TAB_KEY, ENTER_KEY, SPACE_KEY } = require('../../constants');

const TREE = '#tree-component-1';

describe('Tree basic', () => {
    beforeAll(() => {
        browser.url('/#!/Tree/1');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TREE);
        component.waitForExist();
    });

    it('should expand the node when it is collapse and its button icon is clicked', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(3);
        node.clickButtonIcon();
        expect(node.isExpanded()).toBe(true);
    });
    it('should collapse the node when it is expand and its button icon is clicked', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(2);
        node.clickButtonIcon();
        expect(node.isExpanded()).toBe(false);
    });
    it('should move focus to the next button icon when the first button icon is focused and press tab', () => {
        const tree = new PageTree(TREE);
        const firstNode = tree.getItem(2);
        const secondNode = tree.getItem(3);
        firstNode.clickButtonIcon();
        browser.keys(TAB_KEY);
        expect(secondNode.hasFocusButtonIcon()).toBe(true);
    });
    it('should expand the node when its button icon is focused and press enter', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(2);
        node.clickButtonIcon();
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(true);
    });
    it('should collapse the node when its button icon is focused and press enter', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(3);
        node.clickButtonIcon();
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(false);
    });
    it('should expand the node when its button icon is focused and press space', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(2);
        node.clickButtonIcon();
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(true);
    });
    it('should collapse the node when its button icon is focused and press space', () => {
        const tree = new PageTree(TREE);
        const node = tree.getItem(3);
        node.clickButtonIcon();
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(false);
    });
});
