/* eslint-disable no-new */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ChartJS from 'chart.js';
import { Provider } from './context';
import resolveOptions from './resolve-options';
import './styles.css';

const contextValue = Symbol('contextValue');
const registerDataset = Symbol('registerDataset');

export default class Chart extends Component {
    constructor(props) {
        super(props);
        this[contextValue] = {
            privateRegister: this[registerDataset].bind(this),
        };
        this.chartRef = React.createRef();
        this.datasets = [];
    }

    componentDidMount() {
        this.renderChart();
    }

    [registerDataset](datasetValues) {
        this.datasets = this.datasets.concat(datasetValues);
    }

    renderChart() {
        const {
            type,
            labels,
            disableAnimation,
            disableLines,
            disableCurves,
            showLegend,
            legendPosition,
            showStacked,
        } = this.props;
        const node = this.chartRef.current;
        const datasets = this.datasets;

        new ChartJS(node, {
            type,
            data: {
                labels,
                datasets,
            },
            options: resolveOptions(
                disableAnimation,
                disableLines,
                disableCurves,
                showLegend,
                legendPosition,
                showStacked,
            ),
        });
    }

    render() {
        const { children } = this.props;
        return (
            <div>
                <span className="rainbow-chart_dataset-container" aria-hidden>
                    <Provider value={this[contextValue]}>
                        {children}
                    </Provider>
                </span>
                <div className="rainbow-chart">
                    <canvas ref={this.chartRef} />
                </div>
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
