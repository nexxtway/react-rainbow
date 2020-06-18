export default function getGlobalsPlugins(plugins) {
    return plugins.filter(plugin => plugin.id === 'datalabels');
}
