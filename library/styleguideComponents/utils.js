const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'DesignDetails',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
