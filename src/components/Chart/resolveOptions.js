/* eslint-disable func-names */
/* eslint-disable object-shorthand */
/* eslint-disable no-underscore-dangle */
import ChartJS from 'chart.js';
import { replaceAlpha } from '../../styles/helpers/color';
import defaultTheme from '../../styles/defaultTheme';

export default function resolveOptions(conditions) {
    const {
        disableAnimations,
        disableLines,
        disableCurves,
        disableXAxisGridLines,
        disableYAxisGridLines,
        disableXAxisBorders,
        disableYAxisBorders,
        disableXAxisTickLabels,
        disableYAxisTickLabels,
        showLegend,
        legendPosition,
        showStacked,
        showLabelsOnBars,
        maintainAspectRatio,
        theme,
        type,
    } = conditions;
    const palette = theme ? theme.rainbow.palette : defaultTheme.palette;
    const legend = {
        label: palette.text.label,
        border: palette.border.divider,
    };
    const tooltips = {
        background: replaceAlpha(palette.getContrastText(palette.background.main), 0.8),
        color: palette.getContrastText(palette.text.main),
    };

    let options = {
        maintainAspectRatio: maintainAspectRatio,
        legend: {
            display: showLegend,
            position: legendPosition,
            fullWidth: true,
            labels: {
                usePointStyle: true,
                fontColor: legend.label,
            },
        },
        tooltips: {
            backgroundColor: tooltips.background,
            titleFontColor: tooltips.color,
            bodyFontColor: tooltips.color,
        },
    };

    if (type === 'bar' || type === 'horizontalBar' || type === 'line') {
        options = {
            ...options,
            layout: {
                padding: {
                    left: 0,
                    right: 0,
                    top: 15,
                    bottom: 0,
                },
            },
            scales: {
                xAxes: [
                    {
                        ticks: {
                            display: !disableXAxisTickLabels,
                            fontColor: legend.label,
                        },
                        gridLines: {
                            display: !disableXAxisGridLines,
                            drawBorder: !disableXAxisBorders,
                            color: legend.border,
                            zeroLineColor: legend.border,
                        },
                    },
                ],
                yAxes: [
                    {
                        ticks: {
                            display: !disableYAxisTickLabels,
                            fontColor: legend.label,
                        },
                        gridLines: {
                            display: !disableYAxisGridLines,
                            drawBorder: !disableYAxisBorders,
                            color: legend.border,
                            zeroLineColor: legend.border,
                        },
                    },
                ],
            },
        };
    }

    if (disableAnimations) {
        options = {
            ...options,
            animation: {
                duration: 0,
            },
            hover: {
                animationDuration: 0,
            },
        };
    }

    if (showLabelsOnBars) {
        options = {
            ...options,
            hover: {
                animationDuration: disableAnimations
                    ? 0
                    : ChartJS.defaults.global.hover.animationDuration,
            },
            animation: {
                duration: disableAnimations ? 0 : ChartJS.defaults.global.animation.duration,
                onComplete:
                    showLabelsOnBars && type === 'bar'
                        ? function() {
                              const chart = this.chart;
                              const ctx = chart.ctx;

                              ctx.font = ChartJS.helpers.fontString(
                                  ChartJS.defaults.global.defaultFontSize,
                                  ChartJS.defaults.global.defaultFontStyle,
                                  ChartJS.defaults.global.defaultFontFamily,
                              );
                              ctx.fillStyle = legend.label;
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
                        : null,
            },
        };
    }

    if (disableLines) {
        options = {
            ...options,
            showLines: false,
        };
    }

    if (disableCurves) {
        options = {
            ...options,
            elements: {
                line: {
                    tension: 0,
                },
            },
        };
    }

    if (showStacked && !(showLabelsOnBars && type === 'bar')) {
        options = {
            ...options,
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        ticks: {
                            fontColor: legend.label,
                        },
                        gridLines: {
                            color: legend.border,
                            zeroLineColor: legend.border,
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        ticks: {
                            fontColor: legend.label,
                        },
                        gridLines: {
                            color: legend.border,
                            zeroLineColor: legend.border,
                        },
                    },
                ],
            },
        };
    }

    return options;
}
