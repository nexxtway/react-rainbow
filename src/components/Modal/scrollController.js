function preventDefault(e) {
    e.preventDefault();
}

export function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
}

export function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
}
