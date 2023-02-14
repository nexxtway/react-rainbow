import React from 'react';
import PropTypes from 'prop-types';

export default function MergeFiles(props) {
    const { className, style } = props;
    return (
        <svg
            width="24"
            height="21"
            viewBox="0 0 24 21"
            fill="none"
            className={className}
            style={style}
        >
            <path
                d="M7.71729 1.55469H4.02531C3.74555 1.55469 3.47724 1.66582 3.27942 1.86365C3.08159 2.06147 2.97046 2.32978 2.97046 2.60954V11.0484C2.97046 11.3281 3.08159 11.5964 3.27942 11.7943C3.47724 11.9921 3.74555 12.1032 4.02531 12.1032H10.3544C10.6342 12.1032 10.9025 11.9921 11.1003 11.7943C11.2981 11.5964 11.4093 11.3281 11.4093 11.0484V5.24667L7.71729 1.55469Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M7.71729 1.55469V5.24667H11.4093"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.3374 8.89648H13.6454C13.3657 8.89648 13.0974 9.00762 12.8995 9.20544C12.7017 9.40327 12.5906 9.67157 12.5906 9.95134V18.3902C12.5906 18.6699 12.7017 18.9382 12.8995 19.136C13.0974 19.3339 13.3657 19.445 13.6454 19.445H19.9745C20.2543 19.445 20.5226 19.3339 20.7204 19.136C20.9183 18.9382 21.0294 18.6699 21.0294 18.3902V12.5885L17.3374 8.89648Z"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M17.3374 8.89648V12.5885H21.0294"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <g clipPath="url(#clip0_350_14601)">
                <path
                    d="M7.94946 16.9551L9.21529 18.2209L7.94946 19.4867"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M5.16467 15.4355V17.2077C5.16467 17.4763 5.27136 17.7338 5.46127 17.9238C5.65118 18.1137 5.90876 18.2204 6.17733 18.2204H9.21531"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
            <g clipPath="url(#clip1_350_14601)">
                <path
                    d="M16.8101 4.04336L15.5443 2.77754L16.8101 1.51172"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
                <path
                    d="M19.5949 5.56411V3.79196C19.5949 3.52338 19.4883 3.26581 19.2983 3.0759C19.1084 2.88599 18.8509 2.7793 18.5823 2.7793H15.5443"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </g>
        </svg>
    );
}

MergeFiles.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MergeFiles.defaultProps = {
    className: undefined,
    style: undefined,
};
