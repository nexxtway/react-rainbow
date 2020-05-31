import { isSameMonth } from '../../helpers';

export default function shouldUpdateCurrentMonth(value, currentMonth, rightMonth) {
    if (isSameMonth(value, rightMonth) || isSameMonth(value, currentMonth)) return false;
    return true;
}
