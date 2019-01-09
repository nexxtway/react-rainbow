const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
