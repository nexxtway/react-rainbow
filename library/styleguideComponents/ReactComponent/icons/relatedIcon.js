import React from 'react';
import PropTypes from 'prop-types';

const RelatedIcon = (props) => {
    const { className } = props;
    return (
        <svg className={className} xmlns="http://www.w3.org/2000/svg" width="28" height="14" viewBox="0 0 28 14">
            <g fill="none" fillRule="evenodd">
                <path fill="#A4A7B5" d="M23.772 3.541V2.267h-5.096a1.18 1.18 0 0 0-.446.127l-1.02 1.037L16 1.31c-.063-.19-.255-.318-.51-.318H9.12v1.274h5.988l1.147 1.847-2.293 2.336H9.12v1.274h5.096c.128 0 .319-.064.446-.127l2.294-2.336 1.592 2.676-3.376 3.886H9.12v1.274h6.37a.723.723 0 0 0 .51-.191l3.631-4.269h4.141V7.363h-4.077l-1.784-2.786 1.02-1.036h4.841z" />
                <path fill="#01B6F5" d="M0 1.624c0 .896.727 1.623 1.624 1.623h6.495a1.624 1.624 0 0 0 0-3.247H1.624C.727 0 0 .727 0 1.624zM0 7.108c0 .897.727 1.624 1.624 1.624h6.495a1.624 1.624 0 1 0 0-3.247H1.624C.727 5.485 0 6.21 0 7.108zM0 12.376C0 13.273.727 14 1.624 14h6.495a1.624 1.624 0 1 0 0-3.247H1.624C.727 10.753 0 11.48 0 12.376zM27.134 2.887a1.804 1.804 0 0 0-3.608 0 1.804 1.804 0 0 0 3.608 0zM27.134 8.01a1.804 1.804 0 0 0-3.608 0 1.804 1.804 0 0 0 3.608 0z" />
            </g>
        </svg>
    );
};

RelatedIcon.propTypes = {
    className: PropTypes.string,
};

RelatedIcon.defaultProps = {
    className: undefined,
};

export default RelatedIcon;
