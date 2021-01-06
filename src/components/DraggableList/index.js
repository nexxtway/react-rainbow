/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { Container } from './styled';
import Items from './items';

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const DraggableList = props => {
    const { className, style, onDragEnd, data, ...rest } = props;

    const handleDragEnd = result => {
        if (!result.destination) {
            return;
        }
        if (result.destination.index === result.source.index) {
            return;
        }
        const newData = reorder(data, result.source.index, result.destination.index);
        onDragEnd(newData);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="draggable-list-droppable-container">
                {provided => {
                    return (
                        <Container
                            className={className}
                            style={style}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            <Items data={data} {...rest} />
                            {provided.placeholder}
                        </Container>
                    );
                }}
            </Droppable>
        </DragDropContext>
    );
};

DraggableList.propTypes = {
    className: PropTypes.string,
    style: PropTypes.object,
    keyField: PropTypes.string.isRequired,
    data: PropTypes.arrayOf(PropTypes.object),
    field: PropTypes.string,
    onDragEnd: PropTypes.func,
    component: PropTypes.func,
};

DraggableList.defaultProps = {
    className: undefined,
    style: undefined,
    data: [],
    field: undefined,
    onDragEnd: () => {},
    component: undefined,
};

export default DraggableList;
