import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import {
    StyledShapeContainer,
    StyledLoadingShape,
    StyledImageIcon,
    StyledAvatarIcon,
} from './styled';

/**
 * LoadingShape can be used to display a placeholder where content
 * is being loaded asynchronously.
 */
const LoadingShape = props => {
    const { className, style, shape, variant } = props;
    const shapeRef = useRef();
    const isImage = variant === 'image';
    const isAvatar = variant === 'avatar';

    useEffect(() => {
        const element = shapeRef.current;
        if (shape === 'square' || shape === 'circle') {
            element.style.width = `${element.offsetHeight}px`;
        } else {
            element.style.width = '100%';
        }
    });

    return (
        <StyledShapeContainer className={className} style={style}>
            <StyledLoadingShape shape={shape} variant={variant} ref={shapeRef}>
                <RenderIf isTrue={isImage}>
                    <StyledImageIcon shape={shape} />
                </RenderIf>
                <RenderIf isTrue={isAvatar}>
                    <StyledAvatarIcon shape={shape} />
                </RenderIf>
            </StyledLoadingShape>
        </StyledShapeContainer>
    );
};

LoadingShape.propTypes = {
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The shape of the loading placeholder */
    shape: PropTypes.oneOf(['circle', 'rect', 'rounded-rect', 'square']),
    /** The variant of the loading placeholder */
    variant: PropTypes.oneOf(['solid', 'image', 'avatar']),
};

LoadingShape.defaultProps = {
    className: undefined,
    style: undefined,
    shape: 'rounded-rect',
    variant: 'solid',
};

export default LoadingShape;
