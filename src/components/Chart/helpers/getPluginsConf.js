export default function getPluginsConf(rest, plugins) {
    const pluginsConf = {};
    plugins.forEach(plugin => {
        const { id } = plugin;
        if (rest[id]) {
            pluginsConf[id] = rest[id];
        }
    });
    return pluginsConf;
}
