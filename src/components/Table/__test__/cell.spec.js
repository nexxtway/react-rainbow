/* eslint-disable react/prop-types */
import React from 'react';
import { mount } from 'enzyme';
import Cell from '../body/cell';

const CellComponent = ({ value }) => <span>{value}</span>;

describe('<Cell />', () => {
    it('should render a td component with text "cell-1" ', () => {
        const component = mount(<Cell value="cell-1" />);
        expect(component.text()).toBe('cell-1');
    });

    it('should render a td with a component to display de value', () => {
        const component = mount(<Cell value="cell-1" component={CellComponent} />);
        const cellComponent = component.find(CellComponent);
        expect(cellComponent.exists()).toBe(true);
        expect(cellComponent.props().value).toBe('cell-1');
    });
});
