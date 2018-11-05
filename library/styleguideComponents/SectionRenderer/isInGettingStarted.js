const NAMES = [
    'Getting Started',
    'Overview',
    'Installation',
    'Usage',
    'Contribuiting',
    'Testing',
];

export default function isInGettingStarted(currentName) {
    return NAMES.some(name => name === currentName);
}
