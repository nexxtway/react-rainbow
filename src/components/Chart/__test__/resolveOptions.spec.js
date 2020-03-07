import resolveOptions from '../resolveOptions';

const baseOptions = {
    legend: {
        display: true,
        position: 'bottom',
        fullWidth: true,
        labels: {
            usePointStyle: true,
            fontColor: 'rgba(87, 101, 116, 1)',
        },
    },
    tooltips: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFontColor: 'rgba(255, 255, 255, 1)',
        bodyFontColor: 'rgba(255, 255, 255, 1)',
    },
};

describe('resolveOptions function', () => {
    it('should return the conf option with legend parameters only', () => {
        const conditions = {
            disableAnimations: false,
            disableLines: false,
            disableCurves: false,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: false,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual(baseOptions);
    });

    it('should return the conf option with legend and animation parameters', () => {
        const conditions = {
            disableAnimations: true,
            disableLines: false,
            disableCurves: false,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: false,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual({
            ...baseOptions,
            animation: {
                duration: 0,
            },
            hover: {
                animationDuration: 0,
            },
            responsiveAnimationDuration: 0,
        });
    });
    it('should return the conf option with legend and line parameters', () => {
        const conditions = {
            disableAnimations: false,
            disableLines: true,
            disableCurves: false,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: false,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual({
            ...baseOptions,
            showLines: false,
        });
    });
    it('should return the conf option with legend and curves parameters', () => {
        const conditions = {
            disableAnimations: false,
            disableLines: false,
            disableCurves: true,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: false,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual({
            ...baseOptions,
            elements: {
                line: {
                    tension: 0,
                },
            },
        });
    });
    it('should return the conf option with legend and stacked parameters', () => {
        const conditions = {
            disableAnimations: false,
            disableLines: false,
            disableCurves: false,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: true,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual({
            ...baseOptions,
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: 'rgba(227, 229, 237, 1)',
                            zeroLineColor: 'rgba(227, 229, 237, 1)',
                        },
                        ticks: {
                            fontColor: 'rgba(87, 101, 116, 1)',
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: 'rgba(227, 229, 237, 1)',
                            zeroLineColor: 'rgba(227, 229, 237, 1)',
                        },
                        ticks: {
                            fontColor: 'rgba(87, 101, 116, 1)',
                        },
                    },
                ],
            },
        });
    });
    it('should return the conf option with all parameters', () => {
        const conditions = {
            disableAnimations: true,
            disableLines: true,
            disableCurves: true,
            showLegend: true,
            legendPosition: 'bottom',
            showStacked: true,
        };

        const options = resolveOptions(conditions);

        expect(options).toEqual({
            ...baseOptions,
            animation: {
                duration: 0,
            },
            hover: {
                animationDuration: 0,
            },
            responsiveAnimationDuration: 0,
            showLines: false,
            elements: {
                line: {
                    tension: 0,
                },
            },
            scales: {
                xAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: 'rgba(227, 229, 237, 1)',
                            zeroLineColor: 'rgba(227, 229, 237, 1)',
                        },
                        ticks: {
                            fontColor: 'rgba(87, 101, 116, 1)',
                        },
                    },
                ],
                yAxes: [
                    {
                        stacked: true,
                        gridLines: {
                            color: 'rgba(227, 229, 237, 1)',
                            zeroLineColor: 'rgba(227, 229, 237, 1)',
                        },
                        ticks: {
                            fontColor: 'rgba(87, 101, 116, 1)',
                        },
                    },
                ],
            },
        });
    });
});
