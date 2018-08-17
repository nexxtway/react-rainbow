/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'react-styleguidist/lib/rsg-components/Pathline';
import Description from './description';
import './styles.css';

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
            <header className="slds-border_bottom slds-p-bottom_large">
                <h1 className="slds-text-heading_large slds-react-component-title-text">
                    {componentName}
                </h1>
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
