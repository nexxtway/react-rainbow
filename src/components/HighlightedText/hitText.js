import React from 'react';
import PropTypes from 'prop-types';

function hitText({ parts, HitComponent, TextComponent }) {
    return parts.map((part, index) => {
        const key = `part-${index}`;
        if (part.type === 'hit') {
            return <HitComponent key={key}>{part.value}</HitComponent>;
        }
        return <TextComponent key={key}>{part.value}</TextComponent>;
    });
}

export default hitText;

hitText.propTypes = {
    parts: PropTypes.arrayOf(
        PropTypes.exact({
            value: PropTypes.string,
            type: PropTypes.string,
        }),
    ),
    HitComponent: PropTypes.func,
    TextComponent: PropTypes.func,
};

hitText.defaultProps = {
    parts: undefined,
    HitComponent: undefined,
    TextComponent: undefined,
};
