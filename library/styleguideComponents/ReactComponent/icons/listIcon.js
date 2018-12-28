import React from 'react';
import PropTypes from 'prop-types';

const ListIcon = (props) => {
    const { className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15">
            <g fill="none" fillRule="evenodd">
                <path fill="#009ACF" d="M17.098 3H6.902C6.404 3 6 2.553 6 2c0-.553.404-1 .902-1h10.196c.498 0 .902.447.902 1 0 .553-.404 1-.902 1z" />
                <path fill="#01B6F5" d="M17.098 8.5H6.902C6.404 8.5 6 8.053 6 7.5c0-.553.404-1 .902-1h10.196c.498 0 .902.447.902 1 0 .553-.404 1-.902 1zM17.098 14H6.902C6.404 14 6 13.553 6 13c0-.553.404-1 .902-1h10.196c.498 0 .902.447.902 1 0 .553-.404 1-.902 1z" />
                <path fill="#01B6F5" fillRule="nonzero" d="M2 9.5a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.857a.857.857 0 1 0 0 1.714.857.857 0 0 0 0-1.714z" />
                <path fill="#009ACF" fillRule="nonzero" d="M2 4a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.857a.857.857 0 1 0 0 1.714.857.857 0 0 0 0-1.714z" />
                <path fill="#01B6F5" fillRule="nonzero" d="M2 15a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0-2.857a.857.857 0 1 0 0 1.714.857.857 0 0 0 0-1.714z" />
            </g>
        </svg>
    );
};

ListIcon.propTypes = {
    className: PropTypes.string,
};

ListIcon.defaultProps = {
    className: undefined,
};

export default ListIcon;
