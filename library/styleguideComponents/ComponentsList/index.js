import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalNavigation from './../../../src/components/VerticalNavigation';
import VerticalSectionOverflow from './../../../src/components/VerticalSectionOverflow';
import VerticalItem from './../../../src/components/VerticalItem';
import './styles.css';

function renderItems(content) {
    if (content && content.props.items.length) {
        return content.props.items.map(({ visibleName }) => {
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

function getDescription(visibleName) {
    if (visibleName === 'Getting Started') {
        return 'Overview, Usage, Contribuiting ...';
    }
    return null;
}

function isExpanded(items, selectedItem) {
    return items.some(item => item.name === selectedItem);
}

function Sections({ items, selectedItem }) {
    return items.map(({ heading, visibleName, href, content }) => {
        if (heading) {
            return (
                <VerticalSectionOverflow
                    key={href}
                    expanded={isExpanded(content.props.items, selectedItem)}
                    title={visibleName}
                    description={getDescription(visibleName)}>

                    {renderItems(content)}
                </VerticalSectionOverflow>
            );
        }
        return null;
    });
}

function resolveCurrentUrl() {
    return window.location.href.split('#/')[1] || 'Overview';
}

export default class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: resolveCurrentUrl(),
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        const { items } = this.props;
        const { selectedItem } = this.state;

        if (!items.length) {
            return null;
        }

        return (
            <VerticalNavigation
                compact
                className="rainbow-p-bottom_large react-rainbow-vertical-navigation"
                selectedItem={selectedItem}
                onSelect={this.handleOnSelect}>

                <Sections selectedItem={selectedItem} items={items} />
            </VerticalNavigation>
        );
    }
}

ComponentsList.propTypes = {
    items: PropTypes.array.isRequired,
};
