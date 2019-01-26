import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ArrowDown from './arrowDown';
import ResizeBar from './resizeBar';

export default class Header extends Component {
    constructor(props) {
        super(props);
        const { width, defaultWidth } = props;
        this.state = {
            width: defaultWidth || width,
        };
        this.handleSort = this.handleSort.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.headerRef = React.createRef();
    }

    getClassName() {
        const { sortable, isSelected } = this.props;
        return classnames('rainbow-table_header', {
            'rainbow-table_header--sortable': sortable,
            'rainbow-table_header--selected': isSelected,
        });
    }

    getHeaderTitle() {
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

    handleResize(width, newXPosition) {
        const { onResize } = this.props;
        this.setState({ width });
        onResize(newXPosition);
    }

    handleSort(event) {
        const { onSort, columnIndex, sortable, sortDirection } = this.props;
        if (sortable) {
            onSort(event, columnIndex, sortDirection);
        }
    }

    render() {
        const {
            content,
            sortDirection,
            minColumnWidth,
            maxColumnWidth,
            resizeGuideLineHeight,
        } = this.props;
        const { width } = this.state;
        const headerStyles = {
            width,
        };

        return (
            <th
                className={this.getClassName()}
                style={headerStyles}
                tabIndex={-1}
                aria-label={this.getHeaderTitle()}
                ref={this.headerRef}>

                <div className="rainbow-table_header-wrapper">
                    <div className="rainbow-table_header-container" role="presentation" onClick={this.handleSort}>
                        <span title={this.getHeaderTitle()} className="rainbow-table_header-content">{content}</span>
                        <ArrowDown direction={sortDirection} />
                    </div>
                    <ResizeBar
                        minColumnWidth={minColumnWidth}
                        maxColumnWidth={maxColumnWidth}
                        resizeGuideLineHeight={resizeGuideLineHeight}
                        isResizable={this.isResizable()}
                        ariaLabel={this.getHeaderTitle()}
                        onResize={this.handleResize}
                        headerWidth={width}
                        headerRef={this.headerRef} />

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
    onSort: PropTypes.func,
    width: PropTypes.number,
    defaultWidth: PropTypes.number,
    minColumnWidth: PropTypes.number,
    maxColumnWidth: PropTypes.number,
    columnIndex: PropTypes.number,
    onResize: PropTypes.func,
    resizeGuideLineHeight: PropTypes.number,
    resizeColumnDisabled: PropTypes.bool,
};

Header.defaultProps = {
    content: null,
    isSelected: false,
    sortable: false,
    sortDirection: undefined,
    onSort: () => {},
    width: undefined,
    defaultWidth: undefined,
    minColumnWidth: undefined,
    maxColumnWidth: undefined,
    columnIndex: undefined,
    onResize: () => {},
    resizeGuideLineHeight: 0,
    resizeColumnDisabled: false,
};
