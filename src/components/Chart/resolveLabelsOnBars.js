/* eslint-disable no-underscore-dangle */
import ChartJS from 'chart.js';

export default function resolveLabelsOnBars() {
    const chart = this.chart;
    const ctx = chart.ctx;

    ctx.font = ChartJS.helpers.fontString(
        ChartJS.defaults.global.defaultFontSize,
        ChartJS.defaults.global.defaultFontStyle,
        ChartJS.defaults.global.defaultFontFamily,
    );
    ctx.fillStyle = this.options.legend.labels.fontColor;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'bottom';

    this.data.datasets.forEach((dataset, i) => {
        const meta = chart.controller.getDatasetMeta(i);
        meta.data.forEach((bar, index) => {
            const dataValue = dataset.data[index];
            ctx.fillText(dataValue, bar._model.x, bar._model.y - 5);
        });
    });
}
