import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../RenderIf';
import AssistiveText from '../AssistiveText';

export default class ImageContainer extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
    }

    render() {
        const {
            containerClassName,
            tabIndex,
            imageSrc,
            assistiveText,
            hasContent,
            header,
            description,
        } = this.props;
        return (
            <div className={containerClassName} tabIndex={tabIndex} ref={this.itemRef}>
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
}

ImageContainer.propTypes = {
    containerClassName: PropTypes.string,
    tabIndex: PropTypes.number,
    imageSrc: PropTypes.object,
    assistiveText: PropTypes.string,
    hasContent: PropTypes.bool.isRequired,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
};

ImageContainer.defaultProps = {
    containerClassName: undefined,
    tabIndex: undefined,
    imageSrc: {},
    assistiveText: undefined,
    header: undefined,
    description: undefined,
};
