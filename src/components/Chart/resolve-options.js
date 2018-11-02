export default function resolveOptions(
    disableAnimation,
    disableLines,
    disableCurves,
    showLegend,
    legendPosition,
    showStacked) {
    let options = {
        legend: {
            display: showLegend,
            position: legendPosition,
            fullWidth: true,
        },
    };

    if (disableAnimation) {
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
                xAxes: [{
                    stacked: true,
                }],
                yAxes: [{
                    stacked: true,
                }],
            },
        };
    }

    return options;
}
