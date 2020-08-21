import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import { SELECTABLE_CHECKBOX } from './../helpers/columns';
import SortArrowIcon from './sortArrowIcon';
import ResizeBar from './resizeBar';
import SelectableHeader from './selectableHeader';
import StyledTh from './styled/th';
import StyledWrapper from './styled/wrapper';
import StyledHeaderContainer from './styled/headerContainer';
import StyledContent from './styled/content';
import StyledScrollShadow from './styled/scrollShadow';

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.handleSort = this.handleSort.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    getTabIndex() {
        const { isSorted } = this.props;
        if (isSorted) {
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
        const { resizeColumnDisabled, width } = this.props;
        return !resizeColumnDisabled && width === undefined;
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
            isSorted,
            computedWidth,
            type,
            onSelectAllRows,
            onDeselectAllRows,
            tableId,
            maxRowSelection,
            bulkSelection,
            hasScroll,
        } = this.props;

        const headerStyles = {
            width: computedWidth,
        };

        const isResizable = this.isResizable();

        if (type === SELECTABLE_CHECKBOX) {
            return (
                <SelectableHeader
                    onSelectAllRows={onSelectAllRows}
                    onDeselectAllRows={onDeselectAllRows}
                    tableId={tableId}
                    maxRowSelection={maxRowSelection}
                    bulkSelection={bulkSelection}
                    hasScroll={hasScroll}
                    style={headerStyles}
                />
            );
        }

        return (
            <StyledTh
                style={headerStyles}
                sortable={sortable}
                isSorted={isSorted}
                isResizable={isResizable}
                scope="col"
                tabIndex={this.getTabIndex()}
                aria-label={this.getHeaderContent()}
            >
                <StyledWrapper style={headerStyles}>
                    <StyledHeaderContainer
                        className="rainbow-table_header-container"
                        role="presentation"
                        onClick={this.handleSort}
                    >
                        <StyledContent
                            title={this.getHeaderContent()}
                            className="rainbow-table_header-content"
                        >
                            {content}
                        </StyledContent>
                        <RenderIf isTrue={sortable}>
                            <SortArrowIcon direction={sortDirection} />
                        </RenderIf>
                    </StyledHeaderContainer>
                    <ResizeBar
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        isResizable={isResizable}
                        ariaLabel={this.getHeaderContent()}
                        onResize={this.handleResize}
                        headerWidth={computedWidth}
                    />
                    <StyledScrollShadow hasScroll={hasScroll} />
                </StyledWrapper>
            </StyledTh>
        );
    }
}

Header.propTypes = {
    content: PropTypes.any,
    colIndex: PropTypes.number.isRequired,
    isSorted: PropTypes.bool,
    sortable: PropTypes.bool,
    sortDirection: PropTypes.string,
    onSort: PropTypes.func,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    onResize: PropTypes.func,
    resizeColumnDisabled: PropTypes.bool,
    field: PropTypes.string,
    width: PropTypes.number,
    computedWidth: PropTypes.number,
    type: PropTypes.string,
    onSelectAllRows: PropTypes.func,
    onDeselectAllRows: PropTypes.func,
    tableId: PropTypes.string.isRequired,
    maxRowSelection: PropTypes.number,
    bulkSelection: PropTypes.oneOf(['none', 'some', 'all']),
    hasScroll: PropTypes.bool,
};

Header.defaultProps = {
    content: null,
    isSorted: false,
    sortable: false,
    sortDirection: undefined,
    onSort: () => {},
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    onResize: () => {},
    resizeColumnDisabled: false,
    field: undefined,
    width: undefined,
    computedWidth: 0,
    type: undefined,
    onSelectAllRows: () => {},
    onDeselectAllRows: () => {},
    maxRowSelection: undefined,
    bulkSelection: 'none',
    hasScroll: false,
};
