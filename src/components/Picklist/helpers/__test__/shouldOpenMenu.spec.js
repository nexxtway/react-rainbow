import shouldOpenMenu from '../shouldOpenMenu';
import {
    TAB_KEY,
    UP_KEY,
    DOWN_KEY,
    LEFT_KEY,
    RIGHT_KEY,
    SPACE_KEY,
    ENTER_KEY,
    DELETE_KEY,
    ESCAPE_KEY,
} from '../../../../libs/constants';

describe('shouldOpenMenu', () => {
    it('should return true only when UP_KEY, DOWN_KEY, LEFT_KEY, RIGHT_KEY, SPACE_KEY, ENTER_KEY are pressed', () => {
        const keys = [UP_KEY, DOWN_KEY, LEFT_KEY, RIGHT_KEY, SPACE_KEY, ENTER_KEY];
        const expectedResults = [true, true, true, true, true, true];
        keys.forEach((keyCode, index) => {
            expect(shouldOpenMenu(keyCode)).toEqual(expectedResults[index]);
        });
    });
    it('should return false when TAB_KEY, DELETE_KEY, ESCAPE_KEY are pressed', () => {
        const keys = [TAB_KEY, DELETE_KEY, ESCAPE_KEY];
        const expectedResults = [false, false, false];
        keys.forEach((keyCode, index) => {
            expect(shouldOpenMenu(keyCode)).toEqual(expectedResults[index]);
        });
    });
});
