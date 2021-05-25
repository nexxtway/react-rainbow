const exclude = ['filler', 'legend', 'title'];

export default function unregisterGlobalPlugins(ChartJS) {
    const plugins = ChartJS.plugins.getAll().filter(plugin => !exclude.includes(plugin.id));
    ChartJS.plugins.unregister(plugins);
}
