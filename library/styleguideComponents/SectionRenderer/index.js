/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown/Markdown';
import SectionHeading from '../SectionHeading';

export default function SectionRenderer(props) {
    const {
        name,
        slug,
        content,
        components,
        sections,
        depth,
        description,
        pagePerSection,
    } = props;

    const getSectionClassName = () => {
        if (name === 'Getting Started' || name === 'Overview' || name === 'Usage' || name === 'Contribuiting') {
            return 'rainbow-p-horizontal_x-large';
        }
        return null;
    };

    return (
        <section>
            {name && (
                <SectionHeading
                    depth={depth}
                    id={slug}
                    slotName="sectionToolbar"
                    pagePerSection={pagePerSection}
                    slotProps={props}>
                    {name}
                </SectionHeading>
            )}
            <div className={getSectionClassName()}>
                {description && <Markdown text={description} />}
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
