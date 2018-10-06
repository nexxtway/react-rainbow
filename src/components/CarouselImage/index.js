/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../libs/utils';
import RenderIf from '../RenderIf';
import { Consumer } from '../CarouselCard/context';
import './styles.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.carouselImageID = uniqueId('carousel-content-id');
        this.carouselIndicatorID = uniqueId('indicator-id');
    }

    componentDidMount() {
        const { privateRegisterChild, header } = this.props;
        return setTimeout(() => (
            privateRegisterChild({
                containerID: this.carouselImageID,
                indicatorID: this.carouselIndicatorID,
                header,
            })), 0);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-carousel-image-container', className);
    }

    getTabIndex() {
        const { activeItem } = this.props;
        if (activeItem === this.carouselIndicatorID) {
            return 0;
        }
        return -1;
    }

    render() {
        const { assistiveText, description, header, href, src, activeItem } = this.props;
        return (
            <div
                id={this.carouselImageID}
                className={this.getContainerClassName()}
                role="tabpanel"
                aria-hidden={activeItem !== this.carouselIndicatorID}
                aria-labelledby={this.carouselIndicatorID}>
                <a
                    href={href}
                    className="rainbow-carousel-image"
                    tabIndex={this.getTabIndex()}>
                    <div>
                        <img className="rainbow-carousel-image_image" src={src} alt={assistiveText} />
                    </div>
                    <RenderIf isTrue={header || description}>
                        <div className="rainbow-carousel-image-content">
                            <RenderIf isTrue={header}>
                                <h2 className="rainbow-carousel-image-content-title">{header}</h2>
                            </RenderIf>
                            <RenderIf isTrue={description}>
                                <p>{description}</p>
                            </RenderIf>
                        </div>
                    </RenderIf>
                </a>
            </div>
        );
    }
}

export default function CarouselImage(props) {
    return (
        <Consumer>
            {value => (
                <Item {...props} {...value} />
            )}
        </Consumer>
    );
}

CarouselImage.propTypes = {
    src: PropTypes.string,
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    assistiveText: PropTypes.string,
    href: PropTypes.string,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

CarouselImage.defaultProps = {
    src: undefined,
    header: undefined,
    description: undefined,
    assistiveText: undefined,
    href: undefined,
    className: undefined,
    style: undefined,
};
