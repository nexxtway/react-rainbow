export default function getPluginsConf(rest, plugins) {
    const pluginsConf = {};
    const keys = plugins.map(plugin => plugin.id);
    keys.forEach(key => {
        if (rest[key]) {
            pluginsConf[key] = rest[key];
        }
    });
    return pluginsConf;
}
