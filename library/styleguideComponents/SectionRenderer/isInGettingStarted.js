const NAMES = [
    'Getting Started',
    'Overview',
    'Usage',
    'Contribuiting',
    'Testing',
];

export default function isInGettingStarted(currentName) {
    return NAMES.some(name => name === currentName);
}
