import { replaceAlpha } from '../../styles/helpers/color';
import defaultTheme from '../../styles/defaultTheme';

export default function resolveOptions(type, conditions) {
    const {
        disableAnimations,
        disableLines,
        disableCurves,
        showLegend,
        legendPosition,
        showStacked,
        maintainAspectRatio,
        theme,
    } = conditions;
    const palette = theme ? theme.rainbow.palette : defaultTheme.rainbow.palette;
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
                fontColor: palette.text.label,
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
                        gridLines: {
                            color: palette.border.divider,
                            zeroLineColor: palette.border.divider,
                        },
                    },
                ],
                yAxes: [
                    {
                        gridLines: {
                            color: palette.border.divider,
                            zeroLineColor: palette.border.divider,
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
                        gridLines: {
                            color: palette.border.divider,
                            zeroLineColor: palette.border.divider,
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: palette.border.divider,
                            zeroLineColor: palette.border.divider,
                        },
                    },
                ],
            },
        };
    }

    return options;
}
