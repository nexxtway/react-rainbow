import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../../assets/images/rainbow-logo.svg';
import Avatar from './../../../src/components/Avatar';
import RenderIf from './../../../src/components/RenderIf';
import { StyledGlobalHeader, StyledLogo } from './styled';

export default function GlobalHeader(props) {
    const { className, children, src, hideAvatar, variant } = props;

    return (
        <div className={className}>
            <StyledGlobalHeader
                className="rainbow-align-content_space-between rainbow-p-vertical_small"
                variant={variant}
            >
                <StyledLogo src={logo} alt="rainbow logo" className="rainbow-m-left_medium" />
                <div className="rainbow-flex rainbow-align_center">
                    {children}
                    <RenderIf isTrue={!hideAvatar}>
                        <Avatar
                            src={src}
                            variant="circle"
                            className="rainbow-m-horizontal_medium"
                        />
                    </RenderIf>
                </div>
            </StyledGlobalHeader>
        </div>
    );
}

GlobalHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    src: PropTypes.string,
    hideAvatar: PropTypes.bool,
    variant: PropTypes.oneOf(['default', 'shaded']),
};

GlobalHeader.defaultProps = {
    children: null,
    className: undefined,
    src: 'images/user/user1.jpg',
    hideAvatar: false,
    variant: 'default',
};
