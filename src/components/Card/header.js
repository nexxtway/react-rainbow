import React from 'react';
import PropTypes from 'prop-types';
import HeaderTitle from './headerTitle';
import RenderIf from '../RenderIf';
import './styles.css';

export default function Header({ icon, title, actions }) {
    return (
        <RenderIf isTrue={!!(icon || title || actions)}>
            <div className="rainbow-card_header-container">
                <header className="rainbow-card_header">
                    <RenderIf isTrue={!!icon}>
                        <div className="rainbow-card_header-icon">
                            {icon}
                        </div>
                    </RenderIf>
                    <HeaderTitle title={title} />
                </header>
                <RenderIf isTrue={!!actions}>
                    <div>{actions}</div>
                </RenderIf>
            </div>
        </RenderIf>
    );
}

Header.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    icon: PropTypes.node,
    actions: PropTypes.node,
};

Header.defaultProps = {
    title: null,
    icon: null,
    actions: null,
};
