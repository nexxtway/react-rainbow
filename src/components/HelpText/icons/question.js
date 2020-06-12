import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

function QuestionIcon({ className, style }) {
    const background = useTheme().rainbow.palette.text.header;
    return (
        <svg width={22} height={22} viewBox="0 0 22 22" className={className} style={style}>
            <g fill="none">
                <path
                    fill={background}
                    d="M11 0C4.934 0 0 4.934 0 11s4.934 11 11 11 11-4.934 11-11S17.066 0 11 0z"
                />
                <path
                    fill="#FFF"
                    d="M11 15.583a.917.917 0 110 1.834.917.917 0 010-1.834zm0-11.916a4.13 4.13 0 014.125 4.125c0 1.238-1.074 3.059-2.674 3.796a.922.922 0 00-.534.834v.411a.917.917 0 11-1.834 0v-.411c0-1.07.63-2.05 1.6-2.5.934-.429 1.609-1.57 1.609-2.13A2.295 2.295 0 0011 5.5a2.295 2.295 0 00-2.292 2.292.916.916 0 11-1.833 0A4.13 4.13 0 0111 3.667z"
                />
            </g>
        </svg>
    );
}
QuestionIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

QuestionIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
export default QuestionIcon;
