import React from 'react';
import PropTypes from 'prop-types';

const Comments = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="12px"
            height="9px"
            viewBox="0 0 12 9"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
        >
            <title>Comments</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-WeeklyCalendar-Comments"
                    transform="translate(-1177.000000, -298.000000)"
                    fill="#9398A5"
                    fillRule="nonzero"
                >
                    <g id="Group-29" transform="translate(1151.000000, 0.000000)">
                        <g id="Group-26">
                            <g id="Group-25">
                                <g id="Group-30" transform="translate(21.000000, 290.000000)">
                                    <path
                                        d="M17,15.2 L17,16.4 L15.8,16.4 L15.8,15.2 L17,15.2 Z M14.6,15.2 L14.6,16.4 L13.4,16.4 L13.4,15.2 L14.6,15.2 Z M12.2,15.2 L12.2,16.4 L5.6,16.4 C5.26865232,16.4 5,16.1313477 5,15.8 C5,15.4686523 5.26865232,15.2 5.6,15.2 L12.2,15.2 Z M9.4,12.8 C9.73134768,12.8 10,13.0686523 10,13.4 C10,13.7313477 9.73134768,14 9.4,14 L5.6,14 C5.26865232,14 5,13.7313477 5,13.4 C5,13.0686523 5.26865232,12.8 5.6,12.8 L9.4,12.8 Z M16.4,10.4 C16.7313477,10.4 17,10.6686523 17,11 C17,11.3313477 16.7313477,11.6 16.4,11.6 L5.6,11.6 C5.26865232,11.6 5,11.3313477 5,11 C5,10.6686523 5.26865232,10.4 5.6,10.4 L16.4,10.4 Z M12.4,8 C12.7313477,8 13,8.26865232 13,8.6 C13,8.93134767 12.7313477,9.2 12.4,9.2 L5.6,9.2 C5.26865232,9.2 5,8.93134768 5,8.6 C5,8.26865233 5.26865232,8 5.6,8 L12.4,8 Z"
                                        id="comments"
                                    />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Comments.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Comments.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Comments;
