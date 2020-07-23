/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import getFirstItem from './getFirstItem';
import StyledPageButton from './styled/pageButton';
import Button from './button';

export default function PageButtons(props) {
    const { pages, activePage, onChange } = props;

    const getAriaCurrent = page => {
        if (page === activePage) {
            return 'page';
        }
        return undefined;
    };

    const renderButtons = () => {
        const firstItem = pages > 4 ? getFirstItem(pages, activePage) : 1;
        const buttonsToRender = pages > 4 ? 5 : pages;
        return Array(buttonsToRender)
            .fill(0)
            .map((item, index) => {
                const page = firstItem + index;
                const key = `page-button-${page}`;
                const ariaLabel = `Goto Page ${page}`;
                const isActivePage = activePage === page;

                return (
                    <StyledPageButton key={key} pages={pages}>
                        <Button
                            page={page}
                            isActivePage={isActivePage}
                            onChange={onChange}
                            ariaCurrent={getAriaCurrent(page)}
                            ariaLabel={ariaLabel}
                        />
                    </StyledPageButton>
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
