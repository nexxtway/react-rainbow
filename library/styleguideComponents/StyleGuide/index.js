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
        <div className="react-rainbow-styleguide-container rainbow-position-align_start">
            <aside className="react-rainbow-sidebar">
                <Logo title={title} version={version} />
                {toc}
            </aside>
            <main className="react-rainbow-main-content">
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
