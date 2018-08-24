import React from 'react';
import PropTypes from 'prop-types';
import react from './../images/react.svg';
import Avatar from './../../../src/components/Avatar';
import './styles.css';

export default function GlobalHeader(props) {
    const {
        className,
        children,
        src,
    } = props;

    return (
        <div className={className}>
            <header className="slds-grid slds-media_center slds-grid_align-spread slds-color__background_gray-1 slds-p-vertical_x-small slds-border_bottom react-slds-golbal-header">
                <img src={react} alt="react lightning logo" className="slds-m-left_medium" />
                <div className="slds-grid slds-media_center">
                    {children}
                    <Avatar
                        src={src}
                        variant="circle"
                        className="slds-m-horizontal_medium" />
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
    src: 'images/avatar1.jpg',
};
