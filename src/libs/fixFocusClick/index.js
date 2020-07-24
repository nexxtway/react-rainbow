import { isFirefox, isSafari } from './helpers';

export default function fixFocusClick(ref) {
    const { current: el } = ref || {};
    if (el && (isFirefox() || isSafari)) {
        el.focus();
    }
}
