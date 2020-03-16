import React from 'react';
import PropTypes from 'prop-types';

export default function MasterCardIcon(props) {
    const { className, style } = props;
    return (
        <svg
            className={className}
            style={style}
            width="56px"
            height="39px"
            viewBox="0 0 56 39"
            version="1.1"
        >
            <title>mastercard</title>
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="mastercard" fillRule="nonzero">
                    <g fill="#243947" id="MASTER-CARD">
                        <g>
                            <path
                                d="M56,35.5256354 C56,37.3539479 54.5179688,38.8360885 52.6897656,38.8360885 L3.31023438,38.8360885 C1.48203125,38.8360885 0,37.3537292 0,35.5256354 L0,3.52633854 C0,1.69813542 1.48203125,0.215994792 3.31023438,0.215994792 L52.6896562,0.215994792 C54.5179688,0.215994792 56,1.69813542 56,3.52633854 L56,35.5256354 L56,35.5256354 Z"
                                id="Shape"
                            />
                        </g>
                    </g>
                    <circle
                        id="Oval"
                        fill="#F21419"
                        cx="20.9963636"
                        cy="19.9963636"
                        r="11.9963636"
                    />
                    <circle
                        id="Oval"
                        fill="#F9A000"
                        cx="35.9009091"
                        cy="19.9963636"
                        r="11.9963636"
                    />
                    <path
                        d="M23.9047273,19.9961818 C23.9047273,23.8052727 25.6803636,27.1993636 28.4487273,29.3968182 C31.217,27.1992727 32.9927273,23.8052727 32.9927273,19.9961818 C32.9927273,16.1870909 31.2170909,12.793 28.4487273,10.5955455 C25.6804545,12.7931818 23.9047273,16.1871818 23.9047273,19.9961818 Z"
                        id="Path"
                        fill="#FF6300"
                    />
                </g>
            </g>
        </svg>
    );
}

MasterCardIcon.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

MasterCardIcon.defaultProps = {
    className: undefined,
    style: undefined,
};
