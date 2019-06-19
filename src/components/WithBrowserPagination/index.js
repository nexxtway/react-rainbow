import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Pagination from '../Pagination';
import RenderIf from '../RenderIf';
import './styles.css';

function computedPageItems({ data, activePage, pageSize }) {
    if (pageSize > data.length) {
        return data;
    }
    const start = (activePage - 1) * pageSize;
    const end = Math.min(activePage * pageSize, data.length);
    return data.slice(start, end);
}

/**
 * @category Layout
 */
export default class WithBrowserPagination extends React.Component {
    constructor(props) {
        super(props);
        const { data, pageSize } = props;
        this.state = {
            activePage: 1,
            pageItems: computedPageItems({
                data,
                activePage: 1,
                pageSize,
            }),
        };
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidUpdate(prevProps) {
        if (prevProps.data !== this.props.data) {
            this.updateData();
        }
    }

    getPaginationContainerClassNames() {
        const { paginationAlignment } = this.props;

        return classnames(
            'rainbow-with-browser-pagination_pagination-container',
            `rainbow-with-browser-pagination_pagination--${paginationAlignment}`,
        );
    }

    updateData() {
        const { data, pageSize } = this.props;
        const { activePage } = this.state;
        const totalPages = Math.ceil(data.length / pageSize);
        this.setState({
            activePage: activePage <= totalPages ? activePage : 1,
            pageItems: computedPageItems({
                data,
                activePage,
                pageSize,
            }),
        });
    }

    handleChange(event, page) {
        const { data, pageSize } = this.props;
        this.setState({
            activePage: page,
            pageItems: computedPageItems({
                data,
                activePage: page,
                pageSize,
            }),
        });
    }

    render() {
        const {
            style,
            className,
            paginationAlignment,
            component: Component,
            pageSize,
            data,
            children,
            ...rest
        } = this.props;
        const { activePage, pageItems } = this.state;
        const pages = Math.ceil(data.length / pageSize);

        function renderComponent() {
            if (children) {
                return (
                    <Component data={pageItems} {...rest}>
                        {children}
                    </Component>
                );
            }
            return <Component data={pageItems} {...rest} />;
        }
        return (
            <div className={className} style={style}>
                {renderComponent()}
                <RenderIf isTrue={pages > 0}>
                    <Pagination
                        className={this.getPaginationContainerClassNames()}
                        pages={pages}
                        activePage={activePage}
                        onChange={this.handleChange}
                    />
                </RenderIf>
            </div>
        );
    }
}

WithBrowserPagination.propTypes = {
    /** Determines the alignment of the pagination relative to the container.
     * Available options are: center, left, and right.
     * This value defaults to center. */
    paginationAlignment: PropTypes.oneOf(['center', 'left', 'right']),
    /** The component that is going to be use to render the paginated data. */
    component: PropTypes.func,
    /** The total number of pages. e.g. if your collection has 120 items and the page size is 50 then pages={Math.ceil(120/50)}/pages={3}  */
    pageSize: PropTypes.number,
    data: PropTypes.array,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

WithBrowserPagination.defaultProps = {
    paginationAlignment: 'center',
    className: undefined,
    style: undefined,
    pageSize: Infinity,
    data: [],
    component: () => {},
};
