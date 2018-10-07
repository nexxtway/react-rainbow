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
        this.itemRef = React.createRef();
    }

    componentDidMount() {
        const { privateRegisterChild, header } = this.props;
        return setTimeout(() => privateRegisterChild({
            containerID: this.carouselImageID,
            indicatorID: this.carouselIndicatorID,
            ref: this.itemRef,
            header,
        }), 0);
    }

    getContainerClassName() {
        const { className } = this.props;
        return classnames('rainbow-carousel-image_container', className);
    }

    getTabIndex() {
        const { activeItem } = this.props;
        if (activeItem === this.carouselIndicatorID) {
            return 0;
        }
        return -1;
    }

    getAriaHidden() {
        const { activeItem } = this.props;
        return activeItem !== this.carouselIndicatorID;
    }

    render() {
        const { assistiveText, description, header, href, src } = this.props;
        const hasContent = !!(header || description);
        return (
            <div
                id={this.carouselImageID}
                className={this.getContainerClassName()}
                role="tabpanel"
                aria-hidden={this.getAriaHidden()}
                aria-labelledby={this.carouselIndicatorID}>
                <a
                    href={href}
                    className="rainbow-carousel-image"
                    tabIndex={this.getTabIndex()}
                    ref={this.itemRef}>
                    <div>
                        <img className="rainbow-carousel-image_image" src={src} alt={assistiveText} />
                    </div>
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
    /** The URL for the image. */
    src: PropTypes.string,
    /** The header can include text or another component,
     * and is displayed in the top of the content section. */
    header: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** The description can include text or another component,
     * and is displayed below the header in the content section. */
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    /** A description for assistive sreen readers. */
    assistiveText: PropTypes.string,
    /** The URL of the page that the navigation item goes to. */
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
