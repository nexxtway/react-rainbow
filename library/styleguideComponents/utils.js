const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
    'RainbowComponents',
    'Admin',
    'Authentication',
    'Chat',
    'ComingSoon',
    'NotFound404',
    'CreateProfile',
    'Team',
    'SocialIconsSet',
    '',
];

export default function isNotComponentPage(name) {
    return pages.indexOf(name) !== -1 || name === undefined;
}
