/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleHover = this.handleHover.bind(this);
    }

    getContainerClassNames() {
        const { isActive } = this.props;
        return classnames('rainbow-lookup_menu-item', {
            'rainbow-lookup_menu-item--active': isActive,
        });
    }

    handleHover() {
        const { onHover, index } = this.props;
        onHover(index);
    }

    render() {
        const { label, description, icon, onClick, isActive, id } = this.props;

        return (
            <li
                className={this.getContainerClassNames()}
                role="presentation"
                onMouseDown={onClick}
                onMouseEnter={this.handleHover}
            >
                <a
                    aria-selected={isActive}
                    id={id}
                    tabIndex={-1}
                    className="rainbow-lookup_menu-item-link"
                    href="javascript:void(0);"
                    role="option"
                    ref={this.itemRef}
                >
                    <RenderIf isTrue={!!icon}>
                        <span className="rainbow-lookup_menu-item_icon-container">{icon}</span>
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
    label: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.node,
    onClick: PropTypes.func,
    isActive: PropTypes.bool,
    onHover: PropTypes.func,
    index: PropTypes.number,
    id: PropTypes.string,
};

MenuItem.defaultProps = {
    label: undefined,
    description: undefined,
    icon: undefined,
    onClick: () => {},
    isActive: false,
    onHover: () => {},
    index: undefined,
    id: undefined,
};
