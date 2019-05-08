import React from 'react';
import { mount } from 'enzyme';
import Body from '../';
import { SELECTABLE_CHECKBOX } from '../../helpers/columns';

const columns = [
    {
        type: SELECTABLE_CHECKBOX,
    },
    {
        component: undefined,
        field: 'name',
    },
];

const data = [
    {
        name: 'a',
    },
    {
        name: 'b',
    },
];
const rows = [
    {
        key: 'row-1',
        inputType: 'checkbox',
    },
    {
        key: 'row-2',
        inputType: 'checkbox',
    },
];

describe('<Body />', () => {
    it('should return an empty component when data and columns are not passed and is not loading', () => {
        const component = mount(<Body isLoading={false} />);
        expect(component.find('Empty').exists()).toBe(true);
    });
    it('should return an empty component when there is not data and is not loading', () => {
        const component = mount(<Body columns={[{}]} data={[]} isLoading={false} />);
        expect(component.find('Empty').exists()).toBe(true);
    });
    it('should return a loading component when there is not data and is loading', () => {
        const component = mount(<Body columns={[{}]} data={[]} isLoading />);
        expect(component.find('Loading').exists()).toBe(true);
    });
    it('should return one row more when there is data and is loading', () => {
        const component = mount(<Body columns={columns} data={data} isLoading />);
        expect(component.children().length).toBe(3);
    });
    it('should return an array of Row components', () => {
        const component = mount(<Body data={data} columns={columns} rows={rows} />);
        const rowElements = component.find('Row');

        expect(rowElements.length).toBe(2);
        expect(rowElements.get(0).props).toEqual(
            expect.objectContaining({
                rowData: {
                    name: 'a',
                },
                columns,
                rowIndex: 0,
                rowsLength: 2,
            }),
        );
        expect(rowElements.get(1).props).toEqual(
            expect.objectContaining({
                rowData: {
                    name: 'b',
                },
                columns,
                rowIndex: 1,
                rowsLength: 2,
            }),
        );
    });
});
