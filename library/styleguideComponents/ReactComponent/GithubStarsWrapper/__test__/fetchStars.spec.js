import fetchGithubStars from '../fetchStars';

global.fetch = jest.fn();

beforeEach(() => {
    fetch.mockReset();
    fetch.mockReturnValue(Promise.resolve());
});

describe('fetch stars method', () => {
    it('should call fetch with the right data', () => {
        fetchGithubStars();
        expect(fetch).toHaveBeenCalledWith('https://api.github.com/repos/reiniergs/react-lightning-components/stargazers');
    });
    it('should return the number of stars for the repository', () => {
        fetch.mockReturnValue(Promise.resolve({
            text: () => Promise.resolve('[{}, {}, {}]'),
        }));
        expect(fetchGithubStars()).resolves.toBe(3);
    });
});
