import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from './helpers';
import { StyledText } from './styled';
import Chips from './chips';

const Content = props => {
    const { variant, value, chipVariant, readOnly, disabled, onDelete, borderRadius } = props;
    if (variant === 'chip') {
        return (
            <Chips
                value={value}
                variant={chipVariant}
                readOnly={readOnly}
                disabled={disabled}
                onDelete={onDelete}
                borderRadius={borderRadius}
            />
        );
    }

    const content = getContent(value);
    return <StyledText>{content}</StyledText>;
};

Content.propTypes = {
    disabled: PropTypes.bool,
    readOnly: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'chip']),
    chipVariant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    value: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            label: PropTypes.string,
            value: PropTypes.any,
        }),
    ),
    onDelete: PropTypes.func,
    borderRadius: PropTypes.oneOf(['square', 'semi-square', 'semi-rounded', 'rounded']),
};

Content.defaultProps = {
    disabled: false,
    readOnly: false,
    variant: 'default',
    chipVariant: 'base',
    value: undefined,
    onDelete: () => {},
    borderRadius: 'rounded',
};

export default Content;
