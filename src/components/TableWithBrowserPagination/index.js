import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Pagination from '../Pagination';
import Table from '../Table';
import RenderIf from '../RenderIf';
import Options from './options';
import getPageItems from './helpers/getPageItems';
import StyledContainer from './styled/container';
import StyledPaginationContainer from './styled/paginationContainer';
import StyledSelectContainer from './styled/selectContainer';
import StyledSelect from './styled/select';

/**
 * It implement a client side pagination experience. It basically wire up the Table and
 * the Pagination component in a compose manner and keep the internal state of the active page
 * based on a new prop `pageSize`.
 * @category DataView
 */
export default class TableWithBrowserPagination extends Component {
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
        const { data, pageSize } = this.props;
        if (prevProps.data !== data || prevProps.pageSize !== pageSize) {
            this.updateData();
        }
    }

    updateData() {
        const { data, pageSize } = this.props;
        const { activePage } = this.state;
        const totalPages = Math.ceil(data.length / pageSize);
        const nextActivePage = activePage <= totalPages ? activePage : 1;
        this.setState({
            activePage: nextActivePage,
            pageItems: getPageItems({
                data,
                activePage: nextActivePage,
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
            <StyledContainer className={className} style={style}>
                <Table data={pageItems} {...rest} ref={this.table}>
                    {children}
                </Table>
                <RenderIf isTrue={showPagination}>
                    <StyledPaginationContainer paginationAlignment={paginationAlignment}>
                        <Pagination
                            pages={pages}
                            activePage={activePage}
                            onChange={this.handleChange}
                        />
                        <RenderIf isTrue={pages > 6}>
                            <StyledSelectContainer>
                                <StyledSelect onChange={this.handleSelectChange} value={activePage}>
                                    <Options pages={pages} />
                                </StyledSelect>
                            </StyledSelectContainer>
                        </RenderIf>
                    </StyledPaginationContainer>
                </RenderIf>
            </StyledContainer>
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
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

TableWithBrowserPagination.defaultProps = {
    paginationAlignment: 'center',
    className: undefined,
    style: undefined,
    pageSize: Infinity,
    data: [],
    children: undefined,
};
