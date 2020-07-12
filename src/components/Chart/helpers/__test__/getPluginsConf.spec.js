import getPluginsConf from '../getPluginsConf';

const firstPlugin = { id: 'datalabels', description: 'labels on bars' };
const lastPlugin = { id: 'colorschemes', description: 'automatic color on bars' };
const plugins = [firstPlugin, lastPlugin];
const data = {
    datalabels: { color: '#fc8d62' },
    colorschemes: { scheme: 'brewer.SetTwo7' },
    className: 'rainbow-m-horizontal_xx-large rainbow-m-top_x-large',
    children: [1, 2, 3],
};

describe('getPluginsConf', () => {
    it('should return the right value', () => {
        const expectedValue = {
            datalabels: { color: '#fc8d62' },
            colorschemes: { scheme: 'brewer.SetTwo7' },
        };
        expect(getPluginsConf(data, plugins)).toStrictEqual(expectedValue);
    });
});
