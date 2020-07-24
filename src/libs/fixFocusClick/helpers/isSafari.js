/* eslint-disable func-names */
/* eslint-disable no-undef */
export default function isSafari() {
    return (
        /constructor/i.test(window.HTMLElement) ||
        (function(p) {
            return p.toString() === '[object SafariRemoteNotification]';
        })(!window.safari || (typeof safari !== 'undefined' && safari.pushNotification))
    );
}
