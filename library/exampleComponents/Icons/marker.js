import React from 'react';
import PropTypes from 'prop-types';

const Marker = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="10px"
            height="12px"
            viewBox="0 0 10 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Marker</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-WeeklyCalendar-Marker"
                    transform="translate(-1178.000000, -234.000000)"
                    fill="#EE3840"
                    fillRule="nonzero"
                >
                    <g id="Group-29" transform="translate(1151.000000, 0.000000)">
                        <g id="Group-26">
                            <g id="Group-25">
                                <g id="Group-32" transform="translate(21.000000, 226.000000)">
                                    <g id="Group-34">
                                        <path
                                            d="M10.7834981,20 C11.1936928,20 11.5662871,19.7909859 11.7802777,19.4408782 C13.2796864,16.9877276 15.0669962,13.754645 15.0669962,12.2834674 C15.0669962,9.92155317 13.145443,8 10.7834981,8 C8.42155317,8 6.5,9.92155317 6.5,12.2834674 C6.5,13.754645 8.28734058,16.9877276 9.78671851,19.4408782 C10.0007091,19.7909859 10.3733341,20 10.7834981,20 Z M9.06177394,11.9893609 C9.06177394,11.0400426 9.8341491,10.2676982 10.7834981,10.2676982 C11.7328471,10.2676982 12.5052223,11.0400426 12.5052223,11.9893609 C12.5052223,12.9387099 11.7328471,13.7110543 10.7834981,13.7110543 C9.8341491,13.7110543 9.06177394,12.9387406 9.06177394,11.9893609 Z"
                                            id="marker"
                                        />
                                    </g>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Marker.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Marker.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Marker;
