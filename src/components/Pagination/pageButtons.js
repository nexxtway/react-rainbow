import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import getFirstItem from './get-first-item';

function getButtonClassName(page, activePage, index, buttonsToRender) {
    return classnames('rainbow-pagination_button', {
        'rainbow-pagination_button--first': index === 0,
        'rainbow-pagination_button--last': index === buttonsToRender - 1,
        'rainbow-pagination_button--active': activePage === page,
    });
}

function getAriaCurrent(page, activePage) {
    if (page === activePage) {
        return 'page';
    }
    return undefined;
}

export default function PageButtons(props) {
    const { pages, activePage, onChange } = props;

    const renderButtons = () => {
        const firstItem = pages > 4 ? getFirstItem(pages, activePage) : 1;
        const buttonsToRender = pages > 4 ? 5 : pages;
        return Array(buttonsToRender).fill(0).map((item, index) => {
            const page = firstItem + index;
            const key = `page-button-${page}`;
            const ariaLabel = `Goto Page ${page}`;

            return (
                <li
                    key={key}
                    className={getButtonClassName(page, activePage, index, buttonsToRender)}>
                    <a
                        onClick={event => onChange(event, page)}
                        aria-current={getAriaCurrent(page)}
                        aria-label={ariaLabel}
                        role="presentation">
                    <span>
                        {page}
                    </span>
                    </a>
                </li>
            );
        });
    };

    return renderButtons();
}

PageButtons.propTypes = {
    activePage: PropTypes.number,
    pages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

PageButtons.defaultProps = {
    activePage: undefined,
};
