import {
    UP_KEY,
    DOWN_KEY,
    LEFT_KEY,
    RIGHT_KEY,
    SPACE_KEY,
    ENTER_KEY,
} from '../../../libs/constants';

export default function shouldOpenMenu(keyCode) {
    return [LEFT_KEY, RIGHT_KEY, UP_KEY, DOWN_KEY, SPACE_KEY, ENTER_KEY].includes(keyCode);
}
