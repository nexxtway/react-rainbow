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
    beforeAll(() => {
        browser.url('/#!/Tree/9');
    });
    beforeEach(() => {
        browser.refresh();
        const component = $(TREE);
        component.waitForExist();
    });
    it('should focus prev node in tree when press ARROW UP key', () => {
        const tree = new PageTree(TREE);
        tree.getNodeByPath([2]).click();
        expect(tree.getNodeByPath([2]).hasFocus()).toBe(true);
        browser.keys(ARROW_UP_KEY);
        expect(tree.getNodeByPath([1, 2]).hasFocus()).toBe(true);
        browser.keys(ARROW_UP_KEY);
        expect(tree.getNodeByPath([1, 1]).hasFocus()).toBe(true);
    });

    it('should focus next node in tree when press ARROW DOWN key', () => {
        const tree = new PageTree(TREE);
        tree.getNodeByPath([0]).click();
        expect(tree.getNodeByPath([0]).hasFocus()).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(tree.getNodeByPath([1]).hasFocus()).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        expect(tree.getNodeByPath([1, 0]).hasFocus()).toBe(true);
    });
    it('should expand node when it is collapsed and press ARROW RIGHT key', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNodeByPath([0]);
        node.click();
        expect(node.isExpanded()).toBe(false);
        browser.keys(ARROW_RIGHT_KEY);
        expect(node.isExpanded()).toBe(true);
        browser.keys(ARROW_RIGHT_KEY);
        expect(node.isExpanded()).toBe(true);
    });
    it('should collapse node when it is expanded and press ARROW LEFT key', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNodeByPath([1]);
        node.click();
        expect(node.isExpanded()).toBe(true);
        browser.keys(ARROW_LEFT_KEY);
        browser.keys(ARROW_LEFT_KEY);
        expect(node.isExpanded()).toBe(false);
        browser.keys(ARROW_LEFT_KEY);
        expect(node.isExpanded()).toBe(false);
    });
    it('should focus parent node when node is child and press ARROW LEFT key', () => {
        const tree = new PageTree(TREE);
        const parentNode = tree.getNodeByPath([1]);
        const childNode = tree.getNodeByPath([1, 2]);
        childNode.click();
        expect(parentNode.hasFocus()).toBe(false);
        browser.keys(ARROW_LEFT_KEY);
        expect(parentNode.hasFocus()).toBe(true);
    });
    it('should focus first node in tree when press HOME key', () => {
        const tree = new PageTree(TREE);
        const firstNode = tree.getNodeByPath([0]);
        tree.getNodeByPath([1, 2]).click();
        expect(firstNode.hasFocus()).toBe(false);
        browser.keys(HOME_KEY);
        expect(firstNode.hasFocus()).toBe(true);
        tree.getNodeByPath([2]).click();
        browser.keys(HOME_KEY);
        expect(firstNode.hasFocus()).toBe(true);
    });
    it('should focus last node in tree when press END key', () => {
        const tree = new PageTree(TREE);
        const lastNode = tree.getNodeByPath([2]);
        tree.getNodeByPath([0]).click();
        expect(lastNode.hasFocus()).toBe(false);
        browser.keys(END_KEY);
        expect(lastNode.hasFocus()).toBe(true);
        tree.getNodeByPath([1, 0]).click();
        browser.keys(END_KEY);
        expect(lastNode.hasFocus()).toBe(true);
    });
    it('should expand or collase node when press SPACE key', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNodeByPath([0]);
        node.click();
        expect(node.isExpanded()).toBe(false);
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(true);
        browser.keys(SPACE_KEY);
        expect(node.isExpanded()).toBe(false);
    });
    it('should select node when it is focused but not selected and press ENTER key', () => {
        const tree = new PageTree(TREE);
        const firstNode = tree.getNodeByPath([0]);
        firstNode.click();
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(tree.getNodeByPath([1]).isSelected()).toBe(true);
        browser.keys(ARROW_DOWN_KEY);
        browser.keys(ENTER_KEY);
        expect(tree.getNodeByPath([2]).isSelected()).toBe(false);
    });
    it('should expand or collapse node when it is selected and press ENTER key', () => {
        const tree = new PageTree(TREE);
        const node = tree.getNodeByPath([0]);
        node.click();
        expect(node.isSelected()).toBe(true);
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(true);
        browser.keys(ENTER_KEY);
        expect(node.isExpanded()).toBe(false);
    });
    it('should expand all nodes at same level when press `*` key', () => {
        const tree = new PageTree(TREE);
        const firstRootNode = tree.getNodeByPath([0]);
        const lastRootNode = tree.getNodeByPath([2]);
        firstRootNode.click();
        expect(firstRootNode.isExpanded()).toBe(false);
        expect(lastRootNode.isExpanded()).toBe(false);
        browser.keys('*');
        expect(firstRootNode.isExpanded()).toBe(true);
        expect(lastRootNode.isExpanded()).toBe(true);
    });
    it('should focus the node that the first letter in label matches alphanumeric key pressed', () => {
        const tree = new PageTree(TREE);
        tree.getNodeByPath([2]).click();
        browser.keys(ARROW_RIGHT_KEY);
        tree.getNodeByPath([0]).click();
        browser.keys(ARROW_RIGHT_KEY);
        browser.keys('p');
        expect(tree.getNodeByPath([0, 1]).hasFocus()).toBe(true);
        browser.keys('P');
        expect(tree.getNodeByPath([0, 4]).hasFocus()).toBe(true);
        browser.keys('p');
        expect(tree.getNodeByPath([1, 0]).hasFocus()).toBe(true);
        browser.keys('P');
        expect(tree.getNodeByPath([2, 1]).hasFocus()).toBe(true);
        browser.keys('p');
        expect(tree.getNodeByPath([0, 1]).hasFocus()).toBe(true);
    });
});
