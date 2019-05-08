Chart basic:

    const { FontAwesomeIcon } = require('@fortawesome/react-fontawesome');
    const {
        faCog,
        faEllipsisV,
    } = require('@fortawesome/free-solid-svg-icons');

    <div className="rainbow-p-around_xx-large">
        <div className="rainbow-align-content_center">
            <Chart labels={['A', 'B', 'C', 'D']} type="line" className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large">
                <Dataset title="Dataset 1" values={[23,45,123,56]} backgroundColor="#1de9b6" borderColor="#1de9b6" />
                <Dataset title="Dataset 2" values={[66,100,30,156]} backgroundColor="#01b6f5" borderColor="#01b6f5" />
            </Chart>
        </div>
    </div>

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
            const { labels, datasets } = this.state;
            const newValues = labels.map(label => Math.round(Math.random() * 100));
            const newDatasets = datasets.concat({
                title: this.titles.shift(),
                values: newValues,
                backgroundColor: this.colors.shift(),
            });
            this.setState({ datasets: newDatasets });
        }

        removeDataset() {
            const { datasets } = this.state;
            const dataset = datasets[datasets.length - 1];
            this.titles.unshift(dataset.title);
            this.colors.unshift(dataset.backgroundColor);
            const newDatasets = datasets.filter(d => d.title !== dataset.title);
            this.setState({ datasets: newDatasets });
        }

        addMonth() {
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

        removeMonth() {
            const { labels, datasets } = this.state;
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

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, backgroundColor }) => (
                <Dataset key={title} title={title} values={values} backgroundColor={backgroundColor} />
            ));
        }

        render() {
            const { labels, datasets } = this.state;

            const noMoreTitles = this.titles.length === 0;
            const noMoreDatasets = datasets.length === 0;
            const noMoreMonths = this.months.length === 0;
            const noMoreLabels = labels.length === 0;

            return (
                <div className="rainbow-p-vertical_large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-around_large">
                            <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center rainbow-m-horizontal_xx-large rainbow-m-vertical_large">
                        <Chart labels={labels} type="bar">
                            {this.renderDatasets()}
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <BarChartExample />

Line chart:

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
            const { labels, datasets } = this.state;
            const newValues = labels.map(label => Math.round(Math.random() * 100));
            const newDatasets = datasets.concat({
                title: this.titles.shift(),
                values: newValues,
                borderColor: this.colors.shift(),
            });
            this.setState({ datasets: newDatasets });
        }

        removeDataset() {
            const { datasets } = this.state;
            const dataset = datasets[datasets.length - 1];
            this.titles.unshift(dataset.title);
            this.colors.unshift(dataset.borderColor);
            const newDatasets = datasets.filter(d => d.title !== dataset.title);
            this.setState({ datasets: newDatasets });
        }

        addMonth() {
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

        removeMonth() {
            const { labels, datasets } = this.state;
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

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, borderColor }) => (
                <Dataset
                    key={title}
                    title={title}
                    values={values}
                    borderColor={borderColor}
                    backgroundColor={borderColor} />
            ));
        }

        render() {
            const { labels, datasets } = this.state;

            const noMoreTitles = this.titles.length === 0;
            const noMoreDatasets = datasets.length === 0;
            const noMoreMonths = this.months.length === 0;
            const noMoreLabels = labels.length === 0;

            return (
                <div className="rainbow-p-vertical_large rainbow-m-bottom_large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-around_large">
                            <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center rainbow-m-horizontal_xx-large rainbow-m-vertical_large">
                        <Chart labels={labels} type="line">
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
            this.backgrounds = [
                'rgba(254, 72, 73, 0.80)',
                'rgba(255, 204, 0, 0.80)',
                'rgba(26, 209, 163, 0.80)',
                'rgba(255, 104, 55, 0.80)',
                undefined,
                undefined,
            ];
            this.months = ['July','August', 'September', 'October', 'November', 'December'];
            this.state = {
                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                datasets: [
                    {
                        title: 'Data-Blue',
                        borderColor: '#01b6f5',
                        backgroundColor: 'rgba(1, 182, 245, 0.80)',
                        values: [37, 18, 90, 56, 80, 14],
                    },
                ],
            }
        }

        addDataset() {
            const { labels, datasets } = this.state;
            const newValues = labels.map(label => Math.round(Math.random() * 100));
            const newDatasets = datasets.concat({
                title: this.titles.shift(),
                values: newValues,
                borderColor: this.colors.shift(),
                backgroundColor: this.backgrounds.shift(),
            });
            this.setState({ datasets: newDatasets });
        }

        removeDataset() {
            const { datasets } = this.state;
            if (datasets.length > 0) {
                const dataset = datasets[datasets.length - 1];
                this.titles.unshift(dataset.title);
                this.colors.unshift(dataset.borderColor);
                this.backgrounds.unshift(dataset.backgroundColor);
                const newDatasets = datasets.filter(d => d.title !== dataset.title);
                this.setState({ datasets: newDatasets });
            }
        }

        addMonth() {
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

        removeMonth() {
            const { labels, datasets } = this.state;
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

        renderDatasets() {
            const { datasets } = this.state;
            return datasets.map(({ title, values, borderColor, backgroundColor }) => (
                <Dataset
                    key={title}
                    title={title}
                    values={values}
                    borderColor={borderColor}
                    backgroundColor={backgroundColor}
                    fill />
            ));
        }

        render() {
            const { labels, datasets } = this.state;

            const noMoreTitles = this.titles.length === 0;
            const noMoreDatasets = datasets.length === 0;
            const noMoreMonths = this.months.length === 0;
            const noMoreLabels = labels.length === 0;

            return (
                <div className="rainbow-p-vertical_large rainbow-m-bottom_x-large">
                    <div className="rainbow-flex rainbow-flex_row rainbow-justify_end">
                        <ButtonGroup className="rainbow-m-around_large rainbow-p-bottom_large">
                            <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                            <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Month
                            </Button>
                            <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Month
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center rainbow-m-horizontal_xx-large rainbow-m-vertical_large">
                        <Chart
                            labels={labels}
                            type="line"
                            disableCurves>
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
            const {labels, dataset} = this.state;
            const newLabels = labels.concat(this.titles.shift());
            const newDataset = dataset.concat({
                value: Math.round(Math.random() * 100),
                color: this.colors.shift()
            });
            this.setState({ labels: newLabels, dataset: newDataset });
        }

        removeData() {
            const { labels, dataset } = this.state;
            const lastLabel = labels[labels.length - 1];
            this.titles.unshift(lastLabel);
            const newLabels = labels.filter(l => l !== lastLabel);
            const lastData = dataset[dataset.length - 1];
            this.colors.unshift(lastData.color);
            const newDataset = dataset.slice(0, dataset.length - 1);
            this.setState({ labels: newLabels, dataset: newDataset });
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
            const { labels } = this.state;

            const noMoreTitles = this.titles.length === 0;
            const noMoreLabels = labels.length === 0;

            return (
                <div className="rainbow-p-around_xx-large">
                    <div>
                        <ButtonGroup className="rainbow-m-vertical_large">
                            <Button onClick={() => this.addData()} disabled={noMoreTitles}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeData()} disabled={noMoreLabels}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-p-around_xx-large">
                        <Chart
                            labels={labels}
                            type="pie"
                            legendPosition="right"
                            disableCurves>
                            {this.renderDataset()}
                        </Chart>
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
            const {labels, dataset} = this.state;
            const newLabels = labels.concat(this.titles.shift());
            const newDataset = dataset.concat({
                value: Math.round(Math.random() * 100),
                color: this.colors.shift()
            });
            this.setState({ labels: newLabels, dataset: newDataset });
        }

        removeData() {
            const { labels, dataset } = this.state;
            const lastLabel = labels[labels.length - 1];
            this.titles.unshift(lastLabel);
            const newLabels = labels.filter(l => l !== lastLabel);
            const lastData = dataset[dataset.length - 1];
            this.colors.unshift(lastData.color);
            const newDataset = dataset.slice(0, dataset.length - 1);
            this.setState({ labels: newLabels, dataset: newDataset });
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
            const { labels } = this.state;

            const noMoreTitles = this.titles.length === 0;
            const noMoreLabels = labels.length === 0;

            return (
                <div className="rainbow-p-around_xx-large">
                    <div>
                        <ButtonGroup className="rainbow-m-vertical_large">
                            <Button onClick={() => this.addData()} disabled={noMoreTitles}>
                                <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Add Data
                            </Button>
                            <Button onClick={() => this.removeData()} disabled={noMoreLabels}>
                                <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Remove Data
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div  className="rainbow-align-content_center rainbow-m-around_xx-large rainbow-p-around_xx-large">
                        <Chart
                            labels={labels}
                            type="doughnut"
                            legendPosition="right"
                            disableCurves>
                            {this.renderDataset()}
                        </Chart>
                    </div>
                </div>
            );
        }
    }

    <DoughnutChartExample />
