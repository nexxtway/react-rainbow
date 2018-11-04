Bar chart vertical:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faMinus
    } = require('@fortawesome/free-solid-svg-icons');

    class BarChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
            this.colors = ['#01b6f5', '#663398', '#061c3f'];
            this.months = ['July','August', 'September', 'October', 'November', 'December'];
            this.state = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        title: 'Data-Red',
                        backgroundColor: '#fe4849',
                        values: [18, 42, 58, 50, 19, undefined],
                    },
                    {
                        title: 'Data-Orange',
                        backgroundColor: '#ff6837',
                        values: [undefined, 40, undefined, 45, 95, 33],
                    },
                    {
                        title: 'Data-Yellow',
                        backgroundColor: '#ffcc00',
                        values: [undefined, 30, 80, undefined, 65, 50],
                    },
                    {
                        title: 'Data-Green',
                        backgroundColor: '#1ad1a3',
                        values: [undefined, 15, undefined, 60, 45, 85],
                    },
                ],
            };
        }

        addDataset() {
            if (this.titles.length > 0) {
                const { labels, datasets } = this.state;
                const newValues = labels.map(label => Math.round(Math.random() * 100));
                const newDatasets = datasets.concat({
                    title: this.titles.shift(),
                    values: newValues,
                    backgroundColor: this.colors.shift(),
                });
                this.setState({ datasets: newDatasets });
            }
        }

        removeDataset() {
            const { datasets } = this.state;
            if (datasets.length > 0) {
                const dataset = datasets[datasets.length - 1];
                this.titles.unshift(dataset.title);
                this.colors.unshift(dataset.backgroundColor);
                const newDatasets = datasets.filter(d => d.title !== dataset.title);
                this.setState({ datasets: newDatasets });
            }
        }

        addMonth() {
            if (this.months.length > 0) {
                const { labels, datasets } = this.state;
                const newlabels = labels.concat(this.months.shift());
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.concat(Math.round(Math.random() * 100));
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newlabels, datasets: newDatasets });
            }
        }

        removeMonth() {
            const { labels, datasets } = this.state;
            if (labels.length > 0) {
                const label = labels[labels.length - 1];
                this.months.unshift(label);
                const newLabels = labels.filter(l => l !== label);
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.slice(0, values.length -1);
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newLabels, datasets: newDatasets });
            }
        }

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, backgroundColor }) => (
                <Dataset title={title} values={values} backgroundColor={backgroundColor} />
            ));
        }

        render() {
            const { labels } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-top_large rainbow-m-bottom_large rainbow-m-right_small">
                            <Button onClick={() => this.addDataset()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center">
                        <Chart labels={labels} type="bar" className="rainbow-m-right_small rainbow-m-left_x-large">
                            {this.renderDatasets()}
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <BarChartExample />

Line chart basic:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faMinus
    } = require('@fortawesome/free-solid-svg-icons');

    class LineChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.titles = ['Data-Yellow', 'Data-Green', 'Data-Orange', 'Data-Purple', 'Data-Dark'];
            this.colors = ['#ffcc00', '#1ad1a3', '#ff6837', '#663398', '#061c3f'];
            this.months = ['July','August', 'September', 'October', 'November', 'December'];
            this.state = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        title: 'Data-Red',
                        borderColor: '#fe4849',
                        values: [37, 15, 90, 57, 80, 14],
                    },
                    {
                        title: 'Data-Blue',
                        borderColor: '#01b6f5',
                        values: [18, 39, 15, 38, 15, 35],
                    },
                ],
            }
        }

        addDataset() {
            if (this.titles.length > 0) {
                const { labels, datasets } = this.state;
                const newValues = labels.map(label => Math.round(Math.random() * 100));
                const newDatasets = datasets.concat({
                    title: this.titles.shift(),
                    values: newValues,
                    borderColor: this.colors.shift(),
                });
                this.setState({ datasets: newDatasets });
            }
        }

        removeDataset() {
            const { datasets } = this.state;
            if (datasets.length > 0) {
                const dataset = datasets[datasets.length - 1];
                this.titles.unshift(dataset.title);
                this.colors.unshift(dataset.borderColor);
                const newDatasets = datasets.filter(d => d.title !== dataset.title);
                this.setState({ datasets: newDatasets });
            }
        }

        addMonth() {
            if (this.months.length > 0) {
                const { labels, datasets } = this.state;
                const newlabels = labels.concat(this.months.shift());
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.concat(Math.round(Math.random() * 100));
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newlabels, datasets: newDatasets });
            }
        }

        removeMonth() {
            const { labels, datasets } = this.state;
            if (labels.length > 0) {
                const label = labels[labels.length - 1];
                this.months.unshift(label);
                const newLabels = labels.filter(l => l !== label);
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.slice(0, values.length -1);
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newLabels, datasets: newDatasets });
            }
        }

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, borderColor }) => (
                <Dataset
                    title={title}
                    values={values}
                    borderColor={borderColor}
                    backgroundColor={borderColor} />
            ));
        }

        render() {
            const { labels } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-top_large rainbow-m-bottom_large rainbow-m-right_small">
                            <Button onClick={() => this.addDataset()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center">
                        <Chart labels={labels} type="line" className="rainbow-m-right_small rainbow-m-left_x-large">
                            {this.renderDatasets()}
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <LineChartExample />


Line chart fill:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faMinus
    } = require('@fortawesome/free-solid-svg-icons');

    class LineChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.titles = ['Data-Red', 'Data-Yellow', 'Data-Green', 'Data-Orange', 'Data-Purple', 'Data-Dark'];
            this.colors = ['#fe4849','#ffcc00', '#1ad1a3', '#ff6837', '#663398', '#061c3f'];
            this.months = ['July','August', 'September', 'October', 'November', 'December'];
            this.state = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        title: 'Data-Blue',
                        borderColor: '#01b6f5',
                        backgroundColor: 'rgba(1, 182, 245, 0.6)',
                        values: [37, 18, 90, 56, 80, 14],
                    },
                ],
            }
        }

        addDataset() {
            if (this.titles.length > 0) {
                const { labels, datasets } = this.state;
                const newValues = labels.map(label => Math.round(Math.random() * 100));
                const newDatasets = datasets.concat({
                    title: this.titles.shift(),
                    values: newValues,
                    borderColor: this.colors.shift(),
                });
                this.setState({ datasets: newDatasets });
            }
        }

        removeDataset() {
            const { datasets } = this.state;
            if (datasets.length > 0) {
                const dataset = datasets[datasets.length - 1];
                this.titles.unshift(dataset.title);
                this.colors.unshift(dataset.borderColor);
                const newDatasets = datasets.filter(d => d.title !== dataset.title);
                this.setState({ datasets: newDatasets });
            }
        }

        addMonth() {
            if (this.months.length > 0) {
                const { labels, datasets } = this.state;
                const newlabels = labels.concat(this.months.shift());
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.concat(Math.round(Math.random() * 100));
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newlabels, datasets: newDatasets });
            }
        }

        removeMonth() {
            const { labels, datasets } = this.state;
            if (labels.length > 0) {
                const label = labels[labels.length - 1];
                this.months.unshift(label);
                const newLabels = labels.filter(l => l !== label);
                const newDatasets = datasets.map(dataset => {
                    const { values, ...rest } = dataset;
                    const newValues = values.slice(0, values.length -1);
                    return {
                        ...rest,
                        values: newValues,
                    };
                });
                this.setState({ labels: newLabels, datasets: newDatasets });
            }
        }

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, borderColor, backgroundColor }) => (
                <Dataset
                    title={title}
                    values={values}
                    borderColor={borderColor}
                    backgroundColor={backgroundColor}
                    fill />
            ));
        }

        render() {
            const { labels } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-top_large rainbow-m-bottom_large rainbow-m-right_small">
                            <Button onClick={() => this.addDataset()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center">
                        <Chart
                            labels={labels}
                            type="line"
                            disableCurves
                            className="rainbow-m-right_small rainbow-m-left_x-large">
                            {this.renderDatasets()}
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <LineChartExample />

Pie chart:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faMinus
    } = require('@fortawesome/free-solid-svg-icons');

    class PieChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
            this.colors = ['#01b6f5', '#663398', '#061c3f'];
            this.state = {
                labels: ['Data-Red', 'Data-Orange', 'Data-Yellow', 'Data-Green'],
                dataset: [{
                        value: 10,
                        color: '#fe4849',
                    },{
                        value: 15,
                        color: '#ff6837',
                    },{
                        value: 42,
                        color: '#ffcc00',
                    },{
                        value: 33,
                        color: '#1ad1a3',
                    },
                ],
            }
        }

        addData() {
            if (this.titles.length > 0) {
                const {labels, dataset} = this.state;
                const newLabels = labels.concat(this.titles.shift());
                const newDataset = dataset.concat({
                    value: Math.round(Math.random() * 100),
                    color: this.colors.shift()
                });
                this.setState({ labels: newLabels, dataset: newDataset });
            }
        }

        removeData() {
            const { labels, dataset } = this.state;
            if (labels.length > 0) {
                const lastLabel = labels[labels.length - 1];
                this.titles.unshift(lastLabel);
                const newLabels = labels.filter(l => l !== lastLabel);
                const lastData = dataset[dataset.length - 1];
                this.colors.unshift(lastData.color);
                const newDataset = dataset.slice(0, dataset.length - 1);
                this.setState({ labels: newLabels, dataset: newDataset });
            }
        }

        renderDataset() {
            let data = [];
            let colors = [];
            const { dataset } = this.state;
            dataset.forEach(d => {
                data.push(d.value);
                colors.push(d.color);
            });

            return <Dataset title="Data" values={data} backgroundColor={colors} />;
        }

        render() {
            const { labels, dataset } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <div className="rainbow-align-content_center">
                        <Chart
                            labels={labels}
                            type="pie"
                            legendPosition="right"
                            disableCurves
                            className="rainbow-m-right_small rainbow-m-left_x-large rainbow-m-top_x-large">
                            {this.renderDataset()}
                        </Chart>
                    </div>
                    <div className="rainbow-align-content_center">
                        <ButtonGroup className="rainbow-m-top_large rainbow-m-bottom_large">
                            <Button onClick={() => this.addData()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeData()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            );
        }
    }

    <PieChartExample />

Doughnut chart:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faPlus,
        faMinus
    } = require('@fortawesome/free-solid-svg-icons');

    class DoughnutChartExample extends React.Component {
        constructor(props) {
            super(props);
            this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
            this.colors = ['#01b6f5', '#663398', '#061c3f'];
            this.state = {
                labels: ['Data-Red', 'Data-Orange', 'Data-Yellow', 'Data-Green'],
                dataset: [{
                        value: 10,
                        color: '#fe4849',
                    },{
                        value: 15,
                        color: '#ff6837',
                    },{
                        value: 42,
                        color: '#ffcc00',
                    },{
                        value: 33,
                        color: '#1ad1a3',
                    },
                ],
            }
        }

        addData() {
            if (this.titles.length > 0) {
                const {labels, dataset} = this.state;
                const newLabels = labels.concat(this.titles.shift());
                const newDataset = dataset.concat({
                    value: Math.round(Math.random() * 100),
                    color: this.colors.shift()
                });
                this.setState({ labels: newLabels, dataset: newDataset });
            }
        }

        removeData() {
            const { labels, dataset } = this.state;
            if (labels.length > 0) {
                const lastLabel = labels[labels.length - 1];
                this.titles.unshift(lastLabel);
                const newLabels = labels.filter(l => l !== lastLabel);
                const lastData = dataset[dataset.length - 1];
                this.colors.unshift(lastData.color);
                const newDataset = dataset.slice(0, dataset.length - 1);
                this.setState({ labels: newLabels, dataset: newDataset });
            }
        }

        renderDataset() {
            let data = [];
            let colors = [];
            const { dataset } = this.state;
            dataset.forEach(d => {
                data.push(d.value);
                colors.push(d.color);
            });

            return <Dataset title="Data" values={data} backgroundColor={colors} />;
        }

        render() {
            const { labels, dataset1 } = this.state;

            return (
                <div className="rainbow-p-bottom_xx-large">
                    <div className="rainbow-align-content_center">
                        <Chart
                            labels={labels}
                            type="doughnut"
                            legendPosition="right"
                            disableCurves
                            className="rainbow-m-right_small rainbow-m-left_x-large rainbow-m-top_x-large">
                            {this.renderDataset()}
                        </Chart>
                    </div>
                    <div className="rainbow-align-content_center">
                        <ButtonGroup className="rainbow-m-top_large rainbow-m-bottom_large">
                            <Button onClick={() => this.addData()}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeData()}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            );
        }
    }

    <DoughnutChartExample />
