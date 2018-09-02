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
            <div className="rainbow-m-vertical_large">
                <Pathline name={name}>
                    {`import ${name} from 'react-slds/components/${name}'`}
                </Pathline>
            </div>
            <h2 className="rainbow-font-size-heading_medium rainbow-m-bottom_medium react-rainbow-component-title-text rainbow-color_dark-1">
                Interactive Examples
            </h2>
            {examples}
            <p className="rainbow-font-size-heading_medium rainbow-m-bottom_medium react-rainbow-component-title-text rainbow-color_dark-1">
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
