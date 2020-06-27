/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';

export default function SectionRenderer(props) {
    const { content, components, sections, description } = props;

    return (
        <section>
            {description}
            {content}
            {sections}
            {components}
        </section>
    );
}

SectionRenderer.propTypes = {
    description: PropTypes.string,
    content: PropTypes.node,
    components: PropTypes.node.isRequired,
    sections: PropTypes.node,
};

SectionRenderer.defaultProps = {
    description: undefined,
    content: undefined,
    sections: undefined,
};
