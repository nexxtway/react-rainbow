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

export default function handleOverflow(locks) {
    if (locks.length === 1) {
        hiddenOverflow();
    }
    if (locks.length === 0) {
        restoreOverflow();
    }
}
