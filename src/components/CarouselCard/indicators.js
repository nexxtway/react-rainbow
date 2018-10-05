/* eslint-disable no-script-url */
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import AssistiveText from '../AssistiveText';

export default function Indicators({ carouselChilds, onSelect, selectedItem }) {
    const isSelected = id => selectedItem === id;

    const getContainerClassName = id => (
        classnames('rainbow-carousel__indicator-action', {
            'rainbow-is-active': selectedItem === id,
        })
    );

    const getTabIndex = (id) => {
        if (isSelected(id)) {
            return 0;
        }
        return -1;
    };

    const getAssistiveText = (header) => {
        if (typeof header === 'string') {
            return `${header} Tab`;
        }
        return undefined;
    };

    return carouselChilds.map(({ containerID, indicatorID, header }) => (
        <li className="rainbow-carousel__indicator" role="presentation" key={indicatorID}>
            <a
                id={indicatorID}
                className={getContainerClassName(indicatorID)}
                href="javascript:void(0);"
                role="tab"
                tabIndex={getTabIndex(indicatorID)}
                aria-selected={isSelected(indicatorID)}
                aria-controls={containerID}
                onClick={() => onSelect(indicatorID)}>
                <AssistiveText text={getAssistiveText(header)} />
            </a>
        </li>
    ));
}

Indicators.propTypes = {
    carouselChilds: PropTypes.array,
    onSelect: PropTypes.func,
    selectedItem: PropTypes.string,
};

Indicators.defaultProps = {
    carouselChilds: [],
    onSelect: () => {},
    selectedItem: undefined,
};
