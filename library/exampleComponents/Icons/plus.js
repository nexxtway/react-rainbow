import React from 'react';
import PropTypes from 'prop-types';

const Plus = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="10px"
            height="10px"
            viewBox="0 0 10 10"
            version="1.1"
        >
            <g id="app-import-export" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="import-export-/-export-1-select_date-1"
                    transform="translate(-396.000000, -220.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group" transform="translate(86.000000, 160.000000)">
                        <g id="Group-20" transform="translate(305.000000, 55.000000)">
                            <path
                                d="M13.9854938,9.20288515 L10.7971148,9.20288515 L10.7971148,6.01450615 C10.7971148,5.57450519 10.4408049,5.2173913 10,5.2173913 C9.55919509,5.2173913 9.20288515,5.57450519 9.20288515,6.01450615 L9.20288515,9.20288515 L6.01450615,9.20288515 C5.57370124,9.20288515 5.2173913,9.55999904 5.2173913,10 C5.2173913,10.440001 5.57370124,10.7971148 6.01450615,10.7971148 L9.20288515,10.7971148 L9.20288515,13.9854938 C9.20288515,14.4254948 9.55919509,14.7826087 10,14.7826087 C10.4408049,14.7826087 10.7971148,14.4254948 10.7971148,13.9854938 L10.7971148,10.7971148 L13.9854938,10.7971148 C14.4262988,10.7971148 14.7826087,10.440001 14.7826087,10 C14.7826087,9.55999904 14.4262988,9.20288515 13.9854938,9.20288515 Z"
                                id="Path"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Plus.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Plus.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Plus;
