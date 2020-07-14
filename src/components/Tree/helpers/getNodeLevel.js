const getNodeLevel = ({ name }) => {
    let levelMatch = [];
    if (name) {
        levelMatch = name.match(/\./g);
    }
    return name && levelMatch ? levelMatch.length + 1 : 1;
};

export default getNodeLevel;
