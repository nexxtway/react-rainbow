import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import SearchIcon from '../icons/searchIcon';
import './styles.css';

function MenuItems(props) {
    const {
        items,
        onClick,
        focusedItemIndex,
        onHover,
    } = props;

    return items.map((item, index) => {
        const {
            label,
            description,
            icon,
            type,
        } = item;
        const isActive = index === focusedItemIndex;
        const key = `lookup-item-${index}`;

        if (type === 'header') {
            return (
                <li
                    key={key}
                    className="rainbow-lookup_menu-item_header"
                    role="separator">

                    <span className="rainbow-lookup_menu-item_header-label">{label}</span>
                </li>
            );
        }

        return (
            <MenuItem
                key={key}
                label={label}
                description={description}
                icon={icon}
                isActive={isActive}
                index={index}
                onHover={onHover}
                onClick={onClick} />
        );
    });
}

export default class Options extends React.PureComponent {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    getRef() {
        return this.containerRef.current;
    }

    scrollTo(offset) {
        this.containerRef.current.scrollTo(0, offset);
    }

    render() {
        const {
            items,
            value,
            onSelectOption,
            onHoverOption,
            focusedItemIndex,
            itemHeight,
        } = this.props;

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
            height: (itemHeight * items.length) + 17,
            maxHeight: 256,
        };

        return (
            <ul
                className="rainbow-lookup_options-container"
                style={resultContainerStyles}
                ref={this.containerRef}>

                <MenuItems
                    items={items}
                    focusedItemIndex={focusedItemIndex}
                    onClick={onSelectOption}
                    onHover={onHoverOption} />
            </ul>
        );
    }
}

Options.propTypes = {
    items: PropTypes.array,
    value: PropTypes.string,
    onSelectOption: PropTypes.func,
    onHoverOption: PropTypes.func,
    focusedItemIndex: PropTypes.number,
    itemHeight: PropTypes.number.isRequired,
};

Options.defaultProps = {
    items: [],
    value: undefined,
    onSelectOption: () => {},
    onHoverOption: () => {},
    focusedItemIndex: undefined,
};
