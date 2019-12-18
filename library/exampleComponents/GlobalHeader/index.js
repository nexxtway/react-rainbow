import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../../assets/images/rainbow-logo.svg';
import Avatar from './../../../src/components/Avatar';
import { StyledGlobalHeader, StyledLogo } from './styled';

export default function GlobalHeader(props) {
    const { className, children, src } = props;

    return (
        <div className={className}>
            <StyledGlobalHeader className="rainbow-align-content_space-between rainbow-p-vertical_small">
                <StyledLogo src={logo} alt="rainbow logo" className="rainbow-m-left_medium" />
                <div className="rainbow-flex rainbow-align_center">
                    {children}
                    <Avatar src={src} variant="circle" className="rainbow-m-horizontal_medium" />
                </div>
            </StyledGlobalHeader>
        </div>
    );
}

GlobalHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    src: PropTypes.string,
};

GlobalHeader.defaultProps = {
    children: null,
    className: undefined,
    src: 'images/user/user1.jpg',
};
