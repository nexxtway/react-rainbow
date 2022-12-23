const getItemIndex = (children, id) => {
    return children.findIndex(child => child.id === id);
};

export default getItemIndex;
