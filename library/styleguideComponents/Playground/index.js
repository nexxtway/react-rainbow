import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const pages = [
    'GettingStarted',
    'Experiences',
    'Designs',
];

function isComponentsPage(name) {
    return pages.some(page => page !== name);
}

export default function PlaygroundRenderer(props) {
    const {
        name,
        preview,
        previewProps,
        tabButtons,
        tabBody,
        toolbar,
    } = props;
    const { ...rest } = previewProps;

    if (isComponentsPage(name)) {
        return (
            <div className="rainbow-position_relative rainbow-m-bottom_large">
                {toolbar}
                <article {...rest} className="react-rainbow-playground" data-preview={name}>
                    {preview}
                </article>
                <div className="rainbow-flex rainbow-justify_end rainbow-p-vertical_xx-small">{tabButtons}</div>
                <div>{tabBody}</div>
            </div>
        );
    }

    return (
        <div className="rainbow-position_relative">
            {preview}
        </div>
    );
}

PlaygroundRenderer.propTypes = {
    name: PropTypes.string.isRequired,
    preview: PropTypes.node.isRequired,
    previewProps: PropTypes.object.isRequired,
    tabButtons: PropTypes.node.isRequired,
    tabBody: PropTypes.node.isRequired,
    toolbar: PropTypes.node.isRequired,
};
