import React from 'react';
import classnames from 'classnames';

export default class Tabset extends React.Component {
    constructor(props) {
        super(props);

        if (props.children.length === 0) {
            throw new Error('The Tabset must have at least one Tab');
        }

        this.state = {
            activeTabId: this.getDefaultActiveTabId(props)
        }
    }

    getDefaultActiveTabId(props) {
        let defaultTabId = props.children[0].props.id;

        if (!props.initialActiveTabId) {
            return defaultTabId;
        }

        props.children.every(Tab => {
            if (Tab.props.id === props.initialActiveTabId) {
                defaultTabId = Tab.props.id;
                return false;
            }
            return true;
        });

        return defaultTabId;
    }

    render() {
        let variant = this.getVariantString();

        return (
            <div className="slds-tabs--default">
                <ul className={ `slds-tabs--${ variant }__nav` } role="tablist">
                    { this.renderTabs() }
                </ul>
                <div id={ this.state.activeTabId }
                     className={ `slds-tabs--${ variant }__content slds-show` }
                     role="tabpanel"
                     aria-labelledby={ `${ this.state.activeTabId }__item` } >
                    { this.getSelectedTabContent() }
                </div>
            </div>
        );
    }

    renderTabs() {
        return this.props.children.map(Tab => {
            let { label, title, id } = Tab.props;

            return (
                <li className={ this.getTabClasses(Tab) } title={ title } role="presentation" key={ id }>
                    <a className={ `slds-tabs--${ this.getVariantString() }__link` }
                       href="javascript:void(0);"
                       role="tab"
                       tabIndex="0"
                       aria-selected={ this.isSelected(Tab) }
                       aria-controls={ id }
                       onClick={ e => this.onSelect(id) }
                       id={ `${id}__item` }>
                        { label }
                    </a>
                </li>
            );
        })
    }

    getVariantString() {
        return this.props.variant === 'scoped' ? 'scoped' : 'default';
    }

    onSelect(id) {
        this.setState({ activeTabId: id });
        this.props.onSelect && this.props.onSelect(id);
    }

    getSelectedTabContent() {
        let contentComponent;

        this.props.children.every(Tab => {
            if (this.state.activeTabId === Tab.props.id) {
                contentComponent = Tab.props.component || this.getDefaultContent(Tab.props.id);
                return false;
            }
            return true;
        });

        return contentComponent;
    }

    getDefaultContent(id) {
        return (
            <h1>There was not component set up for Tab "{ id }".</h1>
        );
    }

    getTabClasses(Tab) {
        return classnames(`slds-tabs--${ this.getVariantString() }__item slds-text-title--caps`, {
            'slds-active': this.isSelected(Tab)
        });
    }

    isSelected(Tab) {
        return Tab.props.id === this.state.activeTabId;
    }
}
