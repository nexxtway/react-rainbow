import React from 'react';
import PropTypes from 'prop-types';

const ArrowRight = props => {
    const { className, style } = props;
    return (
        <svg className={className} style={style} width="16px" height="14px" viewBox="0 0 16 14">
            <g id="pages" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                    id="react-rainbow-custom-work-form"
                    transform="translate(-398.000000, -638.000000)"
                    fill="currentColor"
                    fillRule="nonzero"
                >
                    <path
                        d="M400.033667,644.000163 L405.126333,639.149496 C405.393,638.895496 405.403333,638.473496 405.149333,638.206829 C404.895667,637.940496 404.473667,637.929829 404.206667,638.183829 L398.390667,643.723829 C398.139,643.975829 398,644.310496 398,644.666829 C398,645.022829 398.139,645.357829 398.402333,645.620829 L404.207,651.149496 C404.336,651.272496 404.501333,651.333496 404.666667,651.333496 C404.842667,651.333496 405.018667,651.264163 405.149667,651.126496 C405.403667,650.859829 405.393333,650.438163 405.126667,650.184163 L400.012667,645.333496 L413.333333,645.333496 C413.701333,645.333496 414,645.034829 414,644.666829 C414,644.298829 413.701333,644.000163 413.333333,644.000163 L400.033667,644.000163 Z"
                        id="back"
                        transform="translate(406.000000, 644.666748) scale(-1, 1) translate(-406.000000, -644.666748) "
                    />
                </g>
            </g>
        </svg>
    );
};

ArrowRight.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

ArrowRight.defaultProps = {
    className: undefined,
    style: undefined,
};

export default ArrowRight;
