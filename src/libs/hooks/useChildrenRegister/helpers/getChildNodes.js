const getChildNodes = ({ ref, selector }) => {
    if (ref) {
        const [...node] = ref.querySelectorAll(selector);
        return node;
    }
    return [];
};

export default getChildNodes;
