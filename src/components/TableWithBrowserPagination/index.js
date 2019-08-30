import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Pagination from '../Pagination';
import Table from '../Table';
import RenderIf from '../RenderIf';
import Options from './options';
import getPageItems from './helpers/getPageItems';
import './styles.css';

/**
 * It implement a client side pagination experience. It basically wire up the Table and
 * the Pagination component in a compose manner and keep the internal state of the active page
 * based on a new prop `pageSize`.
 * @category DataView
 */
export default class TableWithBrowserPagination extends React.Component {
    constructor(props) {
        super(props);
        const { data, pageSize } = props;
        this.state = {
            activePage: 1,
            pageItems: getPageItems({
                data,
                activePage: 1,
                pageSize,
            }),
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.table = React.createRef();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.updateData();
        }
    }

    getPaginationContainerClassNames() {
        const { paginationAlignment } = this.props;

        return classnames(
            'rainbow-table-with-browser-pagination_pagination-container',
            `rainbow-table-with-browser-pagination_pagination--${paginationAlignment}`,
        );
    }

    updateData() {
        const { data, pageSize } = this.props;
        const { activePage } = this.state;
        const totalPages = Math.ceil(data.length / pageSize);
        this.setState({
            activePage: activePage <= totalPages ? activePage : 1,
            pageItems: getPageItems({
                data,
                activePage,
                pageSize,
            }),
        });
    }

    moveToPage(page) {
        const { data, pageSize } = this.props;
        this.setState({
            activePage: page,
            pageItems: getPageItems({
                data,
                activePage: page,
                pageSize,
            }),
        });
        this.table.current.scrollTop();
    }

    handleChange(event, page) {
        this.moveToPage(page);
    }

    handleSelectChange(event) {
        const page = Number(event.target.value);
        this.moveToPage(page);
    }

    render() {
        const {
            style,
            className,
            paginationAlignment,
            pageSize,
            data,
            children,
            ...rest
        } = this.props;
        const { activePage, pageItems } = this.state;
        const pages = Math.ceil(data.length / pageSize);
        const showPagination = pages > 1;

        return (
            <div className={className} style={style}>
                <Table
                    className="rainbow-table-with-browser-pagination_table"
                    data={pageItems}
                    {...rest}
                    ref={this.table}
                >
                    {children}
                </Table>
                <RenderIf isTrue={showPagination}>
                    <div className={this.getPaginationContainerClassNames()}>
                        <Pagination
                            pages={pages}
                            activePage={activePage}
                            onChange={this.handleChange}
                        />
                        <RenderIf isTrue={pages > 6}>
                            <div className="rainbow-table-with-browser-pagination_select-container">
                                <select
                                    className="rainbow-table-with-browser-pagination_select"
                                    onChange={this.handleSelectChange}
                                    value={activePage}
                                >
                                    <Options pages={pages} />
                                </select>
                            </div>
                        </RenderIf>
                    </div>
                </RenderIf>
            </div>
        );
    }
}

TableWithBrowserPagination.propTypes = {
    /** Determines the alignment of the pagination relative to the container.
     * Available options are: center, left, and right.
     * This value defaults to center. */
    paginationAlignment: PropTypes.oneOf(['center', 'left', 'right']),
    /** Indicates the amount of data that will be showed per page. */
    pageSize: PropTypes.number,
    /** An array containing the objects(rows) to be displayed. */
    data: PropTypes.array,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

TableWithBrowserPagination.defaultProps = {
    paginationAlignment: 'center',
    className: undefined,
    style: undefined,
    pageSize: Infinity,
    data: [],
};
