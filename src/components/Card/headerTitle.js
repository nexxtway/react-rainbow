/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import StyledHeaderLink from './styled/headerLink';
import StyledTitle from './styled/title';

export default function HeaderTitle({ title }) {
    if (typeof title === 'string') {
        return (
            <h2>
                <StyledHeaderLink href="javascript:void(0);">
                    <StyledTitle>{title}</StyledTitle>
                </StyledHeaderLink>
            </h2>
        );
    }
    return title;
}

HeaderTitle.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
HeaderTitle.defaultProps = {
    title: null,
};
