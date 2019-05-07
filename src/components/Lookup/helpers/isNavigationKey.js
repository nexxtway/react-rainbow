import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../../libs/constants';

const KEYS = {
    [UP_KEY]: true,
    [DOWN_KEY]: true,
    [ENTER_KEY]: true,
};

export default function isNavigationKey(keyCode) {
    return !!KEYS[keyCode];
}
