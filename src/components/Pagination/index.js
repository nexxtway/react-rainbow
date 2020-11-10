import React from 'react';
import PropTypes from 'prop-types';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import NavigationButton from './navigationButton';
import PageButtonsContainer from './pageButtonsContainer';
import StyledNav from './styled/nav';
import StyledPaginationContainer from './styled/paginationContainer';

/**
 * The Pagination component shows you the pagination options for dividing content into pages.
 * It is very useful when you want to display a large recordset on multiple pages.
 * @category Layout
 */
export default function Pagination(props) {
    const { pages, activePage, onChange, className, style, variant } = props;

    const isFirstItemSelected = activePage === 1;
    const isLastItemSelected = activePage === pages;

    return (
        <StyledNav className={className} aria-label="pagination" style={style}>
            <StyledPaginationContainer>
                {
                    pages === 1 ? (
                        <>
                            <NavigationButton
                                dataId="previous-page-button"
                                icon={<LeftArrow />}
                                onClick={event => onChange(event, activePage - 1)}
                                disabled={isFirstItemSelected}
                                ariaLabel="Goto Previous Page"
                                variant={variant}
                            />
                            <PageButtonsContainer
                                onChange={onChange}
                                pages={pages}
                                activePage={activePage}
                                variant={variant}
                            />
                            <NavigationButton
                                dataId="next-page-button"
                                icon={<RightArrow />}
                                onClick={event => onChange(event, activePage + 1)}
                                disabled={isLastItemSelected}
                                ariaLabel="Goto Next Page"
                                variant={variant}
                            />
                        </>
                    ) : (
                        <>
                            <PageButtonsContainer
                                onChange={onChange}
                                pages={pages}
                                activePage={activePage}
                                variant={variant}
                            />
                        </>
                    )
                }
            </StyledPaginationContainer>
        </StyledNav>
    );
}

Pagination.propTypes = {
    /** The total number of pages. e.g. if your collection has 120 items and the page
    size is 50 then pages={Math.ceil(120/50)}/pages={3} */
    pages: PropTypes.number.isRequired,
    /** The number of the page that is selected. */
    activePage: PropTypes.number,
    /** The action triggered when page button is clicked. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
    /** The variant changes the appearance of the Input. Accepted variants include default
     * and shaded. This value defaults to default. */
    variant: PropTypes.oneOf(['default', 'shaded']),
};

Pagination.defaultProps = {
    activePage: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
    variant: 'default',
};
