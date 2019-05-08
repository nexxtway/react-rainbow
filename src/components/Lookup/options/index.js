import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import SearchIcon from '../icons/searchIcon';
import { uniqueId } from '../../../libs/utils';
import './styles.css';

function MenuItems(props) {
    const { items, onClick, focusedItemIndex, onHover } = props;
    let optionIndex = 0;

    return items.map(item => {
        const { label, description, icon, type } = item;
        const isActive = optionIndex === focusedItemIndex;

        if (type === 'header') {
            return (
                <li
                    key={uniqueId('lookup-item')}
                    className="rainbow-lookup_menu-item_header"
                    role="separator"
                >
                    <span className="rainbow-lookup_menu-item_header-label">{label}</span>
                </li>
            );
        }

        const menuItem = (
            <MenuItem
                key={uniqueId('lookup-item')}
                label={label}
                description={description}
                icon={icon}
                isActive={isActive}
                index={optionIndex}
                onHover={onHover}
                onClick={onClick}
            />
        );
        optionIndex += 1;
        return menuItem;
    });
}

export default function Options(props) {
    const { items, value, onSelectOption, onHoverOption, focusedItemIndex } = props;

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

    const resultContainerStyles = {
        height: 48 * items.length + 17,
        maxHeight: 248,
    };

    return (
        <ul className="rainbow-lookup_options-container" style={resultContainerStyles}>
            <MenuItems
                items={items}
                focusedItemIndex={focusedItemIndex}
                onClick={onSelectOption}
                onHover={onHoverOption}
            />
        </ul>
    );
}

Options.propTypes = {
    items: PropTypes.array,
    value: PropTypes.string,
    onSelectOption: PropTypes.func,
    onHoverOption: PropTypes.func,
    focusedItemIndex: PropTypes.number,
};

Options.defaultProps = {
    items: [],
    value: undefined,
    onSelectOption: () => {},
    onHoverOption: () => {},
    focusedItemIndex: undefined,
};
