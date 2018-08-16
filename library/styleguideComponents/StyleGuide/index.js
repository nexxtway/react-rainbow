import React from 'react';
import PropTypes from 'prop-types';
import Logo from './../Logo';
import './styles.css';

export default function StyleGuide(props) {
    const {
        children,
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
            <main className="slds-size_1-of-1 slds-medium-size_3-of-4 slds-large-size_5-of-6 slds-order--1 slds-medium-order--2 slds-p-top_large slds-p-horizontal_xx-large slds-border_left react-slds-main-content">
                {children}
            </main>
        </div>
    );
}

StyleGuide.propTypes = {
    children: PropTypes.node.isRequired,
    title: PropTypes.string.isRequired,
    toc: PropTypes.object.isRequired,
    version: PropTypes.string,
};

StyleGuide.defaultProps = {
    version: '',
};
