/* eslint-disable import/no-extraneous-dependencies */
import React, { Component } from 'react';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalSectionOverflow from 'react-rainbow-components/components/VerticalSectionOverflow';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faHome, faShoppingCart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock, faUser } from '@fortawesome/free-regular-svg-icons';

export default class SideNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedItem: 'item-7',
        };
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    handleOnSelect(e, selectedItem) {
        return this.setState({ selectedItem });
    }

    render() {
        return (
            <aside className="rainbow-admin_vertical-navigation rainbow-p-vertical_medium">
                <VerticalNavigation
                    selectedItem={this.state.selectedItem}
                    onSelect={this.handleOnSelect}
                >
                    <VerticalSection>
                        <VerticalItem
                            name="item-1"
                            label="Dashboard"
                            icon={<FontAwesomeIcon size="lg" icon={faHome} />}
                        />
                        <VerticalItem
                            name="item-2"
                            label="Orders"
                            icon={<FontAwesomeIcon size="lg" icon={faShoppingCart} />}
                        />
                        <VerticalItem
                            name="item-3"
                            label="Customers"
                            icon={<FontAwesomeIcon size="lg" icon={faUsers} />}
                        />
                    </VerticalSection>

                    <VerticalSectionOverflow
                        title="Integrations"
                        description="Integrations with ..."
                    >
                        <VerticalItem name="item-4" label="Item 1" />
                        <VerticalItem name="item-5" label="Item 2" />
                    </VerticalSectionOverflow>

                    <VerticalSectionOverflow
                        expanded
                        title="Connect"
                        description="Recents, Accounts, Transfer ..."
                    >
                        <VerticalItem
                            name="item-6"
                            label="Recents"
                            icon={<FontAwesomeIcon size="lg" icon={faClock} />}
                        />
                        <VerticalItem
                            name="item-7"
                            label="Accounts"
                            icon={<FontAwesomeIcon size="lg" icon={faUser} />}
                        />
                        <VerticalItem
                            name="item-8"
                            label="Transfer"
                            icon={<FontAwesomeIcon size="lg" icon={faExchangeAlt} />}
                        />
                    </VerticalSectionOverflow>
                </VerticalNavigation>
            </aside>
        );
    }
}
