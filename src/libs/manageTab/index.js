import findTabbableElements from './findTabbableElements';

export default function manageTab(node, event) {
    const tabbable = findTabbableElements(node);

    if (!tabbable.length) {
        event.preventDefault();
        return;
    }

    const { shiftKey } = event;
    const head = tabbable[0];
    const tail = tabbable[tabbable.length - 1];
    let target;

    if (node === document.activeElement) {
        if (!shiftKey) return;
        target = tail;
    }

    if (tail === document.activeElement && !shiftKey) {
        target = head;
    }

    if (head === document.activeElement && shiftKey) {
        target = tail;
    }

    if (target) {
        event.preventDefault();
        target.focus();
        return;
    }

    // Safari radio issue.
    //
    // Safari does not move the focus to the radio button,
    // so we need to force it to really walk through all elements.
    //
    // This is very error prone, since we are trying to guess
    // if it is a safari browser from the first occurence between
    // chrome or safari.
    //
    // The chrome user agent contains the first ocurrence
    // as the 'chrome/version' and later the 'safari/version'.
    const checkSafari = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
    const isSafariDesktop =
        checkSafari != null &&
        checkSafari[1] !== 'Chrome' &&
        /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;

    if (!isSafariDesktop) return;

    let elem = tabbable.indexOf(document.activeElement);

    if (elem > -1) {
        elem += shiftKey ? -1 : 1;
    }

    event.preventDefault();

    tabbable[elem].focus();
}
