/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExpandArrowsAlt, faCompress } from '@fortawesome/free-solid-svg-icons';
import './styles.css';

function resolveHref() {
    const urlArray = window.location.href.split('/');
    const componentName = urlArray[urlArray.length - 2];
    return `/#/${componentName}`;
}

function reafreshAds() {
    // eslint-disable-next-line no-undef
    if (_carbonads) _carbonads.refresh();
}

export default function ToolbarButton(props) {
    const { onClick, href, title, children } = props;

    if (href !== undefined && title === 'Open isolated') {
        return (
            <a
                className="rainbow-link react-rainbow-toolbar-button"
                href={href}
                title={title}
                aria-label={title}
                onClick={reafreshAds}
            >
                <FontAwesomeIcon icon={faExpandArrowsAlt} className="rainbow-color_gray-4" />
            </a>
        );
    }

    if (href !== undefined && title === 'Show all components') {
        return (
            <a
                className="rainbow-link react-rainbow-toolbar-button"
                href={resolveHref()}
                title={title}
                aria-label={title}
                onClick={reafreshAds}
            >
                <FontAwesomeIcon icon={faCompress} className="rainbow-color_gray-4" />
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
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
};

ToolbarButton.defaultProps = {
    href: undefined,
    onClick: () => {},
    children: null,
};
