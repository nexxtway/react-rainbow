import React, { Component } from 'react';
import fetchGithubStars from './fetchStars';

export default function GithubStars(WrappedComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = { stars: 0 };
        }

        componentDidMount() {
            fetchGithubStars().then(starCount => this.setState({ stars: starCount }));
        }

        render() {
            const { stars } = this.state;
            return (
                <WrappedComponent stars={stars} />
            );
        }
    };
}
