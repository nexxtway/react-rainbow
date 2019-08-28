import React from 'react';
import PropTypes from 'prop-types';

const AddFilled = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
            version="1.1"
        >
            <g fill="none" fillRule="nonzero">
                <circle cx="9.981" cy="9.981" r="9.981" fill="#01B6F5" />
                <path
                    fill="#02AEEA"
                    d="M19.961 9.98c0 5.49-4.491 9.981-9.98 9.981-3.182 0-5.989-1.435-7.798-3.743 1.684 1.373 3.868 2.184 6.238 2.184 5.49 0 9.98-4.492 9.98-9.98 0-2.371-.81-4.555-2.183-6.239 2.308 1.81 3.743 4.616 3.743 7.798z"
                />
                <path
                    fill="#FFF"
                    d="M15 10c0 .52-.417.938-.937.938h-3.125v3.124c0 .521-.417.938-.938.938a.934.934 0 0 1-.937-.938v-3.124H5.938A.934.934 0 0 1 5 10c0-.52.417-.938.938-.938h3.124V5.938C9.062 5.417 9.48 5 10 5c.52 0 .938.417.938.938v3.124h3.124c.521 0 .938.417.938.938z"
                />
            </g>
        </svg>
    );
};

AddFilled.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

AddFilled.defaultProps = {
    className: undefined,
    style: undefined,
};

export default AddFilled;
