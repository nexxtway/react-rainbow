import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

export default function Item(props) {
    const {
        className,
        style,
        image,
        title,
        description,
    } = props;

    const getContainerClassNames = () => classnames('react-rainbow-feature-list_item-container', className);

    return (
        <div className={getContainerClassNames()} style={style}>
            <div>{image}</div>
            <h1 className="react-rainbow-feature-list_item-title">{title}</h1>
            <p className="react-rainbow-feature-list_item-description">{description}</p>
        </div>
    );
}

Item.propTypes = {
    image: PropTypes.node,
    title: PropTypes.string,
    description: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.object,
};

Item.defaultProps = {
    image: null,
    title: null,
    description: null,
    className: undefined,
    style: undefined,
};
