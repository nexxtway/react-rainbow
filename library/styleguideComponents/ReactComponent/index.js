/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'react-styleguidist/lib/rsg-components/Pathline';
import Badge from '../../../src/components/Badge';
import Description from './description';
import GithubStars from './GithubStarsWrapper';
import githublogo from './image/github.svg';
import './styles.css';

const GithubStarsBadge = GithubStars(({ stars }) => (
    <Badge
        iconName="utility:favorite"
        label={stars}
        className="slds-react-github-badge"
        variant="lightest" />
));

export default function ReactComponent(props) {
    const {
        name,
        heading,
        description,
        examples,
        tabBody,
    } = props;
    const componentName = heading.props.children;
    const descriptionText = description ? description.props.text : null;

    return (
        <div>
            <header className="slds-border_bottom slds-p-bottom_large slds-grid slds-grid_align-spread">
                <h1 className="slds-text-heading_large slds-react-component-title-text">
                    {componentName}
                </h1>
                <div className="slds-grid slds-grid_vertical-align-center">
                    <div>
                        <GithubStarsBadge />
                    </div>
                    <a
                        href="https://github.com/reiniergs/react-lightning-components"
                        target="_blank"
                        rel="noopener noreferrer">
                        <img src={githublogo} alt="github logo" />
                    </a>
                </div>
            </header>
            <Description text={descriptionText} />
            <div className="slds-m-vertical_large">
                <Pathline>
                    {`import ${name} from 'react-slds/components/${name}'`}
                </Pathline>
            </div>
            <h2 className="slds-text-heading_medium slds-m-bottom_medium slds-react-component-title-text">
                Interactive Examples
            </h2>
            {examples}
            <p className="slds-text-heading_medium slds-m-bottom_medium slds-react-component-title-text">
                Property Details
            </p>
            {tabBody}
        </div>
    );
}

ReactComponent.propTypes = {
    name: PropTypes.string.isRequired,
    heading: PropTypes.node.isRequired,
    tabBody: PropTypes.node.isRequired,
    description: PropTypes.node.isRequired,
    examples: PropTypes.node.isRequired,
};
