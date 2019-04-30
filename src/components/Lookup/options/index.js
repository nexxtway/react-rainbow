import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import SearchIcon from '../icons/searchIcon';
import { uniqueId } from '../../../libs/utils';
import './styles.css';

function MenuItems({ items, onClick }) {
    return items.map((item) => {
        const {
            label,
            description,
            icon,
            type,
            options,
        } = item;

        if (type === 'section') {
            return (
                <Fragment key={uniqueId('lookup-item')}>
                    <li className="rainbow-lookup_menu-item_header" role="separator">
                        <span className="rainbow-lookup_menu-item_header-label">{label}</span>
                    </li>
                    <MenuItems items={options} onClick={onClick} />
                </Fragment>
            );
        }

        return (
            <MenuItem
                key={uniqueId('lookup-item')}
                label={label}
                description={description}
                icon={icon}
                onClick={onClick} />
        );
    });
}

export default function Options({ items, value, onSelectOption }) {
    const resultContainerStyles = {
        height: (40 * items.length) + 17,
        maxHeight: 216,
    };

    if (items.length === 0) {
        return (
            <div className="rainbow-lookup_options-container rainbow-lookup_options-container--empty">
                <SearchIcon className="rainbow-lookup_options-empty-message_search-icon" />
                <span className="rainbow-lookup_options-empty-message">
                    Our robots did not find any match for
                    <span className="rainbow-lookup_options-empty-message_match-value">
                        {` "${value}"`}
                    </span>
                </span>
            </div>
        );
    }

    return (
        <ul className="rainbow-lookup_options-container" style={resultContainerStyles}>
            <MenuItems items={items} onClick={onSelectOption} />
        </ul>
    );
}

Options.propTypes = {
    items: PropTypes.array,
    value: PropTypes.string,
    onSelectOption: PropTypes.func,
};

Options.defaultProps = {
    items: [],
    value: undefined,
    onSelectOption: () => {},
};
