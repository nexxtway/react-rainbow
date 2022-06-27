import React from 'react';
import PropTypes from 'prop-types';
import Radio from '../Input/inputRadio/radio';
import StyledItemContainer from './styled/itemContainer';
import RenderIf from '../RenderIf';
import StyledItemDescription from './styled/itemDescription';

export default function RadioItems(props) {
    const { options, ariaDescribedby, onChange, value, name, error } = props;

    const isChecked = option => option.value === value;

    return options.map((option, index) => {
        const key = `radio-${index}`;
        const { description, disabled, ...rest } = option;
        return (
            <StyledItemContainer key={key} data-id="input-radiogroup_container">
                <Radio
                    // eslint-disable-next-line react/jsx-props-no-spreading
                    {...rest}
                    onChange={onChange}
                    checked={isChecked(option)}
                    ariaDescribedby={ariaDescribedby}
                    name={name}
                    error={error}
                    disabled={disabled}
                />
                <RenderIf isTrue={description}>
                    <StyledItemDescription disabled={disabled}>{description}</StyledItemDescription>
                </RenderIf>
            </StyledItemContainer>
        );
    });
}

RadioItems.propTypes = {
    ariaDescribedby: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func,
    name: PropTypes.string.isRequired,
};

RadioItems.defaultProps = {
    ariaDescribedby: undefined,
    value: undefined,
    onChange: () => {},
};
