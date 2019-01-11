const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'Admin',
    'Authetication',
    'RainbowComponents',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
