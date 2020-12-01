import React from 'react';
import PropTypes from 'prop-types';

const Checkmark = props => {
    const { className, style } = props;
    return (
        <svg
            fill="currentColor"
            className={className}
            style={style}
            width="1rem"
            height="1rem"
            viewBox="0 0 20 20"
        >
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Path-DesignGuidelines"
                    transform="translate(-185.000000, -899.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-11" transform="translate(73.000000, 889.000000)">
                        <g
                            id="Group-16"
                            transform="translate(122.000000, 20.000000) rotate(-270.000000) translate(-122.000000, -20.000000) translate(112.000000, 10.000000)"
                        >
                            <path
                                d="M9.98052632,0 C15.4926188,0 19.9610526,4.46843384 19.9610526,9.98052632 C19.9610526,15.4926188 15.4926188,19.9610526 9.98052632,19.9610526 C4.46843384,19.9610526 0,15.4926188 0,9.98052632 C0,4.46843384 4.46843384,0 9.98052632,0 Z M7.60678972,4.07946225 C7.23869632,3.70684592 6.64399109,3.70684592 6.27607005,4.07946225 C5.90797665,4.45225309 5.90797665,5.05454767 6.27607005,5.42716395 L6.27607005,5.42716395 L11.7280227,10.9488666 L9.33472631,13.3727052 C8.96663291,13.745496 8.96663291,14.3477906 9.33472631,14.7204069 C9.70264736,15.0931977 10.2975249,15.0931977 10.665446,14.7204069 L10.665446,14.7204069 L13.7241022,11.6227174 C13.907632,11.4368456 14,11.1928561 14,10.9488666 C14,10.704877 13.907632,10.4608875 13.7241022,10.2750157 L13.7241022,10.2750157 Z"
                                id="Combined-Shape"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Checkmark.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Checkmark.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Checkmark;
