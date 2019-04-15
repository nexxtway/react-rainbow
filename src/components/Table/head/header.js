import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import RenderIf from '../../RenderIf';
import { SELECTABLE_CHECKBOX } from './../helpers/columns';
import SortArrowIcon from './sortArrowIcon';
import ResizeBar from './resizeBar';
import SelectableHeader from './selectableHeader';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    getClassName() {
        const { sortable, isSelected } = this.props;
        return classnames('rainbow-table_header', {
            'rainbow-table_header--sortable': sortable,
            'rainbow-table_header--selected': isSelected,
        });
    }

    getTabIndex() {
        const { isSelected } = this.props;
        if (isSelected) {
            return 0;
        }
        return -1;
    }

    getHeaderContent() {
        const { content } = this.props;
        if (typeof content === 'string') {
            return content;
        }
        return undefined;
    }

    isResizable() {
        const { resizeColumnDisabled } = this.props;
        return !resizeColumnDisabled;
    }

    handleResize(widthDelta) {
        const { onResize, colIndex } = this.props;
        onResize(widthDelta, colIndex);
    }

    handleSort(event) {
        const { onSort, field, sortable, sortDirection } = this.props;
        if (sortable) {
            onSort(event, field, sortDirection);
        }
    }

    render() {
        const {
            content,
            sortDirection,
            minColumnWidth,
            maxColumnWidth,
            sortable,
            computedWidth,
            type,
            onSelectAllRows,
            onDeselectAllRows,
            tableId,
            maxRowSelection,
            bulkSelection,
        } = this.props;
        const headerStyles = {
            width: computedWidth,
        };

        if (type === SELECTABLE_CHECKBOX) {
            return (
                <SelectableHeader
                    onSelectAllRows={onSelectAllRows}
                    onDeselectAllRows={onDeselectAllRows}
                    tableId={tableId}
                    maxRowSelection={maxRowSelection}
                    bulkSelection={bulkSelection}
                    style={headerStyles} />
            );
        }

        return (
            <th
                className={this.getClassName()}
                style={headerStyles}
                scope="col"
                tabIndex={this.getTabIndex()}
                aria-label={this.getHeaderContent()}>

                <div className="rainbow-table_header-wrapper" style={headerStyles}>
                    <div className="rainbow-table_header-container" role="presentation" onClick={this.handleSort}>
                        <span title={this.getHeaderContent()} className="rainbow-table_header-content">{content}</span>
                        <RenderIf isTrue={sortable}>
                            <SortArrowIcon direction={sortDirection} />
                        </RenderIf>
                    </div>
                    <ResizeBar
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        isResizable={this.isResizable()}
                        ariaLabel={this.getHeaderContent()}
                        onResize={this.handleResize}
                        headerWidth={computedWidth} />
                </div>
            </th>
        );
    }
}

Header.propTypes = {
    content: PropTypes.any,
    colIndex: PropTypes.number.isRequired,
    isSelected: PropTypes.bool,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    onSort: PropTypes.func,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
    resizeColumnDisabled: PropTypes.bool,
    field: PropTypes.string,
    computedWidth: PropTypes.number,
    type: PropTypes.string,
    onSelectAllRows: PropTypes.func,
    onDeselectAllRows: PropTypes.func,
    tableId: PropTypes.string.isRequired,
    maxRowSelection: PropTypes.number,
    bulkSelection: PropTypes.oneOf([
        'none', 'some', 'all',
    ]),
};

Header.defaultProps = {
    content: null,
    isSelected: false,
    sortable: false,
    sortDirection: undefined,
    onSort: () => {},
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    onResize: () => {},
    resizeColumnDisabled: false,
    field: undefined,
    computedWidth: 0,
    type: undefined,
    onSelectAllRows: () => {},
    onDeselectAllRows: () => {},
    maxRowSelection: undefined,
    bulkSelection: 'none',
};
