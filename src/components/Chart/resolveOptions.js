export default function resolveOptions(conditions) {
    const {
        disableAnimations,
        disableLines,
        disableCurves,
        showLegend,
        legendPosition,
        showStacked,
        maintainAspectRatio,
    } = conditions;

    let options = {
        maintainAspectRatio,
        legend: {
            display: showLegend,
            position: legendPosition,
            fullWidth: true,
            labels: {
                usePointStyle: true,
            },
        },
    };

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
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                    },
                ],
            },
        };
    }

    return options;
}
