import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import resolveOptions from './resolveOptions';
import resolveDatasets from './resolveDatasets';
import StyledContainer from './styled/container';

/**
 * The Chart components are based on Charts.js an open source HTML5 based charting library.
 * You can learn more about it here:
 * @category DataView
 */
export default class Chart extends Component {
    constructor(props) {
        super(props);
        this.chartRef = React.createRef();
        this.datasets = [];
    }

    componentDidMount() {
        const { children } = this.props;
        this.datasets = resolveDatasets(children);
        this.renderChart();
    }

    componentDidUpdate() {
        const { children } = this.props;
        this.datasets = resolveDatasets(children);
        this.updateChart();
    }

    updateChart() {
        const { labels, ...conditions } = this.props;
        this.chartInstance.data = {
            labels,
            datasets: this.datasets,
        };
        this.chartInstance.options = resolveOptions({ ...conditions });
        this.chartInstance.update();
    }

    renderChart() {
        const { type, labels, ...conditions } = this.props;
        const node = this.chartRef.current;

        this.chartInstance = new ChartJS(node, {
            type,
            data: {
                labels,
                datasets: this.datasets,
            },
            options: resolveOptions({ ...conditions }),
        });
    }

    render() {
        const { style, className } = this.props;

        return (
            <StyledContainer className={className} style={style}>
                <canvas ref={this.chartRef} />
            </StyledContainer>
        );
    }
}

Chart.propTypes = {
    /** The type of chart to draw. */
    type: PropTypes.oneOf([
        'bar',
        'horizontalBar',
        'line',
        'radar',
        'pie',
        'doughnut',
        'polarArea',
        'bubble',
    ]),
    /** Defines the names of the sections for the corresponding values. */
    labels: PropTypes.arrayOf(PropTypes.string),
    /** Determines whether to show the stacked bars in a bar chart. */
    showStacked: PropTypes.bool,
    /** Defines if the legend is shown. */
    showLegend: PropTypes.bool,
    /** The position of the legend. */
    legendPosition: PropTypes.oneOf(['top', 'bottom', 'right', 'left']),
    /** Determines whether it should perform animations when rendering the chart,
     * this would improve general performance
     * and is recommended for high data volumes charts. */
    disableAnimations: PropTypes.bool,
    /** Determines whether to draw the lines that join the dots in a line chart,
     * is recommended for high data volumes charts. */
    disableLines: PropTypes.bool,
    /** Determines whether the lines that join the dots in a
     * line chart should be curved or straight.  */
    disableCurves: PropTypes.bool,
    /** Maintain the original canvas aspect ratio. */
    maintainAspectRatio: PropTypes.bool,
    /** A CSS class for the outer element, in addition to the component's base classes. */
    className: PropTypes.string,
    /** An object with custom style applied for the outer element. */
    style: PropTypes.object,
    /**
     * This prop that should not be visible in the documentation.
     * @ignore
     */
    children: PropTypes.node,
};

Chart.defaultProps = {
    type: 'bar',
    labels: [],
    showStacked: false,
    showLegend: true,
    legendPosition: 'bottom',
    disableAnimations: false,
    disableLines: false,
    disableCurves: false,
    maintainAspectRatio: true,
    className: undefined,
    style: undefined,
    children: undefined,
};
