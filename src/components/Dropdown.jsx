import React from 'react';
import classnames from 'classnames';
import outsideClick from './libs/outsideClick';

export default class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this._outsideClick = outsideClick();
        this.state = {
            isOpen: false
        }
    }

    render() {
        return (
            <div className={ this.getContainerClass() } ref={ ref => this.rootElement = ref }>
                <span onClick={ () => this.toggle() }>
                    { this.props.trigger }
                </span>
                <div className={ this.getDropdownClass() }>
                    { this.props.children }
                </div>
            </div>
        );
    }

    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
        if (this.props.closeWhenClickOutside)
            this._outsideClick.bindRootCloseHandlers(this.rootElement, this.close.bind(this));
    }

    close() {
        this.setState({ isOpen: false });
        if (this._outsideClick.isListening())
            this._outsideClick.unbindRootCloseHandlers();
    }

    getContainerClass() {
        return classnames('slds-dropdown-trigger', 'slds-dropdown-trigger--click', {
            'slds-is-open': this.state.isOpen
        });
    }

    getDropdownClass() {
        let isBottom = /^bottom-(right|left)$/.test(this.props.position);
        let isRight = /^(bottom|top)-right$/.test(this.props.position);
        let isLeft = /^(bottom|top)-left$/.test(this.props.position);

        return classnames('slds-dropdown'
            , this.props.showArrow ? `slds-nubbin--${ this.props.position }` : null, {
            'slds-dropdown--bottom': isBottom,
            'slds-dropdown--right': isRight,
            'slds-dropdown--left': isLeft,
            'slds-dropdown--large': this.props.size === 'large',
            'slds-dropdown--medium': this.props.size === 'medium',
            'slds-dropdown--small': this.props.size === 'small'
        })
    }
}

Dropdown.PropTypes = {
    trigger: React.PropTypes.any.isRequired,
    position: React.PropTypes.oneOf(['bottom-left', 'bottom-right', 'top-left', 'top-right']),
    closeWhenClickOutside: React.PropTypes.bool,
    showArrow: React.PropTypes.bool,
    size: React.PropTypes.oneOf(['small', 'medium', 'large'])
};

Dropdown.defaultProps = {
    closeWhenClickOutside: true,
    position: 'top-right',
    showArrow: false
};