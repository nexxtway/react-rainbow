import { filler, legend, title } from 'chart.js/src/plugins';

export default function unregisterGlobalPlugins(ChartJS) {
    ChartJS.plugins.clear();
    [filler, legend, title].forEach(plugin => ChartJS.plugins.register(plugin));
}
