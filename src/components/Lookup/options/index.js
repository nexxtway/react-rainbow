import React from 'react';
import PropTypes from 'prop-types';
import MenuItem from './menuItem';
import StyledHeaderLi from './styled/headerLi';
import StyledSearchIcon from './styled/searchIcon';
import StyledOptionsContainer from './styled//optionsContainer';
import StyledEmptyMessage from './styled/emptyMessage';

function preventDefault(event) {
    event.preventDefault();
}

function MenuItems(props) {
    const { items, onClick, focusedItemIndex, onHover } = props;

    return items.map((item, index) => {
        const { label, description, icon, type } = item;
        const isActive = index === focusedItemIndex;
        const key = `lookup-item-${index}`;

        if (type === 'header') {
            return (
                <StyledHeaderLi key={key} role="separator">
                    <span>{label}</span>
                </StyledHeaderLi>
            );
        }

        return (
            <MenuItem
                key={key}
                id={key}
                label={label}
                description={description}
                icon={icon}
                isActive={isActive}
                index={index}
                onHover={onHover}
                onClick={() => onClick(item)}
            />
        );
    });
}

const sizeMap = {
    small: 144,
    medium: 240,
    large: 384,
};

export default class Options extends React.PureComponent {
    constructor(props) {
        super(props);
        this.containerRef = React.createRef();
    }

    getMaxHeight() {
        const { size } = this.props;
        return sizeMap[size] || sizeMap.medium;
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
                <StyledOptionsContainer
                    ref={this.containerRef}
                    as="div"
                    data-id="lookup-options-empty-container"
                >
                    <StyledSearchIcon />
                    <StyledEmptyMessage>
                        Our robots did not find any match for
                        <span>{` "${value}"`}</span>
                    </StyledEmptyMessage>
                </StyledOptionsContainer>
            );
        }

        const resultContainerStyles = {
            height: itemHeight * items.length,
            maxHeight: this.getMaxHeight(),
        };

        return (
            <StyledOptionsContainer
                style={resultContainerStyles}
                ref={this.containerRef}
                role="presentation"
                onMouseDown={preventDefault}
            >
                <MenuItems
                    items={items}
                    focusedItemIndex={focusedItemIndex}
                    onClick={onSelectOption}
                    onHover={onHoverOption}
                />
            </StyledOptionsContainer>
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
    size: PropTypes.oneOf(['small', 'medium', 'large']),
};

Options.defaultProps = {
    items: [],
    value: undefined,
    onSelectOption: () => {},
    onHoverOption: () => {},
    focusedItemIndex: undefined,
    size: 'medium',
};
