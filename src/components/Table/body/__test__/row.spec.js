import React from 'react';
import { mount } from 'enzyme';
import Row from '../row';
import { SELECTABLE_CHECKBOX } from '../../helpers/columns';

const data = { name: 'a', number: 26 };

const columns = [
    {
        component: undefined,
        field: 'name',
    },
    {
        component: undefined,
        field: 'number',
    },
];

describe('<Row />', () => {
    it('should return a tr element with no children when columns is not passed', () => {
        const component = mount(<Row rowData={data} columns={undefined} />);
        expect(component.find('tr').children().length).toBe(0);
    });
    it('should return the amount of Cell components that correspond with the columns', () => {
        const component = mount(<Row rowData={data} columns={columns} />);
        const cell = component.find('Cell');

        expect(cell.length).toBe(2);
        expect(cell.get(0).props).toEqual(
            expect.objectContaining({
                value: 'a',
                isFirst: true,
                rowData: {
                    name: 'a',
                    number: 26,
                },
            }),
        );
        expect(cell.get(1).props).toEqual(
            expect.objectContaining({
                value: 26,
                isFirst: false,
                rowData: {
                    name: 'a',
                    number: 26,
                },
            }),
        );
    });
    it('should set the right value to isFirst prop in Cell component', () => {
        const component = mount(<Row rowData={data} columns={columns} />);
        const cell = component.find('Cell');
        expect(cell.at(0).prop('isFirst')).toBe(true);
        expect(cell.at(1).prop('isFirst')).toBe(false);
    });
    it('should set null to value prop in Cell component when the column field does not exists', () => {
        const wrongColumns = [
            {
                field: 'wrong field',
            },
        ];
        const component = mount(<Row rowData={data} columns={wrongColumns} />);
        const cell = component.find('Cell');
        expect(cell.at(0).prop('value')).toBe(null);
    });
    it('should set the right class names in tr element when the row is selected', () => {
        const component = mount(<Row rowData={data} columns={columns} isSelected />);
        expect(component.find('tr').prop('className')).toBe(
            'rainbow-table_body-row rainbow-table_body-row-selected',
        );
    });
    it('should set aria-selected in tr element to false when the row is not selected', () => {
        const component = mount(<Row rowData={data} columns={columns} />);
        expect(component.find('tr').prop('aria-selected')).toBe(false);
    });
    it('should set aria-selected in tr element to true when the row is selected', () => {
        const component = mount(<Row rowData={data} columns={columns} isSelected />);
        expect(component.find('tr').prop('aria-selected')).toBe(true);
    });
    it('should set the right value to isFirst prop in Cell component when the firs column is selectable checkbox', () => {
        const columnsWithSelectable = [
            {
                type: SELECTABLE_CHECKBOX,
            },
            {
                component: undefined,
                field: 'number',
            },
            {
                field: 'name',
            },
        ];
        const component = mount(<Row rowData={data} columns={columnsWithSelectable} />);
        const cell = component.find('Cell');
        expect(cell.at(0).prop('isFirst')).toBe(false);
        expect(cell.at(1).prop('isFirst')).toBe(true);
        expect(cell.at(2).prop('isFirst')).toBe(false);
    });
    it('should render LoadingCells component when data type is LOADING', () => {
        const rowData = { type: 'LOADING' };
        const component = mount(<Row rowData={rowData} columns={columns} />);
        expect(component.find('LoadingCells').exists()).toBe(true);
    });
});
