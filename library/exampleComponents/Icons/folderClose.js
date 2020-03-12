import React from 'react';
import PropTypes from 'prop-types';

const FolderClose = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="18px" height="14x" viewBox="0 0 20 16">
            <g id="components" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="Components-Tree"
                    transform="translate(-192.000000, -1496.000000)"
                    fillRule="nonzero"
                >
                    <g id="Group-30" transform="translate(127.000000, 1189.000000)">
                        <g
                            id="folderClosed"
                            transform="translate(75.000000, 315.000000) scale(-1, 1) translate(-75.000000, -315.000000) translate(65.000000, 307.000000)"
                        >
                            <path
                                d="M14.3289979,9.00445902 L0,9.00445902 L0,3.2077377 C0,2.30325683 0.715266525,1.57001093 1.5975693,1.57001093 L14.3289979,1.57001093 L14.3289979,9.00445902 L14.3289979,9.00445902 Z"
                                id="Path"
                                fill="#F6C358"
                            />
                            <rect
                                id="Rectangle"
                                fill="#EBF0F3"
                                x="2.41607676"
                                y="2.68834973"
                                width="15.6158635"
                                height="3.80528962"
                            />
                            <path
                                d="M18.3722388,15.9752131 L1.5975693,15.9752131 C0.715266525,15.9752131 0,15.2419672 0,14.3374426 L0,5.49674317 C0,4.5922623 0.715266525,3.85901639 1.5975693,3.85901639 L8.49219616,3.85901639 C9.09185501,3.85901639 9.64098081,3.51479781 9.91424307,2.96760656 L10.7959915,0.92904918 C11.0692537,0.381857923 11.6184222,0.0376393443 12.2180384,0.0376393443 L18.3721962,0.310601093 C19.2544989,0.310601093 19.9697655,0.770885246 19.9697655,1.67540984 L19.9697655,14.3375301 C19.9697655,15.2419672 19.2545842,15.9752131 18.3722388,15.9752131 Z"
                                id="Path"
                                fill="#FCD462"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

FolderClose.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

FolderClose.defaultProps = {
    className: undefined,
    style: undefined,
};

export default FolderClose;
