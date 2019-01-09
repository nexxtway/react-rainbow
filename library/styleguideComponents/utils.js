const pages = [
    'GettingStarted',
    'Components',
    'Experiences',
    'Designs',
];

export function isNotComponentPage(name) {
    return pages.some(page => page === name);
}

export function isComponentPage(name) {
    return pages.some(page => page !== name);
}
