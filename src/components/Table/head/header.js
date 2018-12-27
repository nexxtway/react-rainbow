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

function prevetDefaultDrag() {
    return false;
}

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.dragResizeDiv = this.dragResizeDiv.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
    }

    onMouseUp(event) {
        document.removeEventListener('mouseup', this.onMouseUp);
        document.removeEventListener('mousemove', this.onMouseMove);
        const resizeBarRect = this.resizeBar.getBoundingClientRect();
        const width = `${resizeBarRect.left - this.parentHeader.left}px`;
        this.resizeBar.style.zIndex = '0';
        const { columnIndex, onResize } = this.props;
        onResize(event, columnIndex, width);
    }

    onMouseMove(event) {
        const newX = event.clientX;
        let newRight = this.startX - newX;

        if (newRight < this.rightEdge) {
            newRight = this.rightEdge;
        } else if (newRight > this.leftEdge) {
            newRight = this.leftEdge;
        }
        this.resizeBar.style.right = `${newRight}px`;
    }

    dragResizeDiv(dragEvent) {
        dragEvent.preventDefault();
        const headerContainer = document.getElementById('header-container').getBoundingClientRect();
        this.resizeBar = dragEvent.target;
        this.parentHeader = dragEvent.target.parentElement.getBoundingClientRect();
        const resizeBarRect = this.resizeBar.getBoundingClientRect();
        this.startX = dragEvent.clientX;
        this.rightEdge = resizeBarRect.right - headerContainer.right;
        this.leftEdge = resizeBarRect.left - headerContainer.left;
        this.resizeBar.style.zIndex = '100';

        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }

    handleClick(event) {
        const { sortable, onColumnSelect, columnIndex } = this.props;
        if (sortable) {
            onColumnSelect(event, columnIndex);
        }
    }

    render() {
        const { content, isSelected, sortable, sortDirection, width } = this.props;
        const styles = { width };
        return (
            <th
                key={uniqueId('header')}
                className={getClassName(sortable, isSelected)}
                onClick={this.handleClick}
                style={styles}>
                <div
                    className="rainbow-table_header-content">
                    {content}
                    <RenderIf isTrue={isSelected}>
                        <ArrowDown direction={sortDirection} />
                    </RenderIf>
                </div>
                <div
                    className="rainbow-table_header-resize-bar"
                    role="presentation"
                    draggable
                    onMouseDown={this.dragResizeDiv}
                    onDragStart={prevetDefaultDrag} />
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
