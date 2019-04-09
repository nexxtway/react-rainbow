import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseIcon from './closeIcon';
import ButtonIcon from './../ButtonIcon';
import RenderIf from '../RenderIf';
import './styles.css';

/**
* Chips are compact elements that represent an input, attribute, or action.
*  Allow users to enter information, make selections, filter content, or trigger actions.
*/
export default function Chip(props) {
    const {
        icon,
        label,
        onDelete,
        variant,
        className,
        style,
    } = props;

    function getVariantClassNames() {
        if (variant === 'base') {
            return null;
        }
        return `rainbow-chip--${variant}`;
    }

    function getLabelPaddingClassNames() {
        if (icon) {
            return 'rainbow-chip_label--with-icon';
        }
        return null;
    }

    function getContainerClassName() {
        return classnames('rainbow-chip', getVariantClassNames(), className);
    }

    function getLabelClassName() {
        return classnames('rainbow-chip_label', getLabelPaddingClassNames(), className);
    }

    return (
        <span className={getContainerClassName()} style={style}>
            <a className="rainbow-chip_anchor">
                <RenderIf isTrue={!!icon}>
                    <span className="rainbow-chip_icon">
                        {icon}
                    </span>
                </RenderIf>
                <span className={getLabelClassName()}>
                    {label}
                </span>
            </a>
            <RenderIf isTrue={!!onDelete}>
                <ButtonIcon
                    className="rainbow-chip_button-container"
                    icon={<CloseIcon />}
                    size="small"
                    title="Close"
                    onClick={onDelete}
                    assistiveText="Remove" />
            </RenderIf>
        </span>
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
        /** The variant changes the appearance of the badge. Accepted variants include base,
    * neutral, brand and outline-brand. This value defaults to default. */
    variant: PropTypes.oneOf([
        'base', 'neutral', 'outline-brand', 'brand',
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
    variant: 'base',
    onDelete: () => {},
    className: undefined,
    style: undefined,
};
