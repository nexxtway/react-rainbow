const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'Admin',
    'Authentication',
    'RainbowComponents',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
