import React, { Component } from 'react';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';

const styles = {
    width: '33%',
};

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
            <div style={styles}>
                <VerticalNavigation
                    selectedItem={this.state.selectedItem}
                    onSelect={this.handleOnSelect}>

                    <VerticalSection label="COMPONENTS">
                        <VerticalItem name="avatar" label="Avatar" href="avatar" />
                        <VerticalItem name="badge" label="Badge" href="badge" />
                        <VerticalItem name="button" label="Button" href="button" />
                        <VerticalItem name="button-group" label="ButtonGroup" href="button-group" />
                        <VerticalItem name="button-icon" label="ButtonIcon" href="button-icon" />
                        <VerticalItem name="button-menu" label="ButtonMenu" href="button-menu" />
                        <VerticalItem name="card" label="Card" href="card" />
                        <VerticalItem name="input" label="Input" href="input" />
                        <VerticalItem name="progress-bar" label="ProgressBar" href="progress-bar" />
                        <VerticalItem name="spinner" label="Spinner" href="spinner" />
                        <VerticalItem name="checkout" label="Checkout" href="checkout" />
                        <VerticalItem name="sign-in" label="SignIn" href="sign-in" />
                        <VerticalItem name="admin" label="Admin" href="admin" />
                    </VerticalSection>
                </VerticalNavigation>
            </div>
        );
    }
}
