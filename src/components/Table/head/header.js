import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import SortArrowIcon from './sortArrowIcon';
import ResizeBar from './resizeBar';
import RenderIf from '../../RenderIf';

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

    componentDidMount() {
        const { width, defaultWidth } = this.props;
        const hasWidthSet = width || defaultWidth;
        if (!hasWidthSet && this.headerRef.current) {
            this.setInitialWidth();
        }
    }

    setInitialWidth() {
        this.setState({
            width: this.headerRef.current.getBoundingClientRect().width,
        });
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
        const { resizeColumnDisabled, width } = this.props;
        return !resizeColumnDisabled && width === undefined;
    }

    handleResize(width, newXPosition) {
        const { onResize } = this.props;
        onResize(newXPosition);
        this.setState({ width });
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
        } = this.props;
        const { width } = this.state;
        const headerStyles = {
            width,
        };

        return (
            <th
                className={this.getClassName()}
                style={headerStyles}
                scope="col"
                tabIndex={this.getTabIndex()}
                aria-label={this.getHeaderContent()}
                ref={this.headerRef}>

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
                        headerWidth={width} />
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
    onResize: PropTypes.func,
    resizeColumnDisabled: PropTypes.bool,
    field: PropTypes.string,
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
    onResize: () => {},
    resizeColumnDisabled: false,
    field: undefined,
};
