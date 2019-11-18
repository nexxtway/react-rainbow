import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import StyledResizeBar from './styled/resizeBar';
import StyledInput from './styled/input';
import StyledGuideline from './styled/guideline';

export default class ResizeBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            resizeBarStyle: {
                willChange: 'transform',
            },
        };
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
    }

    handleMouseUp(event) {
        event.preventDefault();
        const { onResize } = this.props;
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
        onResize(this.newXPosition);
        this.setState({
            resizeBarStyle: { willChange: 'transform' },
        });
    }

    handleMouseMove(event) {
        event.preventDefault();
        const { minColumnWidth, maxColumnWidth, headerWidth } = this.props;
        this.newXPosition = event.clientX - this.startXPosition;
        const minXPosition = minColumnWidth - headerWidth;
        const maxXPosition = maxColumnWidth - headerWidth;
        if (this.newXPosition < minXPosition) {
            this.newXPosition = minXPosition;
        } else if (this.newXPosition > maxXPosition) {
            this.newXPosition = maxXPosition;
        }
        this.setState({
            resizeBarStyle: {
                transform: `translateX(${this.newXPosition}px)`,
                willChange: 'transform',
            },
        });
    }

    handleMouseDown(event) {
        event.preventDefault();
        this.newXPosition = 0;
        this.startXPosition = event.clientX;
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        const { minColumnWidth, maxColumnWidth, isResizable, ariaLabel } = this.props;
        const { resizeBarStyle } = this.state;

        return (
            <RenderIf isTrue={isResizable}>
                <StyledResizeBar
                    className="rainbow-table_header-resize-bar"
                    role="presentation"
                    draggable
                    onMouseDown={this.handleMouseDown}
                    style={resizeBarStyle}
                >
                    <StyledInput
                        as="input"
                        type="range"
                        min={minColumnWidth}
                        max={maxColumnWidth}
                        aria-label={ariaLabel}
                        tabIndex={-1}
                    />

                    <StyledGuideline
                        role="presentation"
                        draggable
                        onMouseDown={this.handleMouseDown}
                    />
                </StyledResizeBar>
            </RenderIf>
        );
    }
}

ResizeBar.propTypes = {
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    isResizable: PropTypes.bool.isRequired,
    ariaLabel: PropTypes.string,
    onResize: PropTypes.func,
    headerWidth: PropTypes.number.isRequired,
};

ResizeBar.defaultProps = {
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    ariaLabel: undefined,
    onResize: () => {},
};
