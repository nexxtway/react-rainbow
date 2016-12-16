import React from 'react';
import { Navigation, NavigationSession, NavigationItem } from './../../../../entry';

export default class DefaultNavigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'Top results'
        }
    }
    render() {
        return (
            <Navigation>
                <NavigationSession label="Serach results">
                    <NavigationItem label="Top results" isActive={ this.isSelected('Top results') } onClick={ itemProps => this.navigate(itemProps) }/>
                    <NavigationItem label="Accounts" isActive={ this.isSelected('Accounts') } onClick={ itemProps => this.navigate(itemProps) }/>
                    <NavigationItem label="Contacts" isActive={ this.isSelected('Contacts') } onClick={ itemProps => this.navigate(itemProps) }/>
                </NavigationSession>
                <NavigationSession label="External results">
                    <NavigationItem label="App one" isActive={ this.isSelected('App one') } onClick={ itemProps => this.navigate(itemProps) }/>
                    <NavigationItem label="App two" isActive={ this.isSelected('App two') } onClick={ itemProps => this.navigate(itemProps) }/>
                    <NavigationItem label="App three" isActive={ this.isSelected('App three') } onClick={ itemProps => this.navigate(itemProps) }/>
                </NavigationSession>
            </Navigation>
        )

    }

    isSelected(itemLabel) {
        return this.state.selectedItem === itemLabel;
    }

    navigate(props) {
        this.setState({ selectedItem: props.label });
    }
}