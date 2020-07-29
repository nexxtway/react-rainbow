import getAllValues from './getAllValues';

export default function isChecked(value, children) {
    if (value.length === 0) {
        return false;
    }

    if (value.length === getAllValues(children).length) {
        return true;
    }

    return 'indeterminate';
}
