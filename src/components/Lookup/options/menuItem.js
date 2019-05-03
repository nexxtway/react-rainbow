/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.handleHover = this.handleHover.bind(this);
    }

    getContainerClassNames() {
        const { isActive } = this.props;
        return classnames('rainbow-lookup_menu-item', {
            'rainbow-lookup_menu-item--active': isActive,
        });
    }

    handleClick() {
        const {
            label,
            description,
            icon,
            onClick,
        } = this.props;
        const option = {
            label,
            description,
            icon,
        };
        onClick(option);
    }

    handleHover() {
        const { onHover, index } = this.props;
        onHover(index);
    }

    render() {
        const {
            label,
            description,
            icon,
        } = this.props;

        return (
            <li
                className={this.getContainerClassNames()}
                role="presentation"
                onClick={this.handleClick}
                onMouseEnter={this.handleHover}>

                <a
                    href="javascript:void(0);"
                    role="menuitem"
                    ref={this.itemRef}>

                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-lookup_menu-item_icon-container">
                            {icon}
                        </span>
                    </RenderIf>
                    <span className="rainbow-lookup_menu-item_label-container">
                        {label}
                        <RenderIf isTrue={!!description}>
                            <span className="rainbow-lookup_menu-item_description">
                                {description}
                            </span>
                        </RenderIf>
                    </span>
                </a>
            </li>
        );
    }
}

MenuItem.propTypes = {
    label: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.node,
    ]),
    description: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    onHover: PropTypes.func,
    index: PropTypes.number,
};

MenuItem.defaultProps = {
    label: undefined,
    description: undefined,
    icon: undefined,
    onClick: () => {},
    isActive: false,
    onHover: () => {},
    index: undefined,
};
