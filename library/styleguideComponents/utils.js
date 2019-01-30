const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'RainbowComponents',
    'Admin',
    'Authentication',
    'Chat',
    'ComingSoon',
    'CreateProfile',
    'Team',
    'SocialIconsSet',
];

export default function isNotComponentPage(name) {
    return pages.some(page => page === name);
}
