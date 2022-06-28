const PageTree = require('../../../src/components/Tree/pageObject');
const { TAB_KEY, ENTER_KEY, SPACE_KEY } = require('../../constants');

const TREE = '#tree-component-1';

describe('Tree basic', () => {
    beforeAll(async () => {
        await browser.url('/#!/Tree/1');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TREE);
        await component.waitForExist();
    });

    it('should expand the node when it is collapse and its button icon is clicked', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([3]);
        await node.clickExpandButton();
        await expect(await node.isExpanded()).toBe(true);
    });
    it('should collapse the node when it is expand and its button icon is clicked', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([2]);
        await node.clickExpandButton();
        await expect(await node.isExpanded()).toBe(false);
    });
    it('should move focus outside the tree when the first button icon is focused and press tab', async () => {
        const tree = new PageTree(TREE);
        const firstNode = await tree.getNode([2]);
        const secondNode = await tree.getNode([3]);
        await firstNode.clickExpandButton();
        await browser.keys(TAB_KEY);
        await expect(await secondNode.hasFocus()).toBe(false);
    });
    it('should expand the node when its button icon is focused, press enter and the node was initially expanded', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([2]);
        await node.clickExpandButton();
        await browser.keys(ENTER_KEY);
        await expect(await node.isExpanded()).toBe(true);
    });
    it('should collapse the node when its button icon is focused, press enter and the node was initially collapse', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([3]);
        await node.clickExpandButton();
        await browser.keys(ENTER_KEY);
        await expect(await node.isExpanded()).toBe(false);
    });
    it('should expand the node when its button icon is focused, press space and the node was initially expanded', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([2]);
        await node.clickExpandButton();
        await browser.keys(SPACE_KEY);
        await expect(await node.isExpanded()).toBe(true);
    });
    it('should collapse the node when its button icon is focused, press space and the node was initially collapse', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([3]);
        await node.clickExpandButton();
        await browser.keys(SPACE_KEY);
        await expect(await node.isExpanded()).toBe(false);
    });
});
