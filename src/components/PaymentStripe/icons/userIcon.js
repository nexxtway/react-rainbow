import React from 'react';
import PropTypes from 'prop-types';

export default function UserIcon(props) {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="16" height="16" viewBox="0 0 16 16">
            <g fill="none" transform="translate(.5 .5)">
                <circle cx="7.361" cy="7.361" r="7.361" fill="#DADEE3" />
                <g transform="translate(3.056 4.167)">
                    <ellipse cx="4.432" cy="2.27" fill="#FFF" rx="2.216" ry="2.249" />
                    <path
                        fill="#38CCFF"
                        d="M4.432 5.745C2.322 5.745.557 7.241.11 9.244c-.012.051 1.834 1.312 4.322 1.312S8.726 9.12 8.717 9.088c-.502-1.924-2.23-3.343-4.285-3.343z"
                    />
                </g>
            </g>
        </svg>
    );
}

UserIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

UserIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
