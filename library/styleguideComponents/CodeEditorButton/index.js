/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import Button from './../../../src/components/Button';

export default function CodeEditorButton({ onClick, active }) {
    const getLabel = () => {
        if (active) {
            return 'Hide Code';
        }
        return 'Show Code';
    };

    return (
        <Button onClick={onClick}>
            <FontAwesomeIcon
                className="rainbow-font-size-heading_small rainbow-m-right_x-small"
                icon={faCode} />
            {getLabel()}
        </Button>
    );
}

CodeEditorButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
};

CodeEditorButton.defaultProps = {
    active: undefined,
};
