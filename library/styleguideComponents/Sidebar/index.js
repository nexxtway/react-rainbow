import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Provider } from './context';
import './styles.css';

export default function Sidebar(props) {
    const {
        ariaLabel,
        style,
        selectedItem,
        onSelect,
        className,
        children,
    } = props;
    const context = {
        selectedItem,
        onSelect,
    };

    const getClassNames = () => classnames('rainbow-sidebar', className);

    return (
        <nav
            className={getClassNames()}
            style={style}
            aria-label={ariaLabel}>

            <Provider value={context}>
                <ul>
                    {children}
                </ul>
            </Provider>
        </nav>
    );
}

Sidebar.propTypes = {
    selectedItem: PropTypes.node,
    onSelect: PropTypes.func,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

Sidebar.defaultProps = {
    selectedItem: null,
    onSelect: () => {},
    ariaLabel: undefined,
    className: undefined,
    style: undefined,
    children: null,
};
