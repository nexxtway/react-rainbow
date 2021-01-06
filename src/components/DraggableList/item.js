/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { ItemContainer, StyledIcon } from './styled';

const Content = ({ component: CustomItem, value, row, ...rest }) => {
    if (CustomItem) {
        return <CustomItem {...rest} value={value} row={row} />;
    }
    return value;
};

const Item = props => {
    const { row, field, component, id, index, ...rest } = props;
    const value = row[field];

    return (
        <Draggable draggableId={id} index={index}>
            {provided => (
                <ItemContainer
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                >
                    <StyledIcon />
                    <Content {...rest} component={component} value={value} row={row} />
                </ItemContainer>
            )}
        </Draggable>
    );
};

Item.propTypes = {
    row: PropTypes.object,
    field: PropTypes.string,
    component: PropTypes.func,
    id: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

Item.defaultProps = {
    row: undefined,
    field: undefined,
    component: undefined,
};

export default Item;
