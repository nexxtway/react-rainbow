import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function PlaygroundRenderer(props) {
    const {
        name,
        preview,
        previewProps,
        tabButtons,
        tabBody,
        toolbar,
    } = props;
    const { className, ...rest } = previewProps;

    if (name === 'Icons') {
        return (
            <div className="slds-is-relative">
                {preview}
            </div>
        );
    }

    return (
        <div className="slds-is-relative slds-m-bottom_large">
            <div className="slds-react-isolate-button">{toolbar}</div>
            <article {...rest} className="slds-card slds-react-playground-background-color" data-preview={name}>
                {preview}
            </article>
            <div className="slds-grid slds-grid_align-end slds-p-vertical_xx-small">{tabButtons}</div>
            <div>{tabBody}</div>
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
