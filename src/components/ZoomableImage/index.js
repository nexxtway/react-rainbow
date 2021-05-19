import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import ZoomedImage from './zoomedImage';
import { StyledImage } from './styled';

/**
 * ZoomableImage renders an image that is zoomed in when clicked
 */
const ZoomableImage = ({ className, style, src, alt, width, height }) => {
    const ref = useRef();
    const imageRect = useRef({});
    const [isOpen, setIsOpen] = useState(false);

    const open = () => {
        imageRect.current = ref.current.getBoundingClientRect();
        setIsOpen(true);
    };

    const close = () => {
        setIsOpen(false);
    };

    return (
        <>
            <StyledImage
                className={className}
                style={style}
                src={src}
                alt={alt}
                width={width}
                height={height}
                ref={ref}
                isOpen={isOpen}
                onClick={open}
            />
            <RenderIf isTrue={isOpen}>
                <ZoomedImage src={src} alt={alt} close={close} originalRect={imageRect.current} />
            </RenderIf>
        </>
    );
};

ZoomableImage.propTypes = {
    /** The class name of the root element. */
    className: PropTypes.string,
    /** It is an object with custom style applied to the root element. */
    style: PropTypes.object,
    /** The image URL. */
    src: PropTypes.string,
    /** Defines an alternative text description of the image. */
    alt: PropTypes.string,
    /** The intrinsic width of the image in pixels. Must be an integer without a unit. */
    width: PropTypes.number,
    /** The intrinsic height of the image, in pixels. Must be an integer without a unit. */
    height: PropTypes.number,
};

ZoomableImage.defaultProps = {
    className: undefined,
    style: undefined,
    src: '',
    alt: '',
    width: undefined,
    height: undefined,
};

export default ZoomableImage;
