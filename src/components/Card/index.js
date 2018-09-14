import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import CardBoddy from './cardBody';
import Header from './header';
import RenderIf from '../RenderIf';
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
            <Header actions={actions} title={title} icon={icon} />
            <div>
                <CardBoddy isLoading={isLoading}>
                    {children}
                </CardBoddy>
            </div>

            <RenderIf isTrue={footer && !isLoading}>
                <footer className="rainbow-card_footer">
                    {footer}
                </footer>
            </RenderIf>
        </article>
    );
}

Card.propTypes = {
    /** The title can include text or another component,
    * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]).isRequired,
    /** The icon to show if it is passed. It must be a svg icon or a font icon.
    * It is displayed in the header of the component. */
    icon: PropTypes.node,
    /** Actions are components such as button or buttonIcon. Actions are displayed in the header. */
    actions: PropTypes.node,
    /** The footer can include text or another component. */
    footer: PropTypes.oneOfType([
        PropTypes.string, PropTypes.node,
    ]),
    /** The content of the Card. */
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.object,
    ]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
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
