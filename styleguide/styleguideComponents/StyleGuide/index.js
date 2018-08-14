/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import Markdown from 'react-styleguidist/lib/rsg-components/Markdown';
import Ribbon from 'react-styleguidist/lib/rsg-components/Ribbon';
import Logo from './../Logo';
import './styles.css';

export function StyleGuide(props) {
    const {
        children,
        homepageUrl,
        title,
        toc,
        version,
    } = props;

    return (
        <div className="slds-grid slds-wrap slds-react-styleguide-container">
            <aside className="slds-size_1-of-1 slds-medium-size_1-of-4 slds-large-size_1-of-6 slds-order--2 slds-medium-order--1 react-slds-sidebar">
                <Logo title={title} version={version} />
                {toc}
            </aside>
            <main className="slds-size_1-of-1 slds-medium-size_3-of-4 slds-large-size_5-of-6 slds-order--1 slds-medium-order--2 slds-p-horizontal_xx-large slds-border_left react-slds-main-content">
                {children}
                <footer>
                    <Markdown text={`Generated with [React Styleguidist](${homepageUrl})`} />
                </footer>
            </main>
            <Ribbon />
        </div>
    );
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    homepageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    toc: PropTypes.object.isRequired,
    version: PropTypes.string,
};

StyleGuide.defaultProps = {
    version: '',
};

export default StyleGuide;
