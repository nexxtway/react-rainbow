/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { uniqueId } from '../../libs/utils';
import { Consumer } from '../CarouselCard/context';
import './styles.css';

class Item extends Component {
    constructor(props) {
        super(props);
        this.carouselImageID = uniqueId('carousel-content-id');
        this.carouselindicatorID = uniqueId('indicator-id');
    }

    componentDidMount() {
        const { privateRegisterChild } = this.props;
        return setTimeout(() => (
            privateRegisterChild({
                containerID: this.carouselImageID,
                indicatorID: this.carouselindicatorID,
            })), 0);
    }

    render() {
        const { alternativeText, description, header, href, src } = this.props;
        return (
            <div
                id={this.carouselImageID}
                className="rainbow-carousel__panel"
                role="tabpanel"
                aria-hidden="false"
                aria-labelledby={this.carouselindicatorID}>
                <a
                    href={href}
                    className="rainbow-carousel__panel-action rainbow-text-link_reset"
                    tabIndex="0">
                    <div className="rainbow-carousel__image">
                        <img src={src} alt={alternativeText} />
                    </div>
                    <div className="rainbow-carousel__content">
                        <h2 className="rainbow-carousel__content-title">{header}</h2>
                        <p>{description}</p>
                    </div>
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
    header: PropTypes.string,
    description: PropTypes.string,
    alternativeText: PropTypes.string,
    href: PropTypes.string,
};

CarouselImage.defaultProps = {
    src: undefined,
    header: undefined,
    description: undefined,
    alternativeText: undefined,
    href: undefined,
};
