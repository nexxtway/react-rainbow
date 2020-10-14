function releaseKey(character) {
    browser.performActions([
        {
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: character }],
        },
    ]);
}

module.exports = releaseKey;
