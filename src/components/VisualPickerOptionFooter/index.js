import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import './styles.css';

/**
 * A VisualPickerOptionFooter.
 * @category Form
 */

export default function VisualPickerOptionFooter(props) {
    const { label, description, className, style } = props;

    const getContainerClassName = () =>
        classnames('rainbow-visual-picker-option-footer_container', className);

    return (
        <article className={getContainerClassName()} style={style}>
            <h1 className="rainbow-visual-picker-option-footer_label">{label}</h1>
            <h2 className="rainbow-visual-picker-option-footer_description">{description}</h2>
        </article>
    );
}

VisualPickerOptionFooter.propTypes = {
    /** The label displayed for the VisualPickerOptionFooter. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description displayed for the VisualPickerOptionFooter. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
};

VisualPickerOptionFooter.defaultProps = {
    label: '',
    description: '',
    className: undefined,
    style: undefined,
};
