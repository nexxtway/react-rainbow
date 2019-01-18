/* eslint-disable no-param-reassign,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';
import ArrowDown from './arrowDown';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.handleColumnSelect = this.handleColumnSelect.bind(this);
        this.headerContainer = React.createRef();
        this.resizeBar = React.createRef();
    }

    setColumnWdith(width) {
        const { columnIndex, onResize } = this.props;
        onResize(columnIndex, width);
    }

    getClassName() {
        const { sortable, isSelected } = this.props;
        return classnames(
            'rainbow-table_header',
            {
                'rainbow-table_header--sortable': sortable,
                'rainbow-table_header--selected': isSelected,
            },
        );
    }

    getHeaderTitle() {
        const { content } = this.props;
        if (typeof content === 'string') {
            return content;
        }
        return undefined;
    }

    handleMouseUp(event) {
        event.preventDefault();
        if (this.headerContainer.current !== null) {
            document.removeEventListener('mouseup', this.handleMouseUp);
            document.removeEventListener('mousemove', this.handleMouseMove);
            const headerContainerWidth = this.headerContainer.current.getBoundingClientRect().width;
            this.resizeBar.current.style.transform = 'unset';
            const { minColumnWidth, maxColumnWidth } = this.props;
            const width = headerContainerWidth + this.newXPosition;
            if (width < minColumnWidth) {
                this.setColumnWdith(minColumnWidth);
            } else if (width > maxColumnWidth) {
                this.setColumnWdith(maxColumnWidth);
            } else {
                this.setColumnWdith(width);
            }
        }
    }

    handleMouseMove(event) {
        event.preventDefault();
        const { minColumnWidth, maxColumnWidth } = this.props;
        this.newXPosition = event.clientX - this.startXPosition;
        const { width } = this.headerContainer.current.getBoundingClientRect();
        const minXPosition = minColumnWidth - width;
        const maxXPosition = maxColumnWidth - width;
        if (this.newXPosition < minXPosition) {
            this.newXPosition = minXPosition;
        } else if (this.newXPosition > maxXPosition) {
            this.newXPosition = maxXPosition;
        }
        this.resizeBar.current.style.transform = `translateX(${this.newXPosition}px)`;
    }

    handleMouseDown(dragEvent) {
        dragEvent.preventDefault();
        const { isResizable } = this.props;
        if (isResizable) {
            this.newXPosition = 0;
            this.startXPosition = dragEvent.clientX;
            document.addEventListener('mousemove', this.handleMouseMove);
            document.addEventListener('mouseup', this.handleMouseUp);
        }
    }

    handleColumnSelect(event) {
        const { onColumnSelect, columnIndex, sortable } = this.props;
        if (sortable) {
            onColumnSelect(event, columnIndex);
        }
    }

    render() {
        const {
            content,
            isResizable,
            sortDirection,
            minColumnWidth,
            maxColumnWidth,
            width,
            resizeGuideLineHeight,
        } = this.props;
        const headerStyles = { width };
        const resizeGuideLineStyles = { height: resizeGuideLineHeight };

        return (
            <div
                className={this.getClassName()}
                style={headerStyles}
                tabIndex={-1}
                aria-label={this.getHeaderTitle()}
                ref={this.headerContainer}>
                <div className="rainbow-table_header-wrapper">
                    <div className="rainbow-table_header-container" role="presentation" onClick={this.handleColumnSelect}>
                        <span title={this.getHeaderTitle()} className="rainbow-table_header-content">{content}</span>
                        <ArrowDown direction={sortDirection} />
                    </div>

                    <RenderIf isTrue={isResizable}>
                        <div
                            className="rainbow-table_header-resize-bar"
                            role="presentation"
                            draggable
                            onMouseDown={this.handleMouseDown}
                            ref={this.resizeBar}>

                            <input
                                type="range"
                                min={minColumnWidth}
                                max={maxColumnWidth}
                                aria-label={this.getHeaderTitle()}
                                tabIndex={-1}
                                className="rainbow-table_header-resize-bar_input" />

                            <div
                                className="rainbow-table_header-resize-bar_table-guideline"
                                style={resizeGuideLineStyles}
                                role="presentation"
                                draggable
                                onMouseDown={this.handleMouseDown} />

                        </div>
                    </RenderIf>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    content: PropTypes.any,
    isSelected: PropTypes.bool,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    onColumnSelect: PropTypes.func,
    width: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    columnIndex: PropTypes.number,
    onResize: PropTypes.func,
    isResizable: PropTypes.bool,
    resizeGuideLineHeight: PropTypes.number,
};

Header.defaultProps = {
    content: null,
    isSelected: false,
    sortable: false,
    sortDirection: 'asc',
    onColumnSelect: () => {},
    width: undefined,
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    columnIndex: undefined,
    onResize: () => {},
    isResizable: true,
    resizeGuideLineHeight: 0,
};
