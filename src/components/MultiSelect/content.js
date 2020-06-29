import React from 'react';
import PropTypes from 'prop-types';
import { getContent } from './helpers';
import { StyledText } from './styled';
import Chips from './chips';

const Content = props => {
    const { variant, value, chipVariant, readOnly, disabled, onDelete } = props;

    if (variant === 'chip') {
        return (
            <Chips
                value={value}
                variant={chipVariant}
                readOnly={readOnly}
                disabled={disabled}
                onDelete={onDelete}
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
};

Content.defaultProps = {
    disabled: false,
    readOnly: false,
    variant: 'default',
    chipVariant: 'base',
    value: undefined,
    onDelete: () => {},
};

export default Content;
