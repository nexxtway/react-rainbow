/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import Table from '../index';
import Column from '../../Column';

const data = [
    {
        name: 'a',
    },
];

const CellComponent = ({ value }) => <span>{value}</span>;

describe('<Table />', () => {
    it('should return a table with one column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" />
            </Table>,
        );

        const header = component.find('th');
        const cell = component.find('td');

        expect(header.text()).toBe('Name');
        expect(cell.text()).toBe('a');
    });
    it('should renders the component set for the column', () => {
        const component = mount(
            <Table data={data}>
                <Column field="name" header="Name" component={CellComponent} />
            </Table>,
        );

        expect(component.find(CellComponent).exists()).toBe(true);
    });
});
