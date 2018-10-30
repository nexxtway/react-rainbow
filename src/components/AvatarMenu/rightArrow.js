import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function RightArrow({ isOpen }) {
    const getArrowClassName = () => classnames('rainbow-avatar-menu_right-arrow_icon', {
        'rainbow-avatar-menu_right-arrow_icon--open': isOpen,
    });

    return (
        <svg className={getArrowClassName()} width="10px" height="7px" viewBox="0 0 10 7" version="1.1">
            <title>angle-down</title>
            <desc>Created with Sketch.</desc>
            <defs />
            <g id="examples" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="angle-down" transform="translate(-7.000000, -9.000000)" fillRule="nonzero">
                    <path d="M7.21962617,10.9797508 C6.92679128,10.6869159 6.92679128,10.2133956 7.21962617,9.92367601 L7.92367601,9.21962617 C8.2165109,8.92679128 8.69003115,8.92679128 8.97975078,9.21962617 L11.982866,12.2227414 L14.9859813,9.21962617 C15.2788162,8.92679128 15.7523364,8.92679128 16.0420561,9.21962617 L16.7461059,9.92367601 C17.0389408,10.2165109 17.0389408,10.6900312 16.7461059,10.9797508 L12.5093458,15.2165109 C12.2227414,15.5093458 11.7492212,15.5093458 11.4563863,15.2165109 L7.21962617,10.9797508 Z" id="arrow" fill="#576574" />
                </g>
            </g>
        </svg>
    );
}

RightArrow.propTypes = {
    isOpen: PropTypes.bool,
};

RightArrow.defaultProps = {
    isOpen: false,
};
