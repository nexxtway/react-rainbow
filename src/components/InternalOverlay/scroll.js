/* eslint-disable import/prefer-default-export */
const keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(event) {
    event.preventDefault();
}

function preventDefaultForScrollKeys(event) {
    if (keys[event.keyCode]) {
        preventDefault(event);
        return false;
    }
    return true;
}

let supportsPassive = false;
try {
    window.addEventListener(
        'test',
        null,
        Object.defineProperty({}, 'passive', {
            get: () => {
                supportsPassive = true;
            },
        }),
    );
    // eslint-disable-next-line no-empty
} catch (e) {}

const wheelOpt = supportsPassive ? { passive: false } : false;
const wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

export const disableScroll = () => {
    window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
    window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
    window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
    window.addEventListener('keydown', preventDefaultForScrollKeys, false);
};

export const enableScroll = () => {
    window.removeEventListener('DOMMouseScroll', preventDefault, false);
    window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
    window.removeEventListener('touchmove', preventDefault, wheelOpt);
    window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
};
