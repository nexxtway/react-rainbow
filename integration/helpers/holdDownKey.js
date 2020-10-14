function holdDownKey(character) {
    browser.performActions([
        {
            type: 'key',
            id: 'keyboard',
            actions: [{ type: 'keyDown', value: character }],
        },
    ]);
}

module.exports = holdDownKey;
