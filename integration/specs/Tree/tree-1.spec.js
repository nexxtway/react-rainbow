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
        const node = tree.getNode(3);
        node.click();
        expect(node.isExpanded()).toBe(true);
    });
    it('should collapse the node when it is expand and its button icon is clicked', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNode(2);
        node.click();
        expect(node.isExpanded()).toBe(false);
    });
    it('should move focus to the next button icon when the first button icon is focused and press tab', () => {
        const tree = new PageTree(TREE);
        const firstNode = tree.getNode(2);
        const secondNode = tree.getNode(3);
        firstNode.click();
        browser.keys(TAB_KEY);
        expect(secondNode.hasFocus()).toBe(true);
    });

    /**
     * The node was initially expanded
     */
    it('should expand the node when its button icon is focused and press enter', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNode(2);
        node.click();
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(true);
    });

    /**
     * The node was initially collapse
     */
    it('should collapse the node when its button icon is focused and press enter', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNode(3);
        node.click();
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(false);
    });

    /**
     * The node was initially expanded
     */
    it('should expand the node when its button icon is focused and press space', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNode(2);
        node.click();
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(true);
    });

    /**
     * The node was initially collapse
     */
    it('should collapse the node when its button icon is focused and press space', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNode(3);
        node.click();
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(false);
    });
});
