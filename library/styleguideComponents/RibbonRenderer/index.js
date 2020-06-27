/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Badge from '../../../src/components/Badge';
import githublogo from './image/github.svg';
import fetchGithubStars from './fetchStars';
import './styles.css';

export default class RibbonRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = { starsCount: '0' };
    }

    componentDidMount() {
        fetchGithubStars().then(starsCount => this.setState({ starsCount }));
    }

    render() {
        const { starsCount } = this.state;

        return (
            <header className="react-rainbow-heading-container rainbow-flex rainbow-justify_end rainbow-align_center rainbow-position_fixed">
                <div className="rainbow-align-content_center react-rainbow-github-badge-container">
                    <div className="react-rainbow-github-stars-container">
                        <Badge
                            className="react-rainbow-github-badge rainbow-color_dark-1 rainbow-m-right_small"
                            variant="lightest"
                        >
                            <FontAwesomeIcon
                                className="react-rainbow-github-badge_icon"
                                color="#061c3f"
                                icon={faStar}
                            />
                            {starsCount}
                        </Badge>
                    </div>
                    <a
                        className="react-rainbow-heading_github-link"
                        href="https://github.com/nexxtway/react-rainbow"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={githublogo}
                            alt="github logo"
                            className="react-rainbow-heading_github-icon"
                        />
                    </a>
                </div>
            </header>
        );
    }
}
