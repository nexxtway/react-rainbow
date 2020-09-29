/* eslint-disable react/prop-types, react/no-multi-comp */
import React, { Component } from 'react';
import RenderIf from './../../../../src/components/RenderIf';
import LiveIcon from './live.svg';
import PreviewIcon from './preview.svg';

export default class InnerImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isVisible: false,
        };
        this.handleMouseEnter = this.handleMouseEnter.bind(this);
        this.handleMouseLeave = this.handleMouseLeave.bind(this);
    }

    handleMouseEnter() {
        this.setState({ isVisible: true });
    }

    handleMouseLeave() {
        this.setState({ isVisible: false });
    }

    render() {
        const { liveUrl, previewUrl } = this.props;
        const { isVisible } = this.state;

        return (
            <div
                className="react-rainbow-design-detail_inner-img"
                onMouseEnter={this.handleMouseEnter}
                onMouseLeave={this.handleMouseLeave}
            >
                <RenderIf isTrue={isVisible && liveUrl}>
                    <a
                        className="react-rainbow-design-detail_img-icon"
                        href={liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={LiveIcon} alt="live icon" />
                    </a>
                    <a
                        className="react-rainbow-design-detail_img-icon"
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={PreviewIcon} alt="preview icon" />
                    </a>
                </RenderIf>
                <RenderIf isTrue={isVisible && !liveUrl}>
                    <a
                        className="react-rainbow-design-detail_preview-link"
                        href={previewUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Preview
                    </a>
                </RenderIf>
            </div>
        );
    }
}
