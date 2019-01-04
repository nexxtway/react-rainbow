/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import Cell from '../cell';

const CellComponent = ({ value }) => <h1>{value}</h1>;

describe('<Cell />', () => {
    it('should render a td component with text "cell-1" ', () => {
        const component = mount(<Cell value="cell-1" />);
        const td = component.find('td');
        expect(td.text()).toBe('cell-1');
    });
    it('should render a td with a component to display de value', () => {
        const component = mount(<Cell value="cell-2" component={CellComponent} />);
        const td = component.find('td');
        expect(td.find('h1').text()).toBe('cell-2');
    });
    it('should render a th component with text "cell-1" if isFrist is passed ', () => {
        const component = mount(<Cell value="cell-1" isFirst />);
        const td = component.find('th');
        expect(td.text()).toBe('cell-1');
    });
});
