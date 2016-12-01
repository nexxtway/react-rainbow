const defaultPathToAssets = '/assets';
const configMap = {
    pathToAssets: defaultPathToAssets
};

export default {
    get:  key => configMap[key],
    set: (key, value) => configMap[key] = value
}
