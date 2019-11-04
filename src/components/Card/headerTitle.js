/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import StyledTitle from './styled/title';

export default function HeaderTitle({ title }) {
    if (typeof title === 'string') {
        return <StyledTitle>{title}</StyledTitle>;
    }
    return title;
}

HeaderTitle.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
HeaderTitle.defaultProps = {
    title: null,
};
