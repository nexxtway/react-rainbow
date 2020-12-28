import { replaceAlpha } from '../../styles/helpers/color';
import defaultTheme from '../../styles/defaultTheme';
import getPluginsConf from './helpers/getPluginsConf';
import merge from './helpers/merge';

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
        maintainAspectRatio,
        theme,
        type,
        plugins,
        options: nativeOptions,
        ...rest
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
        maintainAspectRatio,
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
            responsiveAnimationDuration: 0,
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
    if (showStacked) {
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

    if (plugins) {
        options = {
            ...options,
            layout: {
                padding: {
                    top: 20,
                    right: 20,
                    left: 0,
                    bottom: 0,
                },
            },
            plugins: getPluginsConf(rest, plugins),
        };
    }

    return merge(options, nativeOptions);
}
