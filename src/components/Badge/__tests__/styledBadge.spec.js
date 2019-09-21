import React from 'react';
import renderer from 'react-test-renderer';
import StyledBadge from '../styledBadge';
import { COLOR_WHITE, COLOR_BRAND, COLOR_GRAY_2, COLOR_GRAY_4 } from '../../../libs/colors';

const TRANSPARENT = 'transparent';

describe('<StyledBadge/>', () => {
    it('should have the right styles when variant is not passed', () => {
        const tree = renderer.create(<StyledBadge />).toJSON();
        expect(tree).toHaveStyleRule('color', COLOR_GRAY_4);
        expect(tree).toHaveStyleRule('background-color', COLOR_GRAY_2);
        expect(tree).toHaveStyleRule('border-color', TRANSPARENT);
    });
    it('should have the right styles when variant is "lightest"', () => {
        const tree = renderer.create(<StyledBadge variant="lightest" />).toJSON();
        expect(tree).toHaveStyleRule('color', COLOR_GRAY_4);
        expect(tree).toHaveStyleRule('background-color', COLOR_WHITE);
        expect(tree).toHaveStyleRule('border-color', COLOR_GRAY_2);
    });
    it('should have the right styles when variant is "brand"', () => {
        const tree = renderer.create(<StyledBadge variant="brand" />).toJSON();
        expect(tree).toHaveStyleRule('color', COLOR_WHITE);
        expect(tree).toHaveStyleRule('background-color', COLOR_BRAND);
        expect(tree).toHaveStyleRule('border-color', TRANSPARENT);
    });
    it('should have the right styles when variant is "outline-brand"', () => {
        const tree = renderer.create(<StyledBadge variant="outline-brand" />).toJSON();
        expect(tree).toHaveStyleRule('color', COLOR_BRAND);
        expect(tree).toHaveStyleRule('background-color', TRANSPARENT);
        expect(tree).toHaveStyleRule('border-color', COLOR_BRAND);
    });
    it('should have the right styles when variant is "inverse"', () => {
        const tree = renderer.create(<StyledBadge variant="inverse" />).toJSON();
        expect(tree).toHaveStyleRule('color', COLOR_WHITE);
        expect(tree).toHaveStyleRule('background-color', COLOR_GRAY_4);
        expect(tree).toHaveStyleRule('border-color', TRANSPARENT);
    });
});
