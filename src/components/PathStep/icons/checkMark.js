import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '../../../libs/hooks';

const Checkmark = props => {
    const { className, style } = props;
    const {
        rainbow: { palette },
    } = useTheme();

    const color = useMemo(
        () => ({
            background: palette.brand.main,
            foreground: palette.getContrastText(palette.brand.main),
        }),
        [palette],
    );

    return (
        <svg className={className} style={style} width="1rem" height="1rem" viewBox="0 0 20 20">
            <g id="components">
                <circle fill={color.background} cx="10" cy="10" r="10" />
                <polyline
                    transform="scale(0.6) translate(4, 5.2)"
                    stroke={color.foreground}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="20 6 9 17 4 12"
                />
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
