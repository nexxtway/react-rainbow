import React from 'react';
import PropTypes from 'prop-types';

const Hangouts = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="24px"
            height="28px"
            viewBox="0 0 24 28"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>video</title>
            <g id="Hangouts" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-WeeklyCalendar-Hangouts"
                    transform="translate(-1172.000000, -101.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-29" transform="translate(1151.000000, 0.000000)">
                        <g id="Group-26">
                            <g id="Group-25">
                                <g id="Group-18" transform="translate(21.000000, 98.000000)">
                                    <g id="video" transform="translate(0.000000, 3.000000)">
                                        <path
                                            d="M12,0 L6.02054795,11.9589041 L12,23.9178082 L12,28.0547945 C18.9184658,25.9741918 23.9589041,19.5550685 23.9589041,11.9589041 C23.9589041,5.35419178 18.6047123,0 12,0 Z"
                                            id="Path"
                                            fill="#22858D"
                                        />
                                        <path
                                            d="M0.0410958904,11.9589041 C0.0410958904,18.5636164 5.39528767,23.9178082 12,23.9178082 L12,0 C5.39528767,0 0.0410958904,5.35419178 0.0410958904,11.9589041 Z"
                                            id="Path"
                                            fill="#22858D"
                                        />
                                        <polygon
                                            id="Path"
                                            fill="#FFFFFF"
                                            points="19.1507397 11.9589041 8.71238356 10.3150685 12 16.4793973 15.0411507 16.4793973 15.0411507 14.6433973 19.1507397 17.1091507"
                                        />
                                        <polygon
                                            id="Path"
                                            fill="#FFFFFF"
                                            points="15.0411507 9.27430137 15.0411507 7.43830137 12 7.43830137 8.71232877 11.9588493 19.1507397 11.9589041 19.1507397 6.80854795"
                                        />
                                        <polygon
                                            id="Path"
                                            fill="#FFFFFF"
                                            points="4.63019178 11.9589041 4.63019178 16.4793973 12 16.4793973 12 11.9589041 8.31506849 10.3150685"
                                        />
                                        <polygon
                                            id="Path"
                                            fill="#FFFFFF"
                                            points="4.63019178 7.43830137 12 7.43830137 12 11.9589041 4.63019178 11.9589041"
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

Hangouts.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Hangouts.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Hangouts;
