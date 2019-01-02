/* eslint-disable no-param-reassign,class-methods-use-this */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { uniqueId } from '../../../libs/utils';
import RenderIf from '../../RenderIf';
import ArrowDown from './arrowDown';

function getClassName(sortable, selected) {
    return classnames(
        'rainbow-table_header',
        {
            'rainbow-table_header--sortable': sortable,
            'rainbow-table_header--selected': selected,
        },
    );
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
        this.handleMouseMove = this.handleMouseMove.bind(this);
        this.handleMouseUp = this.handleMouseUp.bind(this);
        this.headerId = uniqueId('header');
        this.headerContainer = React.createRef();
        this.resizeBar = React.createRef();
    }

    getHeaderTitle() {
        const { content } = this.props;
        if (typeof content === 'string') {
            return content;
        }
        return null;
    }

    handleMouseUp(event) {
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('mousemove', this.handleMouseMove);
        const headerContainerWidth = this.headerContainer.current.getBoundingClientRect().width;
        const width = `${headerContainerWidth + this.newXPosition}px`;
        const { columnIndex, onResize } = this.props;
        onResize(event, columnIndex, width);
    }

    handleMouseMove(event) {
        this.newXPosition = event.clientX - this.startXPosition;
        this.resizeBar.current.style.transform = `translateX(${this.newXPosition}px)`;
    }

    handleMouseDown(dragEvent) {
        dragEvent.preventDefault();
        this.startXPosition = dragEvent.clientX;
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }

    handleClick(event) {
        const { sortable, onColumnSelect, columnIndex } = this.props;
        if (sortable) {
            onColumnSelect(event, columnIndex);
        }
    }

    render() {
        const { content, isSelected, sortable, sortDirection, width } = this.props;
        const headerStyles = { width };
        return (
            <th
                className={getClassName(sortable, isSelected)}
                style={headerStyles}
                scope="col"
                onClick={this.handleClick}
                ref={this.headerContainer}>

                <div className="rainbow-table_header-content-wrapper">
                    <span title={this.getHeaderTitle()} className="rainbow-table_header-content">{content}</span>
                    <RenderIf isTrue={isSelected}>
                        <ArrowDown direction={sortDirection} />
                    </RenderIf>
                </div>
                <div
                    className="rainbow-table_header-resize-bar"
                    role="presentation"
                    draggable
                    onMouseDown={this.handleMouseDown}
                    ref={this.resizeBar}>

                    <div
                        className="rainbow-table_header-resize-bar_table-guideline"
                        role="presentation"
                        draggable
                        onMouseDown={this.handleMouseDown} />
                </div>
            </th>
        );
    }
}

Header.propTypes = {
    content: PropTypes.any,
    isSelected: PropTypes.bool,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    onColumnSelect: PropTypes.func,
    columnIndex: PropTypes.number,
    onResize: PropTypes.func,
    width: PropTypes.string,
};

Header.defaultProps = {
    content: null,
    isSelected: false,
    sortable: false,
    sortDirection: 'asc',
    onColumnSelect: () => {},
    columnIndex: undefined,
    onResize: () => {},
    width: 'unset',
};
