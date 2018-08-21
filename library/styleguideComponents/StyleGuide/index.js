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
            <aside className="react-slds-sidebar">
                <Logo title={title} version={version} />
                <article className="react-slds-sidebar-navigation">
                    {toc}
                </article>
            </aside>
            <main className="react-slds-main-content">
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
