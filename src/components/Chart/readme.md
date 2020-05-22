##### Chart basic:

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

<div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
    <div className="rainbow-align-content_center">
        <Chart
            labels={['A', 'B', 'C', 'D']}
            type="line"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
        >
            <Dataset
                title="Dataset 1"
                values={[23, 45, 123, 56]}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
            />
            <Dataset
                title="Dataset 2"
                values={[66, 100, 30, 156]}
                backgroundColor="#01b6f5"
                borderColor="#01b6f5"
            />
        </Chart>
    </div>
</div>
```

##### Bar chart vertical:

```js
import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class BarChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
        this.colors = ['#01b6f5', '#663398', '#061c3f'];
        this.months = ['July', 'August', 'September', 'October', 'November', 'December'];
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
            const newValues = values.slice(0, values.length - 1);
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
                <div className="rainbow-align-content_center rainbow-flex_wrap">
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                        <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                        <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                    </ButtonGroup>
                </div>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="bar">
                        {this.renderDatasets()}
                    </Chart>
                </div>
            </div>
        );
    }
}

<BarChartExample />;
```

##### Line chart:

```js
import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class LineChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Data-Yellow', 'Data-Green', 'Data-Orange', 'Data-Purple', 'Data-Dark'];
        this.colors = ['#ffcc00', '#1ad1a3', '#ff6837', '#663398', '#061c3f'];
        this.months = ['July', 'August', 'September', 'October', 'November', 'December'];
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
        };
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
            const newValues = values.slice(0, values.length - 1);
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
                backgroundColor={borderColor}
            />
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
                <div className="rainbow-align-content_center rainbow-flex_wrap">
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                        <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                        <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                    </ButtonGroup>
                </div>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="line">
                        {this.renderDatasets()}
                    </Chart>
                </div>
            </div>
        );
    }
}

<LineChartExample />;
```

##### Line chart fill:

```js
import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class LineChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = [
            'Data-Red',
            'Data-Yellow',
            'Data-Green',
            'Data-Orange',
            'Data-Purple',
            'Data-Dark',
        ];
        this.colors = ['#fe4849', '#ffcc00', '#1ad1a3', '#ff6837', '#663398', '#061c3f'];
        this.backgrounds = [
            'rgba(254, 72, 73, 0.80)',
            'rgba(255, 204, 0, 0.80)',
            'rgba(26, 209, 163, 0.80)',
            'rgba(255, 104, 55, 0.80)',
            undefined,
            undefined,
        ];
        this.months = ['July', 'August', 'September', 'October', 'November', 'December'];
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
        };
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
            const newValues = values.slice(0, values.length - 1);
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
                fill
            />
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
                <div className="rainbow-align-content_center rainbow-flex_wrap">
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addDataset()} disabled={noMoreTitles}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                        <Button onClick={() => this.removeDataset()} disabled={noMoreDatasets}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                    </ButtonGroup>
                    <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                        <Button onClick={() => this.addMonth()} disabled={noMoreMonths}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                        <Button onClick={() => this.removeMonth()} disabled={noMoreLabels}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Month
                        </Button>
                    </ButtonGroup>
                </div>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="line" disableCurves>
                        {this.renderDatasets()}
                    </Chart>
                </div>
            </div>
        );
    }
}

<LineChartExample />;
```

##### Pie chart:

```js
import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class PieChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
        this.colors = ['#01b6f5', '#663398', '#061c3f'];
        this.state = {
            labels: ['Data-Red', 'Data-Orange', 'Data-Yellow', 'Data-Green'],
            dataset: [
                {
                    value: 10,
                    color: '#fe4849',
                },
                {
                    value: 15,
                    color: '#ff6837',
                },
                {
                    value: 42,
                    color: '#ffcc00',
                },
                {
                    value: 33,
                    color: '#1ad1a3',
                },
            ],
        };
    }

    addData() {
        const { labels, dataset } = this.state;
        const newLabels = labels.concat(this.titles.shift());
        const newDataset = dataset.concat({
            value: Math.round(Math.random() * 100),
            color: this.colors.shift(),
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
            <div className="rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
                <ButtonGroup className="rainbow-align-content_center rainbow-flex_wrap">
                    <Button onClick={() => this.addData()} disabled={noMoreTitles}>
                        <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" /> Data
                    </Button>
                    <Button onClick={() => this.removeData()} disabled={noMoreLabels}>
                        <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" /> Data
                    </Button>
                </ButtonGroup>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="pie" legendPosition="right" disableCurves>
                        {this.renderDataset()}
                    </Chart>
                </div>
            </div>
        );
    }
}

<PieChartExample />;
```

##### Doughnut chart:

```js
import React from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

class DoughnutChartExample extends React.Component {
    constructor(props) {
        super(props);
        this.titles = ['Data-Blue', 'Data-Purple', 'Data-Dark'];
        this.colors = ['#01b6f5', '#663398', '#061c3f'];
        this.state = {
            labels: ['Data-Red', 'Data-Orange', 'Data-Yellow', 'Data-Green'],
            dataset: [
                {
                    value: 10,
                    color: '#fe4849',
                },
                {
                    value: 15,
                    color: '#ff6837',
                },
                {
                    value: 42,
                    color: '#ffcc00',
                },
                {
                    value: 33,
                    color: '#1ad1a3',
                },
            ],
        };
    }

    addData() {
        const { labels, dataset } = this.state;
        const newLabels = labels.concat(this.titles.shift());
        const newDataset = dataset.concat({
            value: Math.round(Math.random() * 100),
            color: this.colors.shift(),
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
            <div className="rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
                <div>
                    <ButtonGroup className="rainbow-m-vertical_large">
                        <Button onClick={() => this.addData()} disabled={noMoreTitles}>
                            <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                        <Button onClick={() => this.removeData()} disabled={noMoreLabels}>
                            <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                            Data
                        </Button>
                    </ButtonGroup>
                </div>
                <div
                    style={containerStyles}
                    className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
                >
                    <Chart labels={labels} type="doughnut" legendPosition="right" disableCurves>
                        {this.renderDataset()}
                    </Chart>
                </div>
            </div>
        );
    }
}

<DoughnutChartExample />;
```

##### Interactive chart:

```js
import { useState } from 'react';
import { Chart, Dataset, Card, RadioButtonGroup } from 'react-rainbow-components';
import styled from 'styled-components';

const ChartHeading = styled.div`
    padding-left: 7px;
    padding-right: 7px;    

    @media (max-width: 991px) {
        flex-direction: column;
        :nth-child(1) { text-align: center; }
    }
`;

const Title = styled.h2.attrs(props => {
   return props.theme.rainbow.palette;
})`
    font-size: 26px;
    color: ${props => props.text.label}
`;

const styles = {
    container: { width: '100%' },
    chart: {
        height: '300px'
    }
};

const chartTypes = [
    { value: 'line', label: 'Lines'},
    { value: 'bar', label: 'Bars' }
];

const months = ['Jan', 'Feb', 'March', 'April', 'May', 'June', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
const data = {
    google: [23, 45, 123, 56, 65, 11, 54, 92, 26, 86, 95, 78],
    twitter: [66, 70, 80, 62, 60, 75, 120, 111, 90, 93, 99, 69],
    facebook: [30, 60, 68, 79, 100, 112, 100, 121, 130, 105, 145, 185]
};

const chartTypeMap = {
    line: 'Lines',
    bar: 'Bar'
};

const CurrentChartType = styled.span.attrs(props => {
    return props.theme.rainbow.palette;
})`
    color: ${props => props.text.header}
`;

const InteractiveChart = () => {
    const [chartType, setChartType] = useState('line');
    
    return (
        <div className="rainbow-p-vertical_medium rainbow-m_auto">
            <div className="rainbow-align-content_center">
                <Card className="rainbow-m-horizontal_large rainbow-m-top_x-large rainbow-m-bottom_x-large rainbow-p-around_large" style={styles.container} >
        
                     <ChartHeading className="rainbow-align-content_space-between rainbow-flex rainbow-m-bottom_large">
                        <div className="rainbow-m-bottom_medium">
                            <Title>Performance</Title>
                        </div>
                    
                         <RadioButtonGroup
                            id="radio-button-group-component-1"
                            options={chartTypes}
                            value={chartType}
                            variant="brand"
                            onChange={ (e) => setChartType(e.target.value) }
                        />
                    </ChartHeading>

                    <CurrentChartType className="rainbow-flex rainbow-align-content_center rainbow-m-bottom_medium">
                        {chartTypeMap[chartType]}        
                    </CurrentChartType>            
                       
                    <Chart labels={months} type={chartType}  style={styles.chart} maintainAspectRatio={false}>
                        <Dataset
                            title="Google"
                            values={data.google}
                            backgroundColor="#fe4849"
                            borderColor="#fe4849"
                        />
                        <Dataset
                            title="Twitter"
                            values={data.twitter}
                            backgroundColor="#01b6f5"
                            borderColor="#01b6f5"
                        />
                        <Dataset
                            title="Facebook"
                            values={data.facebook}
                            backgroundColor="#3c5997"
                            borderColor="#3c5997"
                        />
                    </Chart>
                </Card>
            </div>
        </div>
    );
};

<InteractiveChart />

```

##### Chart without grid lines:

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

<div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
    <div className="rainbow-align-content_center">
        <Chart
            labels={['A', 'B', 'C', 'D']}
            type="bar"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
            disableXAxisGridLines
            disableYAxisGridLines
        >
            <Dataset
                title="Dataset 1"
                values={[23, 45, 123, 56]}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
            />
            <Dataset
                title="Dataset 2"
                values={[66, 100, 30, 156]}
                backgroundColor="#01b6f5"
                borderColor="#01b6f5"
            />
        </Chart>
    </div>
</div>
```

##### Chart with minimalist design:

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};

<div className="rainbow-p-vertical_medium rainbow-m_auto" style={containerStyles}>
    <div className="rainbow-align-content_center">
        <Chart
            labels={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']}
            type="bar"
            className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
            disableXAxisGridLines
            disableYAxisGridLines
            disableXAxisBorders
            disableYAxisBorders
            disableXAxisTickLabels
            disableYAxisTickLabels
        >
            <Dataset
                title="Dataset 1"
                values={[23, 45, 123, 56, 66, 100, 30, 156]}
                backgroundColor="#1de9b6"
                borderColor="#1de9b6"
            />
        </Chart>
    </div>
</div>
```