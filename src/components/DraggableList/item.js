import React from 'react';
import { ItemContainer } from './styled';

const Item = props => {
    const { row, field, component: CustomItem } = props;
    const value = row[field];
    if (CustomItem) {
        return (
            <ItemContainer>
                <CustomItem value={value} row={row} />
            </ItemContainer>
        );
    }
    return <ItemContainer>{value}</ItemContainer>;
};

export default Item;
