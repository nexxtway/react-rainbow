import React from 'react';
import { mount } from 'enzyme';
import ChartJS from 'chart.js';
import { Chart } from '../index';
import Dataset from '../../Dataset';

jest.mock('chart.js', () =>
    jest.fn(() => ({
        update: jest.fn(),
        config: {},
    })),
);

describe('<Chart />', () => {
    it('should call ChartJS to render the chart when the component is mounted', () => {
        mount(
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset values={[34, 345, 234, 234]} title="Dataset 1" />
            </Chart>,
        );

        expect(ChartJS).toHaveBeenCalledWith(expect.any(Object), {
            type: 'line',
            data: {
                labels: ['A', 'B', 'C', 'D'],
                datasets: [expect.any(Object)],
            },
            options: expect.any(Object),
        });
    });
    it('should call ChartJS update method to update the chart when the component changes', () => {
        const component = mount(
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset values={[34, 345, 234, 234]} title="Dataset 1" />
            </Chart>,
        );
        const chartInstance = component.instance().chartInstance;
        component.setProps({
            labels: ['A', 'B', 'C', 'D', 'E'],
        });

        expect(chartInstance.update).toHaveBeenCalledTimes(1);
    });

    it('should call ChartJS update method to update the chart when the children changes', () => {
        const component = mount(
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset values={[34, 345, 234, 234]} title="Dataset 1" />
            </Chart>,
        );
        const chartInstance = component.instance().chartInstance;
        component.setProps({
            children: [<Dataset values={[34, 345, 234, 234, 90]} title="Dataset 1" />],
        });
        expect(chartInstance.update).toHaveBeenCalledTimes(1);
    });

    it('should update the chart type when changed dynamically', () => {
        const component = mount(
            <Chart labels={['A', 'B', 'C', 'D']} type="line">
                <Dataset values={[34, 345, 234, 234]} title="Dataset 1" />
            </Chart>,
        );
        component.setProps({
            type: 'bar',
        });
        expect(component.instance().chartInstance.config.type).toBe('bar');
    });
});
