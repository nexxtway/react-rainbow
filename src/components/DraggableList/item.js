import React from 'react';
import { ItemContainer, StyledIcon } from './styled';

const Item = props => {
    const { row, field, component: CustomItem } = props;
    const value = row[field];
    if (CustomItem) {
        return (
            <ItemContainer>
                <StyledIcon />
                <CustomItem value={value} row={row} />
            </ItemContainer>
        );
    }
    return (
        <ItemContainer>
            <StyledIcon />
            {value}
        </ItemContainer>
    );
};

export default Item;
