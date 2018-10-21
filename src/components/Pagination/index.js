import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonIcon from '../ButtonIcon';
import LeftArrow from './leftArrow';
import RightArrow from './rightArrow';
import PageButtons from './pageButtons';
import './styles.css';

export default function Pagination(props) {
    const { pages, activePage, onChange, className, style } = props;

    const getContainerClassNames = () => classnames('rainbow-pagination_container', className);

    const isFirstItemSelected = activePage === 1;
    const isLastItemSelected = activePage === pages;

    return (
        <div className={getContainerClassNames()} style={style}>
            <ButtonIcon
                variant="border-filled"
                className="rainbow-pagination_button rainbow-pagination_button-icon"
                icon={<LeftArrow />}
                onClick={() => onChange(activePage - 1)}
                disabled={isFirstItemSelected} />
            <PageButtons onChange={onChange} pages={pages} activePage={activePage} />
            <ButtonIcon
                variant="border-filled"
                className="rainbow-pagination_button rainbow-pagination_button-icon"
                icon={<RightArrow />}
                onClick={() => onChange(activePage + 1)}
                disabled={isLastItemSelected} />
        </div>
    );
}

Pagination.propTypes = {
    /** The number of pages. */
    pages: PropTypes.number.isRequired,
    /** The number of the page that is selected. */
    activePage: PropTypes.number,
    /** The action triggered when page button is clicked. */
    onChange: PropTypes.func,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied to the outer element. */
    style: PropTypes.object,
};

Pagination.defaultProps = {
    activePage: undefined,
    onChange: () => {},
    className: undefined,
    style: undefined,
};
