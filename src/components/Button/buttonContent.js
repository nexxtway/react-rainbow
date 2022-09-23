import PropTypes from 'prop-types';

export default function ButtonContent({ label, children }) {
    return children || label || null;
}

ButtonContent.propTypes = {
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    children: PropTypes.node,
};

ButtonContent.defaultProps = {
    label: undefined,
    children: undefined,
};
