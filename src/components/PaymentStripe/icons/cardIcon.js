import React from 'react';
import PropTypes from 'prop-types';

export default function CardIcon(props) {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="18" height="12" viewBox="0 0 18 12">
            <g fill="none">
                <path
                    fill="#D5D6DB"
                    d="M17.5 1.425v9.4c0 .627-.521 1.133-1.166 1.133H1.166C.521 11.958 0 11.452 0 10.825v-9.4C0 .798.521.292 1.166.292h15.168c.645 0 1.166.506 1.166 1.133z"
                    transform="translate(.25 -.25)"
                />
                <path
                    fill="#8898AA"
                    fillOpacity=".5"
                    d="M.729 6.854L8.021 6.854 8.021 7.583.729 7.583zM.729 9.042H16.771V10.042H.729zM0 2.479H17.5V3.9370000000000003H0z"
                    transform="translate(.25 -.25)"
                />
            </g>
        </svg>
    );
}

CardIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

CardIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
