import React from 'react'

export default class Menu extends React.Component {
    render() {
        return (
            <ul className="slds-dropdown__list" role="menu">
                { this.props.children }
            </ul>
        );
    }
}
