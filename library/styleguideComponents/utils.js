const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'Admin',
    'Authentication',
    'RainbowComponents',
    'Chat',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
