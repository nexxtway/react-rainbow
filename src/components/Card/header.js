import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './headerTitle';
import HeaderIcon from './headerIcon';
import Actions from './actions';
import './styles.css';

export default function Header({ icon, title, actions }) {
    if (icon || title || actions) {
        return (
            <div className="rainbow-card__header-container">
                <header className="rainbow-card__header">
                    <HeaderIcon icon={icon} />
                    <HeaderTitle title={title} />
                </header>
                <Actions content={actions} />
            </div>
        );
    }
    return null;
}

Header.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    icon: PropTypes.node,
    actions: PropTypes.node,
};

Header.defaultProps = {
    icon: null,
    actions: null,
};
