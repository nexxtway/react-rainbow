/* eslint-disable react/require-default-props */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Icon from '../Icon';

export default class Card extends Component {
    getContainerClass() {
        return classnames('slds-card', this.props.className);
    }

    renderIcon() {
        const { iconName } = this.props;

        if (iconName) {
            return (
                <div className="slds-media__figure">
                    <Icon iconName={iconName} size="small" />
                </div>
            );
        }

        return null;
    }

    renderTitle() {
        const { title } = this.props;

        if (title) {
            return (
                <div className="slds-media__body">
                    <h2>
                        <span className="slds-text-heading_small">{title}</span>
                    </h2>
                </div>
            );
        }

        return null;
    }

    renderHeader() {
        const { actions, iconName, title } = this.props;

        if (actions || iconName || title) {
            return (
                <div className="slds-card__header slds-grid">
                    <header className="slds-media slds-media_center slds-has-flexi-truncate">
                        { this.renderIcon() }
                        { this.renderTitle() }
                    </header>
                    { actions ? <div className="slds-no-flex">{actions}</div> : null }
                </div>
            );
        }

        return null;
    }

    renderFooter() {
        const { footer } = this.props;

        if (footer) {
            return <footer className="slds-card__footer">{footer}</footer>;
        }

        return null;
    }

    render() {
        const {
            actions,
            children,
            footer,
            iconName,
            title,
            style,
        } = this.props;

        if (!actions && !children && !footer && !iconName && !title) {
            return null;
        }

        return (
            <article className={this.getContainerClass()} style={style}>
                { this.renderHeader() }
                <div className="slds-card__body slds-card__body_inner">{children}</div>
                { this.renderFooter() }
            </article>
        );
    }
}

Card.propTypes = {
    /** Class for custom styles */
    className: PropTypes.string,
    /** Object with the custom styles. The properties must be in camelCase naming
     convention (e.g. { backgroundColor: green }) */
    style: PropTypes.object,
    /** Actions are components such as button or buttonIcon. Actions are displayed in the header. */
    actions: PropTypes.node,
    /** The body of the component. In markup, this is everything in the body of the card */
    children: PropTypes.node,
    /** The footer can include text or another component */
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The Lightning Design System name of the icon. Names are written in the
     format '\utility:down\' where 'utility' is the category, and 'down' is the
     specific icon to be displayed. The icon is displayed in the header to the left of the title */
    iconName: PropTypes.string,
    /** The title can include text or another component, and is displayed in the header */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};
