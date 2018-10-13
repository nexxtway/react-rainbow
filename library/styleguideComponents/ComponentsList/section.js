import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalSectionOverflow from './../../../src/components/VerticalSectionOverflow';
import VerticalItem from './../../../src/components/VerticalItem';

function renderItems(items) {
    if (items && items.length) {
        return items.map(({ visibleName }) => {
            const pathname = `/#/${visibleName}`;
            return (
                <VerticalItem
                    key={visibleName}
                    label={visibleName}
                    name={visibleName}
                    href={pathname} />
            );
        });
    }
    return null;
}

function isExpandedWhenSearch(items, searchTerm) {
    return !!(searchTerm && items.length);
}

function isInitallyExpanded(items, selectedItem) {
    return items.some(item => item.name === selectedItem);
}

export default class Section extends Component {
    constructor(props) {
        super(props);
        const { items, selectedItem } = props;
        this.state = {
            isExpanded: isInitallyExpanded(items, selectedItem),
        };
        this.handleOnToggleSection = this.handleOnToggleSection.bind(this);
    }

    componentDidUpdate(prevProps) {
        const { searchTerm: prevSearchTerm } = prevProps;
        const { searchTerm } = this.props;
        if (prevSearchTerm !== searchTerm) {
            this.isExpanded();
        }
    }

    isExpanded() {
        const { items, searchTerm } = this.props;
        this.setState({
            isExpanded: isExpandedWhenSearch(items, searchTerm),
        });
    }

    handleOnToggleSection() {
        const { isExpanded } = this.state;
        this.setState({ isExpanded: !isExpanded });
    }

    render() {
        const { label, description, items } = this.props;
        const { isExpanded } = this.state;


        return (
            <VerticalSectionOverflow
                expanded={isExpanded}
                label={label}
                onToggleSection={this.handleOnToggleSection}
                description={description}>

                {renderItems(items)}
            </VerticalSectionOverflow>
        );
    }
}

Section.propTypes = {
    label: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    selectedItem: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
};
