import { BaseProps } from '../types';

interface ZoomableImageProps extends BaseProps {
    /** The image URL. */
    src: string;
    /** Defines an alternative text description of the image. */
    alt: string;
    /** The intrinsic width of the image in pixels. Must be an integer without a unit. */
    width: number;
    /** The intrinsic height of the image, in pixels. Must be an integer without a unit. */
    height: number;
}

declare const ZoomableImage: React.ComponentType<ZoomableImageProps>;
export default ZoomableImage;
