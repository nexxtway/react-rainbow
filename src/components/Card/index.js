import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HeaderTitle from './headerTitle';
import HeaderIcon from './headerIcon';
import CardBoddy from './cardBody';
import Footer from './footer';
import Actions from './actions';
import './styles.css';

/**
* Cards are used to apply a container around a
* related grouping of information.
*/
export default function Card(props) {
    const {
        className,
        style,
        actions,
        children,
        footer,
        title,
        icon,
        isLoading,
    } = props;

    const getContainerClassName = () => classnames('rainbow-card', className);

    return (
        <article className={getContainerClassName()} style={style}>
            <div className="rainbow-card__header-container">
                <header className="rainbow-card__header">
                    <HeaderIcon icon={icon} />
                    <HeaderTitle title={title} />
                </header>
                <Actions content={actions} />
            </div>
            <div className="rainbow-card__body">
                <CardBoddy isLoading={isLoading}>
                    {children}
                </CardBoddy>
            </div>
            <Footer content={footer} isLoading={isLoading} />
        </article>
    );
}

Card.propTypes = {
    /** The title can include text or another component, and is displayed in the header. */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** The Lightning Design System name of the icon used as a fallback when
     * the image fails to load. Names are written in the format {sprite_name}:{icon_name}
     * where {sprite_name} is the category, and {icon_name} is the specific icon to be displayed.
     * The icon is displayed in the header to the left of the title. */
    icon: PropTypes.node,
    /** Actions are components such as button or buttonIcon. Actions are displayed in the header. */
    actions: PropTypes.node,
    /** The footer can include text or another component. */
    footer: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /**
    * This prop that should not be visible in the documentation.
    * @ignore
    */
    children: PropTypes.node,
};

Card.defaultProps = {
    icon: null,
    actions: null,
    footer: null,
    isLoading: false,
    className: undefined,
    style: undefined,
    children: null,
};
