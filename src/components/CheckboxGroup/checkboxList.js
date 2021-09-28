import React from 'react';
import PropTypes from 'prop-types';
import isOptionSelected from './isOptionSelected';
import Checkbox from '../Input/inputCheckbox/checkbox';
import StyledItemContainer from '../RadioGroup/styled/itemContainer';
import StyledItemDescription from '../RadioGroup/styled/itemDescription';
import RenderIf from '../RenderIf';

export default function CheckboxList(props) {
    const { values, options, onChange, describedBy, name, error } = props;
    return options.map((option, index) => {
        const key = `checkbox-${index}`;
        const { description, ...rest } = option;

        return (
            <StyledItemContainer data-id="input-checkboxgroup_container">
                <Checkbox
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                    checked={isOptionSelected(values, option)}
                    onChange={onChange}
                    ariaDescribedBy={describedBy}
                    key={key}
                    name={name}
                    error={error}
                />
                <RenderIf isTrue={description}>
                    <StyledItemDescription>{description}</StyledItemDescription>
                </RenderIf>
            </StyledItemContainer>
        );
    });
}

CheckboxList.propTypes = {
    name: PropTypes.string,
    options: PropTypes.array.isRequired,
    values: PropTypes.array,
    onChange: PropTypes.func,
    describedBy: PropTypes.string,
};

CheckboxList.defaultProps = {
    values: [],
    onChange: () => {},
    describedBy: undefined,
    name: undefined,
};
