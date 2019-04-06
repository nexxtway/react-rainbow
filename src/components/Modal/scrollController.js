function preventDefault(event) {
    event.preventDefault();
}

export function disableScroll() {
    document.body.addEventListener('touchmove', preventDefault, { passive: false });
    document.body.style.overflow = 'hidden';
}

export function enableScroll() {
    document.body.removeEventListener('touchmove', preventDefault, { passive: false });
    document.body.style.overflow = 'inherit';
}
