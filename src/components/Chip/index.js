import React from 'react';
import PropTypes from 'prop-types';
import CloseIcon from './closeIcon';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import TruncatedText from '../Structural/truncatedText';
import StyledButtonIcon from './styled/buttonIcon';

/**
 * A Chip displays a label that can be removed from view.
 */
export default function Chip(props) {
    const { label, onDelete, variant, title, className, style } = props;

    return (
        <StyledContainer className={className} style={style} variant={variant} title={title}>
            <TruncatedText>{label}</TruncatedText>
            <RenderIf isTrue={!!onDelete}>
                <StyledButtonIcon
                    variant={variant}
                    icon={<CloseIcon />}
                    size="small"
                    title="Close"
                    onClick={onDelete}
                    assistiveText="Remove"
                />
            </RenderIf>
        </StyledContainer>
    );
}

Chip.propTypes = {
    /** The content to be displayed inside the Chip. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** Displays tooltip text when the mouse moves over the element. */
    title: PropTypes.string,
    /** The variant changes the appearance of the Chip. Accepted variants include base,
     * neutral, outline-brand and brand. This value defaults to base. */
    variant: PropTypes.oneOf(['base', 'neutral', 'outline-brand', 'brand']),
    /** The action triggered when the close button is clicked. */
    onDelete: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Chip.defaultProps = {
    label: null,
    title: undefined,
    variant: 'base',
    onDelete: undefined,
    className: undefined,
    style: undefined,
};
