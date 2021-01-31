import React from 'react';
import PropTypes from 'prop-types';
import { HighlightedText } from 'react-rainbow-components';
import { Label, Post } from './styled';

const LabelText = ({ value, variant }) => {
    if (variant === 'small') {
        if (Array.isArray(value)) {
            return <HighlightedText parts={value} textComponent={Post} hitComponent={Post} />;
        }
        return <Post>{value}</Post>;
    }
    if (Array.isArray(value)) {
        return <HighlightedText parts={value} textComponent={Label} />;
    }
    return <Label>{value}</Label>;
};

export default LabelText;

LabelText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    variant: PropTypes.string,
};

LabelText.defaultProps = {
    value: undefined,
    variant: undefined,
};
