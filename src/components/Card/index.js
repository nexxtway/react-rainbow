import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HeaderIcon from './headerIcon';
import HeaderTitle from './headerTitle';
import CardBoddy from './cardBody';
import Footer from './footer';
import Actions from './actions';

export default function Card(props) {
    const {
        className,
        style,
        actions,
        children,
        footer,
        iconName,
        title,
        isLoading,
    } = props;

    const getContainerClassName = () => classnames('slds-card', className);

    return (
        <article className={getContainerClassName()} style={style}>
            <div className="slds-card__header slds-grid">
                <header className="slds-media slds-media_center slds-has-flexi-truncate">
                    <HeaderIcon iconName={iconName} />
                    <HeaderTitle title={title} />
                </header>
                <Actions content={actions} />
            </div>
            <div className="slds-card__body slds-card__body_inner">
                <CardBoddy isLoading={isLoading}>
                    {children}
                </CardBoddy>
            </div>
            <Footer content={footer} isLoading={isLoading} />
        </article>
    );
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
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]).isRequired,
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
};

Card.defaultProps = {
    className: undefined,
    style: {},
    actions: null,
    children: null,
    footer: null,
    iconName: '',
    isLoading: false,
};
