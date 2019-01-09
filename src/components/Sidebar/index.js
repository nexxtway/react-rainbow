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
        activeColor,
        id,
    } = props;

    const context = {
        selectedItem,
        onSelect,
        activeColor,
    };

    const getClassNames = () => classnames('rainbow-sidebar', className);

    return (
        <nav
            id={id}
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
    id: PropTypes.string,
    activeColor: PropTypes.string,
    selectedItem: PropTypes.node,
    onSelect: PropTypes.func,
    ariaLabel: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
    children: PropTypes.node,
};

Sidebar.defaultProps = {
    activeColor: '#01b6f5',
    selectedItem: null,
    onSelect: () => {},
    compact: false,
    shaded: false,
    ariaLabel: undefined,
    className: undefined,
    style: undefined,
    children: null,
    id: undefined,
};
