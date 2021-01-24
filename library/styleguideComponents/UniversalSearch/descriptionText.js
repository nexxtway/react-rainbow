import React from 'react';
import PropTypes from 'prop-types';
import { HighlightedText } from 'react-rainbow-components';
import { Description, DescriptionHit } from './styled';

const DecriptionText = ({ value }) => {
    if (Array.isArray(value)) {
        return (
            <HighlightedText
                parts={value}
                textComponent={Description}
                hitComponent={DescriptionHit}
            />
        );
    }
    return <Description>{value}</Description>;
};

DecriptionText.propTypes = {
    value: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
};

DecriptionText.defaultProps = {
    value: undefined,
};

export default DecriptionText;
