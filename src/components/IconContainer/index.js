/* eslint-disable react/prop-types */
import React from 'react';
import classnames from 'classnames';

function AssistiveText({ text }) {
    if (text) {
        return <span className="slds-assistive-text">{text}</span>;
    }
    return null;
}

export default function iconContainer(WrappedComponent) {
    return (props) => {
        const {
            className,
            size,
            variant,
            title,
            assistiveText,
            containerClassName,
            ...rest
        } = props;

        const getContainerClassNames = () => classnames('slds-icon_container', containerClassName);

        const getIconSizeClassName = () => {
            if (size && size !== 'medium') {
                return `slds-icon_${size}`;
            }
            return 'slds-icon';
        };

        const getIconColorClassName = () => {
            if (variant) {
                return `slds-icon-text-${variant}`;
            }
            return 'slds-icon-text-default';
        };

        const getIconClassNames = () => classnames(
            getIconSizeClassName(),
            getIconColorClassName(),
            className,
        );

        return (
            <span className={getContainerClassNames()} title={title}>
                <WrappedComponent className={getIconClassNames()} {...rest} />
                <AssistiveText text={assistiveText} />
            </span>
        );
    };
}
