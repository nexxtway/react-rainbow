import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import ChartJS from 'chart.js';
import resolveOptions from './resolve-options';
import resolveDatasets from './resolve-datasets';
import './styles.css';

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

    getContainerClassNames() {
        const { className } = this.props;
        return classnames('rainbow-chart', className);
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
        const { style } = this.props;

        return (
            <div className={this.getContainerClassNames()} style={style}>
                <canvas ref={this.chartRef} />
            </div>
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
    ]).isRequired,
    /** Defines the names of the sections for the corresponding values. */
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    /** Determines whether to show the stacked bars in a bar chart. */
    showStacked: PropTypes.bool,
    /** Defines if the legend is shown. */
    showLegend: PropTypes.bool,
    /** The position of the legend. */
    legendPosition: PropTypes.oneOf([
        'top',
        'bottom',
        'right',
        'left',
    ]),
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
    showStacked: false,
    showLegend: true,
    legendPosition: 'bottom',
    disableAnimations: false,
    disableLines: false,
    disableCurves: false,
    className: undefined,
    style: undefined,
    children: undefined,
};
