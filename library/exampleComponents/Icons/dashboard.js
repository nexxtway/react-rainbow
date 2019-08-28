import React from 'react';
import PropTypes from 'prop-types';

const Dashboard = props => {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="18px"
            height="18px"
            viewBox="0 0 18 18"
            version="1.1"
        >
            <g fill="none" fillRule="nonzero">
                <path
                    fill="#01B6F5"
                    d="M6.937 0H1.312C.59 0 0 .589 0 1.312v3.375C0 5.411.589 6 1.312 6h5.625c.724 0 1.313-.589 1.313-1.313V1.312C8.25.59 7.661 0 6.937 0z"
                />
                <path
                    fill="#02AEEA"
                    d="M6.937 7.5H1.312C.59 7.5 0 8.089 0 8.813v7.875C0 17.41.589 18 1.312 18h5.625c.724 0 1.313-.589 1.313-1.312V8.813c0-.724-.589-1.313-1.313-1.313z"
                />
                <path
                    fill="#01B6F5"
                    d="M16.688 12h-5.625c-.724 0-1.313.589-1.313 1.313v3.375c0 .723.589 1.312 1.313 1.312h5.625C17.41 18 18 17.411 18 16.688v-3.375c0-.724-.589-1.313-1.312-1.313z"
                />
                <path
                    fill="#02AEEA"
                    d="M16.688 0h-5.625C10.339 0 9.75.589 9.75 1.312v7.875c0 .724.589 1.313 1.313 1.313h5.625C17.41 10.5 18 9.911 18 9.187V1.312C18 .59 17.411 0 16.688 0z"
                />
            </g>
        </svg>
    );
};

Dashboard.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Dashboard.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Dashboard;
