import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { StyledBackdrop, StyledCenteredImage, StyledImageContainer } from './styled';
import getTransform from './helpers/getTransform';

const ZoomedImage = ({ src, alt, close, originalRect }) => {
    const [isCentered, setIsCentered] = useState(false);

    const handleKeyDown = event => {
        if (event.key === 'Escape') {
            setIsCentered(false);
            setTimeout(close, 300);
        }
    };

    useEffect(() => {
        setIsCentered(true);
    }, []);

    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    });

    const handleClick = () => {
        setIsCentered(false);
        setTimeout(close, 300);
    };

    return ReactDOM.createPortal(
        <StyledImageContainer onClick={handleClick} onKeyDown={handleKeyDown}>
            <StyledBackdrop isCentered={isCentered} />
            <StyledCenteredImage
                src={src}
                alt={alt}
                top={originalRect.top}
                left={originalRect.left}
                width={originalRect.width}
                height={originalRect.height}
                isCentered={isCentered}
                transform={getTransform(originalRect)}
            />
        </StyledImageContainer>,
        document.body,
    );
};

ZoomedImage.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    close: PropTypes.func,
    originalRect: PropTypes.object,
};

ZoomedImage.defaultProps = {
    src: '',
    alt: '',
    close: () => {},
    originalRect: {},
};

export default ZoomedImage;
