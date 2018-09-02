/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpand, faCompress } from '@fortawesome/free-solid-svg-icons';
import Button from '../../../src/components/Button';
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
                <Button>
                    <FontAwesomeIcon icon={faExpand} />
                </Button>
            </a>
        );
    }

    if (href !== undefined && title === 'Show all components') {
        return (
            <a className="slds-react-toolbar-button" href={resolveHref()} title={title} aria-label={title}>
                <Button>
                    <FontAwesomeIcon icon={faCompress} />
                </Button>
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
    children: null,
};
