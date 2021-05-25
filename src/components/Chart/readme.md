# Bar chart

##### A bar chart uses bars to show comparisons between categories of data.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 600,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const values = [18, 42, 58, 50, 19, 0, 24, 50, 33, 20, 5, 35]

const BarChartExample = () => (
    <div className="rainbow-p-vertical_large">
        <div
            style={containerStyles}
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
        >
            <Chart labels={labels} type="bar">
                <Dataset key="Sales" title="Sales" values={values} backgroundColor="#01b6f5" />
            </Chart>
        </div>
    </div>
);

    <BarChartExample />;
```

# Horizontal bar chart

##### Horizontal bar charts represent the data horizontally. It is a good way to present data with more or long labels that would be difficult to be included in the horizontal axis.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 600,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const values = [18, 42, 58, 50, 19, 0, 24, 50, 33, 20, 5, 35]

const HorizontalBarChartExample = () => (
    <div className="rainbow-p-vertical_large">
        <div
            style={containerStyles}
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
        >
            <Chart labels={labels} type="horizontalBar">
                <Dataset key="Sales" title="Sales" values={values} backgroundColor="#01b6f5" />
            </Chart>
        </div>
    </div>
);

    <HorizontalBarChartExample />;
```

# Line chart

##### A line chart is often used to visualize a trend in data over time intervals.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 600,
};
const labels = ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'];
const datasets = [
    {
        title: 'Sales',
        borderColor: '#fe4849',
        values: [37, 15, 90, 57, 80, 14],
    },
    {
        title: 'Profits',
        borderColor: '#01b6f5',
        values: [18, 39, 15, 38, 15, 35],
    },
];
function renderDatasets() {
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

const LineChartExample = () => (
    <div className="rainbow-p-vertical_large rainbow-m-bottom_large">
        <div
            style={containerStyles}
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
        >
            <Chart labels={labels} type="line">
                {renderDatasets()}
            </Chart>
        </div>
    </div>
);

    <LineChartExample />;
```

# Pie chart

##### A pie chart is a type of graph that displays data in a circular graph. The pieces of the graph are proportional to the fraction of the total in each category.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

const containerStyles = {
    maxWidth: 600,
};
const labels = ['Data-Red', 'Data-Orange', 'Data-Yellow', 'Data-Green'];
const dataset = [
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
];
function renderDataset() {
    const data = [];
    const colors = [];
    dataset.forEach(set => {
        data.push(set.value);
        colors.push(set.color);
    });

    return <Dataset title="Data" values={data} backgroundColor={colors} />;
}

const PieChartExample = () => (
    <div className="rainbow-p-vertical_xx-large rainbow-p-horizontal_medium">
        <div
            style={containerStyles}
            className="rainbow-align-content_center rainbow-m-vertical_large rainbow-m_auto"
        >
            <Chart labels={labels} type="pie" legendPosition="right">
                {renderDataset()}
            </Chart>
        </div>
    </div>
);

    <PieChartExample />;
```

# Chart with interactive data

##### Data can be added to or removed from the chart and will be updated accordingly.

```js
import React, { useState } from 'react';
import { Chart, Dataset, ButtonGroup, Button } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

const containerStyles = {
    maxWidth: 600,
};
const titles = [
    'Data-Red',
    'Data-Yellow',
    'Data-Green',
    'Data-Orange',
    'Data-Purple',
    'Data-Dark',
];
const colors = ['#fe4849', '#ffcc00', '#1ad1a3', '#ff6837', '#663398', '#061c3f'];
const backgrounds = [
    'rgba(254, 72, 73, 0.80)',
    'rgba(255, 204, 0, 0.80)',
    'rgba(26, 209, 163, 0.80)',
    'rgba(255, 104, 55, 0.80)',
    undefined,
    undefined,
];
const months = ['July', 'August', 'September', 'October', 'November', 'December'];

const InteractiveDataChartExample = () => {
    const [labels, setLabels] = useState(['January', 'February', 'March', 'April', 'May', 'June']);
    const [datasets, setDatasets] = useState(
        [
            {
                title: 'Data-Blue',
                borderColor: '#01b6f5',
                backgroundColor: 'rgba(1, 182, 245, 0.80)',
                values: [37, 18, 90, 56, 80, 14],
            },
        ]
    );

    const addDataset = () => {
        const newValues = labels.map(() => Math.round(Math.random() * 100));
        const newDatasets = datasets.concat({
            title: titles.shift(),
            values: newValues,
            borderColor: colors.shift(),
            backgroundColor: backgrounds.shift(),
        });
        setDatasets(newDatasets);
    }

    const removeDataset = () => {
        if (datasets.length > 0) {
            const dataset = datasets[datasets.length - 1];
            titles.unshift(dataset.title);
            colors.unshift(dataset.borderColor);
            backgrounds.unshift(dataset.backgroundColor);
            const newDatasets = datasets.filter(set => set.title !== dataset.title);
            setDatasets(newDatasets);
        }
    }

    const addMonth = () => {
        const newLabels = labels.concat(months.shift());
        const newDatasets = datasets.map(dataset => {
            const { values, ...rest } = dataset;
            const newValues = values.concat(Math.round(Math.random() * 100));
            return {
                ...rest,
                values: newValues,
            };
        });
        setLabels(newLabels);
        setDatasets(newDatasets);
    }

    const removeMonth = () => {
        const label = labels[labels.length - 1];
        months.unshift(label);
        const newLabels = labels.filter(item => item !== label);
        const newDatasets = datasets.map(dataset => {
            const { values, ...rest } = dataset;
            const newValues = values.slice(0, values.length - 1);
            return {
                ...rest,
                values: newValues,
            };
        });
        setLabels(newLabels);
        setDatasets(newDatasets);
    }

    const renderDatasets = () => {
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

    const noMoreTitles = titles.length === 0;
    const noMoreDatasets = datasets.length === 0;
    const noMoreMonths = months.length === 0;
    const noMoreLabels = labels.length === 0;

    return (
        <div className="rainbow-p-vertical_large rainbow-m-bottom_x-large">
            <div className="rainbow-align-content_center rainbow-flex_wrap">
                <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                    <Button onClick={() => addDataset()} disabled={noMoreTitles}>
                        <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                        Data
                    </Button>
                    <Button onClick={() => removeDataset()} disabled={noMoreDatasets}>
                        <FontAwesomeIcon icon={faMinus} className="rainbow-m-right_x-small" />{' '}
                        Data
                    </Button>
                </ButtonGroup>
                <ButtonGroup className="rainbow-m-horizontal_large rainbow-m-vertical_small">
                    <Button onClick={() => addMonth()} disabled={noMoreMonths}>
                        <FontAwesomeIcon icon={faPlus} className="rainbow-m-right_x-small" />{' '}
                        Month
                    </Button>
                    <Button onClick={() => removeMonth()} disabled={noMoreLabels}>
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
                    {renderDatasets()}
                </Chart>
            </div>
        </div>
    );
}

    <InteractiveDataChartExample />;
```

# Chart with interactive type

##### The chart type can also be changed dynamically and will update to reflect the changes.

```js
import React, { useState } from 'react';
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
    { value: 'line', label: 'Lines' },
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

const InteractiveTypeChartExample = () => {
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
                            onChange={event => setChartType(event.target.value) }
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

    <InteractiveTypeChartExample />

```

# Chart without grid lines

##### Grid lines can be hidden, as you can see in the following example.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

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

# Chart with minimalist design

##### The axis and tick labels can also be disabled, giving us a minimalist design.

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';

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

# Bar chart with integrated plugins

##### There are many available plugins that can be integrated into your charts. You can see a list of the plugins here:
##### https://github.com/chartjs/awesome#plugins

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';
import datalabels from 'chartjs-plugin-datalabels';
import colorschemes from 'chartjs-plugin-colorschemes';

const plugins = [datalabels, colorschemes];

const containerStyles = {
    maxWidth: 600,
};

    <div className="rainbow-p-vertical_large rainbow-m_auto" style={containerStyles}>
        <div className="rainbow-align-content_center">
            <Chart
                plugins={plugins}
                datalabels={ { color: '#fc8d62', anchor: 'end', align: 'top' } }
                colorschemes={ { scheme: 'brewer.SetTwo7' } }
                labels={['A', 'B', 'C', 'D']}
                type="bar"
                className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
                disableXAxisGridLines
                disableYAxisGridLines
            >
                <Dataset
                    datalabels={ { color: '#66c2a5' } }
                    title="Dataset 1"
                    values={[15, 33, 111, 42]}
                />
                <Dataset
                    title="Dataset 2"
                    values={[23, 45, 123, 56]}
                />
                <Dataset
                    datalabels={ { color: '#8da0cb' } }
                    title="Dataset 3"
                    values={[66, 100, 30, 156]}
                />
            </Chart>
        </div>
    </div>
```

# Bar chart with `options` object

##### In addition to the available props, you can pass an `options` object to fully customize your charts. You can see all the options here: https://www.chartjs.org/docs/2.7.3/general/

```js
import React from 'react';
import { Chart, Dataset } from 'react-rainbow-components';
import datalabels from 'chartjs-plugin-datalabels';
import colorschemes from 'chartjs-plugin-colorschemes';

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomValues(len, min, max) {
    return Array(len)
        .fill(0)
        .map(() => getRandomInt(min, max));
}

const labels = [
    '07/21',
    '07/22',
    '07/23',
    '07/24',
    '07/25',
    '07/26',
    '07/27',
    '07/28',
    '07/29',
    '07/30',
    '08/01',
    '08/02',
];
const options = {
    maintainAspectRatio: true,
    scales: {
        xAxes: [
            {
                id: 'axis1',
                stacked: true,
                type: 'category',
                barThickness: 27,
                gridLines: {
                    display: false,
                }
            },
            {
                id: 'axis2',
                stacked: true,
                type: 'category',
                gridLines: {
                    display: false,
                },
                display: false,
            }
        ],
        yAxes: [{
            gridLines: {
                display: false,
            },
            scaleLabel: {
                display: true,
                labelString: 'SMS',
                fontFamily: 'Lato',
                fontSize: 14,
                fontStyle: 'bold',
                fontColor: '#000',
            },
            ticks: {
                suggestedMin: 0,
                suggestedMax: 50,
            }
        }]
    }
}
const plugins = [datalabels, colorschemes];
const containerStyles = {
    maxWidth: 800,
};
const datalabelsConf = { anchor: 'end', align: 'top' };

const ChartWithOptionsObjectExample = () => {
    return (
        <div className="rainbow-p-vertical_large rainbow-m_auto" style={containerStyles}>
            <div className="rainbow-align-content_center">
                <Chart
                    plugins={plugins}
                    datalabels={datalabelsConf}
                    labels={labels}
                    type="bar"
                    className="rainbow-m-horizontal_xx-large rainbow-m-top_x-large"
                    disableXAxisGridLines
                    disableYAxisGridLines
                    options={options}
                >
                    <Dataset
                        id="data1"
                        title="SMS Delivered"
                        values={getRandomValues(12, 10, 30)}
                        backgroundColor="#68c4e4"
                        xAxisId="axis1"
                        datalabels={{ color: '#68c4e4' }}
                    />
                    <Dataset
                        id="data2"
                        title="SMS Sent"
                        values={getRandomValues(12, 30, 40)}
                        backgroundColor="#dce5e4"
                        xAxisId="axis2"
                        datalabels={{ color: '#cad5d5' }}
                    />
                </Chart>
            </div>
        </div>
    )
}

    <ChartWithOptionsObjectExample />;
```
