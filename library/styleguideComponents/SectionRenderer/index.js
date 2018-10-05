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
        if (name === 'Overview' || name === 'Usage' || name === 'Contribuiting') {
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
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    content: PropTypes.node.isRequired,
    components: PropTypes.node.isRequired,
    sections: PropTypes.node.isRequired,
    depth: PropTypes.number.isRequired,
    pagePerSection: PropTypes.bool.isRequired,
};
