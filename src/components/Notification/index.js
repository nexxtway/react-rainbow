import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CloseIcon from './closeIcon';
import ButtonIcon from './../ButtonIcon';
import RenderIf from '../RenderIf';
import Icon from './icons/index';
import './styles.css';

/**
* Notifications serve as a confirmation mechanism & feedback that comes into the page at the top.
*/
export default function Notification(props) {
    const {
        className,
        style,
        icon,
        title,
        description,
        onRequestClose,
    } = props;

    function getClassName() {
        return classnames('rainbow-notification', className);
    }

    return (
        <div className={getClassName()} style={style}>
            <a className="rainbow-notification_anchor">
                <RenderIf isTrue={!!icon}>
                    <Icon icon={icon} />
                </RenderIf>
                <span>
                    <RenderIf isTrue={!!title}>
                        <h1 className="rainbow-notification_title">{title}</h1>
                    </RenderIf>
                    <RenderIf isTrue={!!description}>
                        <p className="rainbow-notification_description">{description}</p>
                    </RenderIf>
                </span>
            </a>
            <ButtonIcon
                className="rainbow-notification_close"
                icon={<CloseIcon />}
                size="x-small"
                title="Close"
                onClick={onRequestClose} />
        </div>
    );
}

Notification.propTypes = {
    /** The icon to show if it is passed. It is displayed in the left of the component.
    * It must be one of this values info, success, warning, error,
    * or any svg icon. */
    icon: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.oneOf([
            'info',
            'success',
            'warning',
            'error',
        ]),
    ]),
    /** The title that appears in the notification. */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The description that appears in the notification. */
    description: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The action triggered when the close button is clicked. */
    onRequestClose: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Notification.defaultProps = {
    icon: null,
    title: null,
    description: null,
    onRequestClose: () => {},
    className: undefined,
    style: undefined,
};
