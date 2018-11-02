export default function fetchGithubStars() {
    return fetch('https://api.github.com/repos/90milesbridge/react-rainbow/stargazers')
        .then(respose => respose.text())
        .then(responseText => JSON.parse(responseText))
        .then(starsArray => starsArray.length);
}
