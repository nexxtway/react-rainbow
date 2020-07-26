import React from 'react';
import PropTypes from 'prop-types';

function SvgCocosIsland({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <circle fill="#6DA544" cx={16} cy={16} r={16} />
                <g fill="#FFDA44">
                    <path d="M24.561 22.956l.44.919.991-.23-.444.916.797.632-.992.224.002 1.018-.794-.637-.793.637.002-1.018-.992-.224.797-.632-.444-.916.991.23zM20.477 13.217l.44.918.99-.229-.443.916.797.632-.993.224.003 1.018-.794-.637-.794.637.003-1.018-.993-.224.797-.632-.444-.916.992.23zM24.561 7.652l.44.918.991-.229-.444.916.797.632-.992.224.002 1.017-.794-.636-.793.636.002-1.017-.992-.224.797-.632-.444-.916.991.23zM28.13 11.826l.438.918.992-.23-.444.917.797.632-.993.224.003 1.017-.794-.636-.794.636.003-1.017-.993-.224.798-.632-.444-.916.991.23zM25.578 16.696l.346 1.063h1.117l-.904.656.345 1.063-.904-.657-.904.657.345-1.063-.904-.656h1.118z" />
                    <path d="M17.74 20.522a4.522 4.522 0 112.15-8.5 5.565 5.565 0 100 7.956 4.5 4.5 0 01-2.15.544zM10.062 6.26a2.78 2.78 0 00-4.82 0h4.82zM10.07 6.277L7.653 8.696l-2.418-2.42a2.783 2.783 0 104.837 0z" />
                </g>
                <path d="M6.957 8v2.347a2.79 2.79 0 001.39 0V8h-1.39z" fill="#A2001D" />
            </g>
        </svg>
    );
}
SvgCocosIsland.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgCocosIsland.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgCocosIsland;
