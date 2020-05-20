import React from 'react';
import PropTypes from 'prop-types';
import { SearchValueIconColor, IconPinColor } from '../styled/icons';

const SearchValueIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            width="28"
            height="28"
            viewBox="0 0 28 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
        >
            <SearchValueIconColor>
                <circle cx="14" cy="14" r="14" />
                <IconPinColor>
                    <g fill="#FFF" fillRule="evenodd" transform="translate(7 7)">
                        <path d="M7.396 7.585l.6-.601a.212.212 0 0 1 .301 0l1.38 1.38a.212.212 0 0 1 0 .301l-.6.6a.212.212 0 0 1-.3 0l-1.381-1.38a.212.212 0 0 1 0-.3z" />
                        <path d="M4.873 0A4.466 4.466 0 0 0 .412 4.46c0 2.46 2 4.462 4.46 4.462S9.334 6.92 9.334 4.46C9.333 2 7.333 0 4.873 0zm0 .797A3.668 3.668 0 0 1 8.537 4.46a3.668 3.668 0 0 1-3.664 3.664 3.668 3.668 0 0 1-3.665-3.664A3.668 3.668 0 0 1 4.873.797zM8.333 8.973l1.052-1.051a.212.212 0 0 1 .3 0l4.036 4.036c.282.281.36.723.19 1.083a.957.957 0 0 1-1.542.268L8.333 9.273a.212.212 0 0 1 0-.3z" />
                    </g>
                </IconPinColor>
            </SearchValueIconColor>
        </svg>
    );
};

SearchValueIcon.propTypes = {
    className: PropTypes.string,
};

SearchValueIcon.defaultProps = {
    className: undefined,
};

export default SearchValueIcon;
