import Github from './github';
import GithubGist from './githubGist';
import Dracula from './dracula';

const themes = {
    github: Github,
    'github-gist': GithubGist,
    dracula: Dracula,
};

export { themes, Github, GithubGist, Dracula };
