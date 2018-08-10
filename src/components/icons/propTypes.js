import PropTypes from 'prop-types';

export default {
    /** The class name of the svg element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The icon size. */
    size: PropTypes.oneOf([
        'xx-small', 'x-small', 'small', 'medium', 'large',
    ]),
    /** The icon color. */
    variant: PropTypes.oneOf([
        'default', 'warning', 'error', 'light',
    ]),
};
