import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ButtonGroup from '../ButtonGroup';
import Button from '../Button';
import getFirstItem from './get-first-item';

export default function PageButtons(props) {
    const { pages, activePage, onChange } = props;

    const getButtonClassName = page => classnames('rainbow-pagination_button', {
        'rainbow-pagination_active-button': activePage === page,
    });

    const renderButtons = () => {
        const firstItem = pages > 4 ? getFirstItem(pages, activePage) : 1;
        const buttonsToRender = pages > 4 ? 5 : pages;
        return Array(buttonsToRender).fill(0).map((item, index) => (
            <Button
                key={`page-button-${firstItem + index}`}
                label={firstItem + index}
                className={getButtonClassName(firstItem + index)}
                onClick={event => onChange(event, firstItem + index)} />
        ));
    };

    return (
        <ButtonGroup className="rainbow-pagination_pages">
            {renderButtons()}
        </ButtonGroup>
    );
}

PageButtons.propTypes = {
    activePage: PropTypes.number,
    pages: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
};

PageButtons.defaultProps = {
    activePage: undefined,
};
