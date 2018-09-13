import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import './styles.css';

export default function AssistiveText({ text }) {
    return (
        <RenderIf isTrue={!!text}>
            <span className="rainbow-assistive-text">{text}</span>;
        </RenderIf>
    );
}

AssistiveText.propTypes = {
    text: PropTypes.string,
};

AssistiveText.defaultProps = {
    text: undefined,
};
