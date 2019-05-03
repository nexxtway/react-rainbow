import { UP_KEY, DOWN_KEY, ENTER_KEY } from '../../libs/constants';

const KEYS = [
    UP_KEY,
    DOWN_KEY,
    ENTER_KEY,
];

export default function isNavigationKey(keyCode) {
    return KEYS.some(key => key === keyCode);
}
