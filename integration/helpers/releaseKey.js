async function releaseKey(character) {
    await browser.performActions([
        {
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyUp', value: character }],
        },
    ]);
}

module.exports = releaseKey;
