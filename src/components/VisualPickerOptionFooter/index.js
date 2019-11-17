import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import StyledContainer from './styled/container';
import StyledLabel from './styled/label';
import StyledDescription from './styled/description';

/**
 * A VisualPickerOptionFooter.
 * @category Form
 */

export default function VisualPickerOptionFooter(props) {
    const { label, description, className, style } = props;

    return (
        <StyledContainer className={className} style={style}>
            <RenderIf isTrue={!!label}>
                <StyledLabel>{label}</StyledLabel>
            </RenderIf>
            <RenderIf isTrue={!!description}>
                <StyledDescription>{description}</StyledDescription>
            </RenderIf>
        </StyledContainer>
    );
}

VisualPickerOptionFooter.propTypes = {
    /** The label displayed for the VisualPickerOptionFooter. */
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description displayed for the VisualPickerOptionFooter. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
};

VisualPickerOptionFooter.defaultProps = {
    label: '',
    description: '',
    className: undefined,
    style: undefined,
};
