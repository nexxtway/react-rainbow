import React from 'react';
import PropTypes from 'prop-types';
import CardBoddy from './cardBody';
import Header from './header';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledFooter from './styled/footer';

/**
 * Cards are used to apply a container around a
 * related grouping of information.
 * @category Layout
 */
export default function Card(props) {
    const { className, style, actions, children, footer, title, icon, isLoading } = props;
    const hasHeader = icon || title || actions;
    const showFooter = !!(footer && !isLoading);

    return (
        <StyledContainer className={className} style={style} hasHeader={hasHeader}>
            <Header actions={actions} title={title} icon={icon} />

            <CardBoddy isLoading={isLoading}>{children}</CardBoddy>

            <RenderIf isTrue={showFooter}>
                <StyledFooter>{footer}</StyledFooter>
            </RenderIf>
        </StyledContainer>
    );
}

Card.propTypes = {
    /** The title can include text or another component,
     * and is displayed in the header of the component. */
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The icon to show if it is passed. It must be a svg icon or a font icon.
     * It is displayed in the header of the component. */
    icon: PropTypes.node,
    /** Actions are components such as button or buttonIcon. Actions are displayed in the header. */
    actions: PropTypes.node,
    /** The footer can include text or another component. */
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The content of the Card. */
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.object]),
    /** If is set to true, then is showed a loading symbol. */
    isLoading: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Card.defaultProps = {
    title: null,
    icon: null,
    actions: null,
    footer: null,
    isLoading: false,
    className: undefined,
    style: undefined,
    children: null,
};
