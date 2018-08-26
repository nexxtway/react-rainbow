import React from 'react';
import PropTypes from 'prop-types';
import ButtonIcon from '../../../src/components/ButtonIcon';
import './styles.css';

export default function ToolbarButton(props) {
    const {
    onClick,
    href,
    title,
    children,
    } = props;

    function resolveHref() {
        const urlArray = window.location.href.split('/');
        const componentName = urlArray[urlArray.length - 2];
        return `/#/${componentName}`;
    }

    if (href !== undefined && title === 'Open isolated') {
        return (
            <a className="slds-react-toolbar-button" href={href} title={title} aria-label={title}>
                <ButtonIcon iconName="utility:expand" />
            </a>
        );
    }

    if (href !== undefined && title === 'Show all components') {
        return (
            <a className="slds-react-toolbar-button" href={resolveHref()} title={title} aria-label={title}>
                <ButtonIcon iconName="utility:contract" />
            </a>
        );
    }

    return (
        <button type="button" onClick={onClick} title={title} aria-label={title}>
            {children}
        </button>
    );
}

ToolbarButton.propTypes = {
    href: PropTypes.string,
    onClick: PropTypes.func,
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
};

ToolbarButton.defaultProps = {
    href: undefined,
    onClick: () => {},
};
