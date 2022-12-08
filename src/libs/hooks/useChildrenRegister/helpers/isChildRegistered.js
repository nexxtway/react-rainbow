const isChildRegistered = ({ children, id }) => children.findIndex(child => child.id === id) !== -1;

export default isChildRegistered;
