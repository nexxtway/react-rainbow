import React from 'react';
import PropTypes from 'prop-types';
import Button from './../../../src/components/Button';
import './styles.css';

export default function CodeEditorButton({ name, onClick, active }) {
    const getLabel = () => {
        if (active) {
            return 'Hide Code';
        }
        return 'Show Code';
    };

    return (
        <Button label={getLabel()} iconName="utility:insert_tag_field" name={name} onClick={onClick} />
    );
}

CodeEditorButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool,
};

CodeEditorButton.defaultProps = {
    active: undefined,
};
