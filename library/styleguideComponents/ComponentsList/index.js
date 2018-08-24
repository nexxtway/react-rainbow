import React, { Component } from 'react';
import PropTypes from 'prop-types';
import VerticalNavigation from './../../../src/components/VerticalNavigation';
import VerticalSection from './../../../src/components/VerticalSection';
import VerticalItem from './../../../src/components/VerticalItem';
import './styles.css';

function Items({ content }) {
    if (content && content.props.items.length) {
        return content.props.items.map(({ visibleName }) => (
            <VerticalItem key={visibleName} label={visibleName} name={visibleName} href={`/#/${visibleName}`} />
        ));
    }
    return null;
}

function Sections({ items }) {
    return items.map(({ heading, visibleName, href, content }) => {
        if (heading) {
            return (
                <VerticalSection
                    key={href}
                    label={visibleName}>

                    <Items content={content} />
                </VerticalSection>
            );
        }
        return null;
    });
}

export default class ComponentsList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Overview',
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
                className="slds-p-bottom_large slds-react-vertical-navigation"
                selectedItem={selectedItem}
                onSelect={this.handleOnSelect}>

                <Sections items={items} />
            </VerticalNavigation>
        );
    }
}

ComponentsList.propTypes = {
    items: PropTypes.array.isRequired,
};
