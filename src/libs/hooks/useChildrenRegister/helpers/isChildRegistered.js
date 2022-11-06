const isChildRegistered = ({ children, name }) =>
    children.findIndex(child => child.name === name) !== -1;

export default isChildRegistered;
