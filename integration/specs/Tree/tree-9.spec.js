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
});
