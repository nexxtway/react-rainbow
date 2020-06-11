import React from 'react';
import PropTypes from 'prop-types';

function SvgSriLanka({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path fill="#FF9811" d="M0 2.783v26.434V16z" />
                <circle fill="#FFDA44" cx={16} cy={16} r={16} />
                <path
                    d="M12.522 2.783h-5.54a16.11 16.11 0 00-.721.523L4.87 16l1.39 12.694c.236.18.477.355.722.523h5.54V2.783z"
                    fill="#FF9811"
                />
                <path
                    d="M0 16c0 5.172 2.454 9.77 6.26 12.694V3.306C2.455 6.231 0 10.828 0 16z"
                    fill="#6DA544"
                />
                <path fill="#FFDA44" d="M25.74 9.754v.497l.118.003z" />
                <path
                    d="M30.725 20.174H27.71l-1.275 1.391v2.783h-2.783v-1.392h1.392v-2.782h-6.261v1.739H17.39v-3.314a2.081 2.081 0 01-.695-1.556V8c0-1.153.934-2.087 2.087-2.087v12.87h2.782l.955-.796a3.328 3.328 0 01-.26-1.291v-2.087h-2.086v-4.174h4.174c0-.696 1.043-1.391 1.043-1.391s1.044.695 1.044 1.39V14.609c.774.01 2.003-.01 3.332 0a4.22 4.22 0 01-.55-2.086c0-1.228.53-2.331 1.374-3.095a16.064 16.064 0 00-5.573-6.644h-10.41v26.434h10.41a16.036 16.036 0 006.257-8.443l-.55-.6z"
                    fill="#A2001D"
                />
            </g>
        </svg>
    );
}
SvgSriLanka.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgSriLanka.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgSriLanka;
