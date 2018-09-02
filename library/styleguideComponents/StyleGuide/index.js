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
        <div className="slds-react-styleguide-container rainbow-position-align_start">
            <aside className="react-slds-sidebar">
                <Logo title={title} version={version} />
                {toc}
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
