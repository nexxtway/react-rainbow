import React from 'react';
import PropTypes from 'prop-types';
import logo from './../../../assets/images/rainbow-logo.svg';
import Avatar from './../../../src/components/Avatar';
import './styles.css';

export default function GlobalHeader(props) {
    const { className, children, src } = props;

    return (
        <div className={className}>
            <header className="rainbow-align-content_space-between rainbow-p-vertical_small react-rainbow-global-header rainbow-background-color_white">
                <img
                    src={logo}
                    alt="rainbow logo"
                    className="rainbow-m-left_medium react-rainbow-global-header-logo"
                />
                <div className="rainbow-flex rainbow-align_center">
                    {children}
                    <Avatar src={src} variant="circle" className="rainbow-m-horizontal_medium" />
                </div>
            </header>
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
