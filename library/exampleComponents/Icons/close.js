import React from 'react';
import PropTypes from 'prop-types';

const Close = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="12px" height="12px" viewBox="0 0 12 12">
            <g id="app-import-export" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="import-export-/-export-2-new-template-4"
                    transform="translate(-1399.000000, -26.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <g id="Group-6" transform="translate(1103.000000, 13.000000)">
                        <g id="close" transform="translate(296.000000, 13.000000)">
                            <path
                                d="M7.057,5.9965 L11.773,1.2805 C12.066,0.98775 12.066,0.51275 11.773,0.22 C11.48,-0.073 11.0055,-0.073 10.7125,0.22 L5.9965,4.936 L1.28025,0.22 C0.98725,-0.073 0.51275,-0.073 0.21975,0.22 C-0.07325,0.51275 -0.07325,0.98775 0.21975,1.2805 L4.936,5.9965 L0.21975,10.7125 C-0.07325,11.00525 -0.07325,11.48025 0.21975,11.773 C0.36625,11.91925 0.55825,11.9925 0.75,11.9925 C0.94175,11.9925 1.13375,11.91925 1.28025,11.77275 L5.9965,7.05675 L10.7125,11.77275 C10.859,11.91925 11.051,11.9925 11.24275,11.9925 C11.4345,11.9925 11.6265,11.91925 11.773,11.77275 C12.066,11.48 12.066,11.005 11.773,10.71225 L7.057,5.9965 Z"
                                id="Shape"
                            />
                        </g>
                    </g>
                </g>
            </g>
        </svg>
    );
};

Close.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

Close.defaultProps = {
    className: undefined,
    style: undefined,
};

export default Close;
