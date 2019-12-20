import React from 'react';
import PropTypes from 'prop-types';
import isNotComponentPage from './../utils';
import './styles.css';

export default function PlaygroundRenderer(props) {
    const { name, preview, previewProps, tabButtons, tabBody, toolbar } = props;
    const { ...rest } = previewProps;

    if (isNotComponentPage(name)) {
        return <div className="rainbow-position_relative">{preview}</div>;
    }

    return (
        <div className="rainbow-position_relative rainbow-m-bottom_large">
            <article {...rest} data-preview={name}>
                {preview}
                {toolbar}
            </article>
            <div className="rainbow-flex rainbow-justify_end rainbow-p-vertical_xx-small">
                {tabButtons}
            </div>
            {tabBody}
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
