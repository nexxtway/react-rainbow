import React, { Component } from 'react';
import VerticalNavigation from 'react-slds/components/VerticalNavigation';
import VerticalSection from 'react-slds/components/VerticalSection';
import VerticalItem from 'react-slds/components/VerticalItem';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: '',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <div className="slds-large-size_1-of-4 slds-medium-size_1-of-3 slds-small-size_1-of-1 slds-p-vertical_medium">
                <VerticalNavigation
                    selectedItem={this.state.selectedItem}
                    onSelect={this.handleOnSelect}>

                    <VerticalSection label="COMPONENTS">
                        <VerticalItem name="avatar" label="Avatar" href="avatar" />
                        <VerticalItem name="badge" label="Badge" href="badge" />
                        <VerticalItem name="breadcrumbs" label="Breadcrumbs" href="breadcrumbs" />
                        <VerticalItem name="button" label="Button" href="button" />
                        <VerticalItem name="button-group" label="ButtonGroup" href="button-group" />
                        <VerticalItem name="button-icon" label="ButtonIcon" href="button-icon" />
                        <VerticalItem name="button-menu" label="ButtonMenu" href="button-menu" />
                        <VerticalItem name="card" label="Card" href="card" />
                        <VerticalItem name="icon" label="Icon" href="icon" />
                        <VerticalItem name="input" label="Input" href="input" />
                        <VerticalItem name="progress-bar" label="ProgressBar" href="progress-bar" />
                        <VerticalItem name="spinner" label="Spinner" href="spinner" />
                    </VerticalSection>
                </VerticalNavigation>
            </div>
        );
    }
}
