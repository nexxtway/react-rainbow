import React from 'react';
import PropTypes from 'prop-types';

function SvgRwanda({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M0 16c0 2.772.705 5.379 1.945 7.652L16 25.044l14.055-1.392A15.929 15.929 0 0032 16l-16-1.391L0 16z"
                    fill="#FFDA44"
                />
                <path
                    d="M30.055 8.348C27.34 3.374 22.065 0 16 0 9.935 0 4.66 3.374 1.945 8.348A15.929 15.929 0 000 16h32c0-2.772-.705-5.379-1.945-7.652z"
                    fill="#338AF3"
                />
                <path
                    d="M16 32c6.065 0 11.34-3.374 14.055-8.348H1.945C4.66 28.626 9.935 32 16 32z"
                    fill="#496E2D"
                />
                <path
                    fill="#FFDA44"
                    d="M18.087 9.364l1.954.919-1.04 1.893 2.121-.406.27 2.143 1.477-1.576 1.478 1.576.269-2.143 2.122.405-1.04-1.892 1.953-.92-1.954-.918 1.04-1.893-2.121.406-.269-2.143L22.87 6.39l-1.478-1.576-.269 2.143L19 6.552l1.041 1.893z"
                />
            </g>
        </svg>
    );
}
SvgRwanda.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgRwanda.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgRwanda;
