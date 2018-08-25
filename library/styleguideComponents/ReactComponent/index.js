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
    const descriptionText = description ? description.props.text : null;

    return (
        <div>
            {heading}
            <Description text={descriptionText} />
            <div className="slds-m-vertical_large">
                <Pathline name={name}>
                    {`import ${name} from 'react-slds/components/${name}'`}
                </Pathline>
            </div>
            <h2 className="slds-text-heading_medium slds-m-bottom_medium slds-react-component-title-text">
                Interactive Examples
            </h2>
            {examples}
            <p className="slds-text-heading_medium slds-m-bottom_medium slds-react-component-title-text">
                Properties & Methods details
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
