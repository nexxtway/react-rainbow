export default function fetchGithubStars() {
    return fetch('https://api.github.com/repos/reiniergs/react-lightning-components/stargazers')
        .then(respose => respose.text())
        .then(responseText => JSON.parse(responseText))
        .then(starsArray => starsArray.length);
}
