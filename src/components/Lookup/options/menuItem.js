/* eslint-disable no-script-url */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import StyledItem from './styled/item';
import StyledLi from './styled/li';
import StyledIcon from './styled/icon';
import StyledContent from './styled/content';
import StyledDescription from './styled/description';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);
        this.itemRef = React.createRef();
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover() {
        const { onHover, index } = this.props;
        onHover(index);
    }

    render() {
        const { label, description, icon, onClick, isActive, id } = this.props;

        return (
            <StyledLi role="presentation" onMouseDown={onClick} onMouseEnter={this.handleHover}>
                <StyledItem
                    aria-selected={isActive}
                    isActive={isActive}
                    id={id}
                    tabIndex={-1}
                    role="option"
                    ref={this.itemRef}
                >
                    <RenderIf isTrue={!!icon}>
                        <StyledIcon>{icon}</StyledIcon>
                    </RenderIf>
                    <StyledContent>
                        {label}
                        <RenderIf isTrue={!!description}>
                            <StyledDescription>{description}</StyledDescription>
                        </RenderIf>
                    </StyledContent>
                </StyledItem>
            </StyledLi>
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
