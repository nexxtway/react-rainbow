const isIosDevice =
    typeof window !== 'undefined' &&
    window.navigator &&
    window.navigator.platform &&
    /iP(ad|hone|od)/.test(window.navigator.platform);

let hasPassiveEvents = false;
if (typeof window !== 'undefined') {
    const passiveTestOptions = {
        get passive() {
            hasPassiveEvents = true;
            return undefined;
        },
    };
    window.addEventListener('testPassive', null, passiveTestOptions);
    window.removeEventListener('testPassive', null, passiveTestOptions);
}

const passiveOption = hasPassiveEvents ? { passive: false } : undefined;

let previousPaddingRight;
let previousOverflowSetting;

function hiddenOverflow() {
    setTimeout(() => {
        if (previousPaddingRight === undefined) {
            const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;

            if (scrollBarGap > 0) {
                previousPaddingRight = document.body.style.paddingRight;
                document.body.style.paddingRight = `${scrollBarGap}px`;
            }
        }

        if (previousOverflowSetting === undefined) {
            previousOverflowSetting = document.body.style.overflow;
            document.body.style.overflow = 'hidden';
        }
    });
}

function restoreOverflow() {
    setTimeout(() => {
        if (previousPaddingRight !== undefined) {
            document.body.style.paddingRight = previousPaddingRight;
            previousPaddingRight = undefined;
        }

        if (previousOverflowSetting !== undefined) {
            document.body.style.overflow = previousOverflowSetting;
            previousOverflowSetting = undefined;
        }
    });
}

function preventDefault(event) {
    if (event.touches.length > 1) {
        return true;
    }
    event.preventDefault();
    return false;
}

export default function handleOverflow(locks) {
    if (locks.length === 1) {
        hiddenOverflow();
        if (isIosDevice) {
            document.addEventListener('touchmove', preventDefault, passiveOption);
        }
    }
    if (locks.length === 0) {
        restoreOverflow();
        if (isIosDevice) {
            document.removeEventListener('touchmove', preventDefault, passiveOption);
        }
    }
}
