import React from 'react';
import PropTypes from 'prop-types';
import Button from './../../../src/components/Button';
import './styles.css';

export default function CodeEditorButton({ name, onClick }) {
    return (
        <Button label="Show Code" iconName="utility:insert_tag_field" name={name} onClick={onClick} />
    );
}

CodeEditorButton.propTypes = {
    name: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
};
