import React from 'react';
import PropTypes from 'prop-types';

function SvgUzbekistan({ className, style }) {
    return (
        <svg width={32} height={32} viewBox="0 0 32 32" className={className} style={style}>
            <g fillRule="nonzero" fill="none">
                <path
                    d="M.754 11.109A15.953 15.953 0 000 15.969c0 1.695.265 3.327.754 4.86l15.215.694 15.215-.694c.489-1.533.754-3.165.754-4.86 0-1.695-.265-3.328-.754-4.86l-15.215-.695-15.215.695z"
                    fill="#F0F0F0"
                />
                <g fill="#D80027">
                    <path d="M31.183 11.109l-15.214-.694-15.215.694c-.145.454-.27.917-.374 1.388h31.178c-.105-.47-.23-.934-.375-1.388zM.38 19.44c.104.471.23.934.374 1.389h.002l15.213.694 15.214-.694c.145-.455.27-.918.375-1.389H.38z" />
                </g>
                <path
                    d="M15.969 31.938c7.124 0 13.158-4.667 15.214-11.11H.754c2.056 6.443 8.09 11.11 15.215 11.11z"
                    fill="#6DA544"
                />
                <path
                    d="M15.969 0C8.844 0 2.81 4.666.754 11.11h30.43C29.126 4.666 23.093 0 15.968 0z"
                    fill="#338AF3"
                />
                <g fill="#F0F0F0">
                    <path d="M7.297 6.596a3.125 3.125 0 012.455-3.052 3.124 3.124 0 100 6.103 3.125 3.125 0 01-2.455-3.051zM11.599 8.016l.211.65h.685l-.554.403.212.651-.554-.402-.554.402.212-.65-.554-.403h.684zM13.783 8.016l.212.65h.684l-.553.403.211.651-.554-.402-.553.402.211-.65-.554-.403h.685zM15.968 8.016l.211.65h.685l-.554.403.212.651-.554-.402-.554.402.212-.65-.554-.403h.684zM18.152 8.016l.212.65h.684l-.553.403.211.651-.554-.402-.553.402.211-.65-.554-.403h.685zM20.337 8.016l.211.65h.685l-.554.403.212.651-.554-.402-.554.402.212-.65-.554-.403h.684zM13.783 5.744l.212.65h.684l-.553.403.211.65-.554-.401-.553.402.211-.651-.554-.402h.685zM15.968 5.744l.211.65h.685l-.554.403.212.65-.554-.401-.554.402.212-.651-.554-.402h.684zM18.152 5.744l.212.65h.684l-.553.403.211.65-.554-.401-.553.402.211-.651-.554-.402h.685zM20.337 5.744l.211.65h.685l-.554.403.212.65-.554-.401-.554.402.212-.651-.554-.402h.684zM15.968 3.471l.211.651h.685l-.554.403.212.65-.554-.402-.554.403.212-.651-.554-.403h.684zM18.152 3.471l.212.651h.684l-.553.403.211.65-.554-.402-.553.403.211-.651-.554-.403h.685zM20.337 3.471l.211.651h.685l-.554.403.212.65-.554-.402-.554.403.212-.651-.554-.403h.684z" />
                </g>
            </g>
        </svg>
    );
}
SvgUzbekistan.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
};

SvgUzbekistan.defaultProps = {
    className: undefined,
    style: undefined,
};

export default SvgUzbekistan;
