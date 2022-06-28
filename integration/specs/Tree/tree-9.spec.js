const PageTree = require('../../../src/components/Tree/pageObject');
const {
    ENTER_KEY,
    SPACE_KEY,
    ARROW_UP_KEY,
    ARROW_DOWN_KEY,
    ARROW_LEFT_KEY,
    ARROW_RIGHT_KEY,
    HOME_KEY,
    END_KEY,
} = require('../../constants');

const TREE = '#tree-component-9';

describe('Tree', () => {
    beforeAll(async () => {
        await browser.url('/#!/Tree/9');
    });
    beforeEach(async () => {
        await browser.refresh();
        const component = await $(TREE);
        await component.waitForExist();
    });
    it('should focus prev node in tree when press ARROW UP key', async () => {
        const tree = new PageTree(TREE);
        await (await tree.getNode([2])).click();
        await expect(await (await tree.getNode([2])).hasFocus()).toBe(true);
        await browser.keys(ARROW_UP_KEY);
        await expect(await (await tree.getNode([1, 2])).hasFocus()).toBe(true);
        await browser.keys(ARROW_UP_KEY);
        await expect(await (await tree.getNode([1, 1])).hasFocus()).toBe(true);
    });

    it('should focus next node in tree when press ARROW DOWN key', async () => {
        const tree = new PageTree(TREE);
        await (await tree.getNode([0])).click();
        await expect(await (await tree.getNode([0])).hasFocus()).toBe(true);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await (await tree.getNode([1])).hasFocus()).toBe(true);
        await browser.keys(ARROW_DOWN_KEY);
        await expect(await (await tree.getNode([1, 0])).hasFocus()).toBe(true);
    });
    it('should expand node when it is collapsed and press ARROW RIGHT key', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([0]);
        await node.click();
        await expect(await node.isExpanded()).toBe(false);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await node.isExpanded()).toBe(true);
        await browser.keys(ARROW_RIGHT_KEY);
        await expect(await node.isExpanded()).toBe(true);
    });
    it('should collapse node when it is expanded and press ARROW LEFT key', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([1]);
        await node.click();
        await expect(await node.isExpanded()).toBe(true);
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await node.isExpanded()).toBe(false);
        await browser.keys(ARROW_LEFT_KEY);
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await node.isExpanded()).toBe(false);
    });
    it('should focus parent node when node is child and press ARROW LEFT key', async () => {
        const tree = new PageTree(TREE);
        const parentNode = await tree.getNode([1]);
        const childNode = await tree.getNode([1, 2]);
        await childNode.click();
        await expect(await parentNode.hasFocus()).toBe(false);
        await browser.keys(ARROW_LEFT_KEY);
        await expect(await parentNode.hasFocus()).toBe(true);
    });
    it('should focus first node in tree when press HOME key', async () => {
        const tree = new PageTree(TREE);
        const firstNode = await tree.getNode([0]);
        await (await tree.getNode([1, 2])).click();
        await expect(await firstNode.hasFocus()).toBe(false);
        await browser.keys(HOME_KEY);
        await expect(await firstNode.hasFocus()).toBe(true);
        await (await tree.getNode([2])).click();
        await browser.keys(HOME_KEY);
        await expect(await firstNode.hasFocus()).toBe(true);
    });
    it('should focus last node in tree when press END key', async () => {
        const tree = new PageTree(TREE);
        const lastNode = await tree.getNode([2]);
        await (await tree.getNode([0])).click();
        await expect(await lastNode.hasFocus()).toBe(false);
        await browser.keys(END_KEY);
        await expect(await lastNode.hasFocus()).toBe(true);
        await (await tree.getNode([1, 0])).click();
        await browser.keys(END_KEY);
        await expect(await lastNode.hasFocus()).toBe(true);
    });
    it('should expand or collase node when press SPACE key', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([0]);
        await node.click();
        await expect(await node.isExpanded()).toBe(false);
        await browser.keys(SPACE_KEY);
        await expect(await node.isExpanded()).toBe(true);
        await browser.keys(SPACE_KEY);
        await expect(await node.isExpanded()).toBe(false);
    });
    it('should select node when it is focused but not selected and press ENTER key', async () => {
        const tree = new PageTree(TREE);
        const firstNode = await tree.getNode([0]);
        await firstNode.click();
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await (await tree.getNode([1])).isSelected()).toBe(true);
        await browser.keys(ARROW_DOWN_KEY);
        await browser.keys(ENTER_KEY);
        await expect(await (await tree.getNode([2])).isSelected()).toBe(false);
    });
    it('should expand or collapse node when it is selected and press ENTER key', async () => {
        const tree = new PageTree(TREE);
        const node = await tree.getNode([0]);
        await node.click();
        await expect(await node.isSelected()).toBe(true);
        await browser.keys(ENTER_KEY);
        await expect(await node.isExpanded()).toBe(true);
        await browser.keys(ENTER_KEY);
        await expect(await node.isExpanded()).toBe(false);
    });
    it('should expand all nodes at same level when press `*` key', async () => {
        const tree = new PageTree(TREE);
        const firstRootNode = await tree.getNode([0]);
        const lastRootNode = await tree.getNode([2]);
        await firstRootNode.click();
        await expect(await firstRootNode.isExpanded()).toBe(false);
        await expect(await lastRootNode.isExpanded()).toBe(false);
        await browser.keys('*');
        await expect(await firstRootNode.isExpanded()).toBe(true);
        await expect(await lastRootNode.isExpanded()).toBe(true);
    });
    it('should focus the node that the first letter in label matches alphanumeric key pressed', async () => {
        const tree = new PageTree(TREE);
        await (await tree.getNode([2])).click();
        await browser.keys(ARROW_RIGHT_KEY);
        await (await tree.getNode([0])).click();
        await browser.keys(ARROW_RIGHT_KEY);
        await browser.keys('p');
        await expect(await (await tree.getNode([0, 1])).hasFocus()).toBe(true);
        await browser.keys('P');
        await expect(await (await tree.getNode([0, 4])).hasFocus()).toBe(true);
        await browser.keys('p');
        await expect(await (await tree.getNode([1, 0])).hasFocus()).toBe(true);
        await browser.keys('P');
        await expect(await (await tree.getNode([2, 1])).hasFocus()).toBe(true);
        await browser.keys('p');
        await expect(await (await tree.getNode([0, 1])).hasFocus()).toBe(true);
    });
});
