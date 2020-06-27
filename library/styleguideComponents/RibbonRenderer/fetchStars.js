export default function fetchGithubStars() {
    return fetch('https://api.github.com/repos/nexxtway/react-rainbow')
        .then(respose => respose.json())
        .then(data => data.stargazers_count);
}
