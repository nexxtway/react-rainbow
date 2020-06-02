import React, { memo } from 'react';
import PropTypes from 'prop-types';
import RenderIf from '../../RenderIf';
import Icon from '../../Option/icon';
import { StyledItem, StyledCountryCodeItem, StyledCheckmarkIcon } from './styled';
import { useSimulatedLoading } from './hooks';

const CountriesList = memo(props => {
    const { countries, country, itemsRef, handleCountryChange, handleActiveChange } = props;
    const list = useSimulatedLoading(countries, 15);

    return list.map((value, index) => {
        const { isoCode, country: name, countryCode, flagIcon } = value;
        const isSelected = value === country;
        const formattedCountryCode = `(${countryCode})`;
        return (
            <StyledItem
                key={isoCode}
                ref={el => {
                    itemsRef.current[index] = el;
                    return itemsRef.current[index];
                }}
                onClick={() => handleCountryChange(value)}
                onMouseEnter={() => handleActiveChange(index)}
                role="option"
                aria-selected={false}
                isSelected={isSelected}
            >
                <div>
                    <Icon icon={flagIcon} isVisible position="left" />
                    {name}
                </div>
                <div>
                    <StyledCountryCodeItem>{formattedCountryCode}</StyledCountryCodeItem>
                    <RenderIf isTrue={isSelected}>
                        <StyledCheckmarkIcon />
                    </RenderIf>
                </div>
            </StyledItem>
        );
    });
});

CountriesList.propTypes = {
    countries: PropTypes.array,
    country: PropTypes.object.isRequired,
    itemsRef: PropTypes.object,
    handleCountryChange: PropTypes.func,
    handleActiveChange: PropTypes.func,
};

CountriesList.defaultProps = {
    countries: [],
    country: undefined,
    itemsRef: [],
    handleCountryChange: () => {},
    handleActiveChange: () => {},
};

export default CountriesList;
