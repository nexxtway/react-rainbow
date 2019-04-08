import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseIcon from './closeIcon';
import ButtonIcon from './../ButtonIcon';
import RenderIf from '../RenderIf';
import './styles.css';

/**
* Chips are compact elements that represent an input, attribute, or action.
*/
export default function Chip(props) {
    const {
        className,
        style,
        icon,
        label,
        onDelete,
    } = props;

    function getClassName() {
        return classnames('rainbow-chip', className);
    }

    return (
        <div className={getClassName()} style={style}>
            <a className="rainbow-chip_anchor">
                <RenderIf isTrue={!!icon}>
                    {icon}
                </RenderIf>
                <span className="rainbow-chip_label">
                    {label}
                </span>
            </a>
            <RenderIf isTrue={!onDelete}>
                <ButtonIcon
                    className="rainbow-chip_icon-container"
                    icon={<CloseIcon />}
                    size="small"
                    title="Close"
                    onClick={onDelete} />
            </RenderIf>
        </div>
    );
}

Chip.propTypes = {
    /** The icon to show if it is passed. It is displayed in the left of the component.
    * It must be one of this values info, success, warning, error,
    * or any svg icon. */
    icon: PropTypes.node,
    /** The title that appears in the notification. */
    label: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The action triggered when the close button is clicked. */
    onDelete: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Chip.defaultProps = {
    icon: null,
    label: null,
    onDelete: () => {},
    className: undefined,
    style: undefined,
};
