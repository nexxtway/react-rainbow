const getNodeLevel = ({ name = '' }) => {
    const levelMatch = name.match(/\./g);
    if (levelMatch) {
        return levelMatch.length + 1;
    }
    return 1;
};

export default getNodeLevel;
