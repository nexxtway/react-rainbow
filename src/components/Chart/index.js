/* eslint-disable no-new */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import resolveOptions from './resolve-options';
import resolveDatasets from './resolve-datasets';
import './styles.css';

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
        const { labels, type, ...conditions } = this.props;
        this.chartInstance.data = {
            labels,
            datasets: this.datasets,
            options: resolveOptions({ ...conditions }),
        };
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
        return (
            <div className="rainbow-chart" >
                <canvas ref={this.chartRef} />
            </div>
        );
    }
}

Chart.propTypes = {
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
    labels: PropTypes.arrayOf(PropTypes.string).isRequired,
    showStacked: PropTypes.bool,
    showLegend: PropTypes.bool,
    legendPosition: PropTypes.oneOf([
        'top',
        'bottom',
        'right',
        'left',
    ]),
    disableAnimation: PropTypes.bool,
    disableLines: PropTypes.bool,
    disableCurves: PropTypes.bool,
    children: PropTypes.node,
};

Chart.defaultProps = {
    showStacked: false,
    showLegend: true,
    legendPosition: 'bottom',
    disableAnimation: false,
    disableLines: false,
    disableCurves: false,
    children: undefined,
};
