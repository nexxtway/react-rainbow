import React from 'react';
import PropTypes from 'prop-types';

const SearchIcon = props => {
    const { className } = props;
    return (
        <svg
            className={className}
            fill="currentColor"
            width="20px"
            height="20px"
            viewBox="0 0 20 20"
        >
            <g id="modules" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="rainbow-GlobalSearch-typing"
                    transform="translate(-169.000000, -79.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-10" transform="translate(146.000000, 0.000000)">
                        <path
                            d="M42.7623834,97.6633161 L37.8838342,92.7848705 C39.0964767,91.3266321 39.8270466,89.4540933 39.8270466,87.4137824 C39.8270466,82.7744041 36.0527461,79 31.4135751,79 C26.7743005,79 23,82.7744041 23,87.4137824 C23,92.0528497 26.7743005,95.826943 31.4135751,95.826943 C33.4537824,95.826943 35.3264249,95.0964767 36.7846632,93.8838342 L41.6633161,98.7623834 C41.8150259,98.9141969 42.0139896,98.9900518 42.2128497,98.9900518 C42.4117098,98.9900518 42.6106736,98.9141969 42.762487,98.7623834 C43.0660104,98.4588601 43.0660104,97.9668394 42.7623834,97.6633161 Z M24.5544041,87.4137824 C24.5544041,83.6315026 27.631399,80.5544041 31.4135751,80.5544041 C35.1956477,80.5544041 38.2725389,83.6315026 38.2725389,87.4137824 C38.2725389,91.1957513 35.1956477,94.2725389 31.4135751,94.2725389 C27.631399,94.2725389 24.5544041,91.1957513 24.5544041,87.4137824 Z"
                            id="Shape"
                        />
                    </g>
                </g>
            </g>
        </svg>
    );
};

SearchIcon.propTypes = {
    className: PropTypes.string,
};

SearchIcon.defaultProps = {
    className: undefined,
};

export default SearchIcon;
