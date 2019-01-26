import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';

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
        const { minColumnWidth, maxColumnWidth, onResize } = this.props;
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
        const newWidth = this.headerWidth + this.newXPosition;
        this.setState({
            resizeBarStyle: { willChange: 'transform' },
        });
        if (newWidth < minColumnWidth) {
            onResize(minColumnWidth, this.newXPosition);
        } else if (newWidth > maxColumnWidth) {
            onResize(maxColumnWidth, this.newXPosition);
        } else {
            onResize(newWidth, this.newXPosition);
        }
    }

    handleMouseMove(event) {
        event.preventDefault();
        const { minColumnWidth, maxColumnWidth } = this.props;
        this.newXPosition = event.clientX - this.startXPosition;
        const minXPosition = minColumnWidth - this.headerWidth;
        const maxXPosition = maxColumnWidth - this.headerWidth;
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

    handleMouseDown(dragEvent) {
        dragEvent.preventDefault();
        const { headerWidth, headerRef } = this.props;
        this.headerWidth = headerWidth || headerRef.current.getBoundingClientRect().width;
        this.newXPosition = 0;
        this.startXPosition = dragEvent.clientX;
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    render() {
        const {
            minColumnWidth,
            maxColumnWidth,
            resizeGuideLineHeight,
            isResizable,
            ariaLabel,
        } = this.props;
        const { resizeBarStyle } = this.state;
        const resizeGuideLineStyles = {
            height: resizeGuideLineHeight,
        };

        return (
            <RenderIf isTrue={isResizable}>
                <input
                    type="range"
                    min={minColumnWidth}
                    max={maxColumnWidth}
                    aria-label={ariaLabel}
                    tabIndex={-1}
                    className="rainbow-table_header-resize-bar_input" />

                <span
                    className="rainbow-table_header-resize-bar"
                    role="presentation"
                    draggable
                    onMouseDown={this.handleMouseDown}
                    style={resizeBarStyle}>

                    <span
                        className="rainbow-table_header-resize-bar_table-guideline"
                        style={resizeGuideLineStyles}
                        role="presentation"
                        draggable
                        onMouseDown={this.handleMouseDown} />

                </span>
            </RenderIf>
        );
    }
}

ResizeBar.propTypes = {
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    resizeGuideLineHeight: PropTypes.number,
    isResizable: PropTypes.bool.isRequired,
    ariaLabel: PropTypes.string,
    onResize: PropTypes.func,
    headerRef: PropTypes.object,
    headerWidth: PropTypes.number,
};

ResizeBar.defaultProps = {
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    resizeGuideLineHeight: 0,
    ariaLabel: undefined,
    onResize: () => {},
    headerRef: null,
    headerWidth: undefined,
};
