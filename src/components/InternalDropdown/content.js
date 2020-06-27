import React from 'react';
import PropTypes from 'prop-types';
import Spinner from '../Spinner';
import { SpinnerContainer } from './styled';

export default function Content({ children, isLoading }) {
    if (isLoading) {
        return (
            <SpinnerContainer>
                <Spinner assistiveText="loading menu" isVisible size="small" />
            </SpinnerContainer>
        );
    }
    return children;
}

Content.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Content.defaultProps = {
    className: undefined,
    style: undefined,
};
