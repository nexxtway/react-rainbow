export default function fetchGithubStars() {
    return fetch('https://api.github.com/repos/nexxtway/react-rainbow/stargazers?per_page=100')
        .then(respose => respose.text())
        .then(responseText => JSON.parse(responseText))
        .then(starsArray => starsArray.length);
}
