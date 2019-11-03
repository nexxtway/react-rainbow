import React from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';

export default function ImageContainer(props) {
    const {
        className,
        tabIndex,
        imageSrc,
        assistiveText,
        hasContent,
        header,
        description,
        itemRef,
    } = props;

    return (
        <div className={className} tabIndex={tabIndex} ref={itemRef}>
            <div className="rainbow-carousel-image_image" style={imageSrc} />
            <AssistiveText text={assistiveText} />
            <RenderIf isTrue={hasContent}>
                <div className="rainbow-carousel-image_content">
                    <RenderIf isTrue={!!header}>
                        <h2 className="rainbow-carousel-image_content-title">{header}</h2>
                    </RenderIf>
                    <RenderIf isTrue={!!description}>
                        <p>{description}</p>
                    </RenderIf>
                </div>
            </RenderIf>
        </div>
    );
}

ImageContainer.propTypes = {
    className: PropTypes.string,
    tabIndex: PropTypes.number,
    imageSrc: PropTypes.object,
    itemRef: PropTypes.object,
    assistiveText: PropTypes.string,
    hasContent: PropTypes.bool.isRequired,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ImageContainer.defaultProps = {
    className: undefined,
    tabIndex: undefined,
    imageSrc: {},
    itemRef: undefined,
    assistiveText: undefined,
    header: undefined,
    description: undefined,
};
