/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Pathline from 'react-styleguidist/lib/rsg-components/Pathline';
import Description from './description';
import Card from './../../../src/components/Card';
import './styles.css';

const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
const { faList } = require('@fortawesome/free-solid-svg-icons');

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
                    {`import ${name} from 'react-rainbow-components/components/${name}'`}
                </Pathline>
            </div>
            <h2 className="rainbow-font-size-heading_medium rainbow-m-bottom_medium react-rainbow-component-title-text rainbow-color_dark-1">
                Interactive Examples
            </h2>
            {examples}
            <Card
                className="rainbow-m-bottom_x-large"
                icon={<FontAwesomeIcon icon={faList} size="lg" className="rainbow-color_brand" />}
                title="Properties & Methods details">

                    {tabBody}
            </Card>
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
