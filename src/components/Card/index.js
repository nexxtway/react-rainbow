import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import HeaderTitle from './headerTitle';
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
        isLoading,
    } = props;

    const getContainerClassName = () => classnames('rainbow-card', className);

    return (
        <article className={getContainerClassName()} style={style}>
            <div className="rainbow-card__header rainbow-grid">
                <header className="rainbow-media rainbow-media_center rainbow-has-flexi-truncate">
                    <HeaderTitle title={title} />
                </header>
                <Actions content={actions} />
            </div>
            <div className="rainbow-card__body rainbow-card__body_inner">
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
    actions: null,
    footer: null,
    isLoading: false,
    className: undefined,
    style: undefined,
    children: null,
};
