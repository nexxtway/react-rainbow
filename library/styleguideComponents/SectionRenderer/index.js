/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import SectionHeading from '../SectionHeading';

export default function SectionRenderer(props) {
    const { name, slug, content, components, sections, depth, description, pagePerSection } = props;

    return (
        <section>
            {name && (
                <SectionHeading
                    depth={depth}
                    id={slug}
                    slotName="sectionToolbar"
                    pagePerSection={pagePerSection}
                    slotProps={props}
                >
                    {name}
                </SectionHeading>
            )}
            <div>
                {description}
                {content}
                {sections}
                {components}
            </div>
        </section>
    );
}

SectionRenderer.propTypes = {
    name: PropTypes.string,
    description: PropTypes.string,
    slug: PropTypes.string,
    content: PropTypes.node,
    components: PropTypes.node.isRequired,
    sections: PropTypes.node,
    depth: PropTypes.number.isRequired,
    pagePerSection: PropTypes.bool.isRequired,
};

SectionRenderer.defaultProps = {
    name: undefined,
    description: undefined,
    slug: undefined,
    content: undefined,
    sections: undefined,
};
