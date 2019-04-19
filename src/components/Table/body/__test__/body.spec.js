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
    it('should return an empty component if no data and columns are passed', () => {
        const component = mount(<Body />);
        expect(component.children().length).toBe(0);
    });
    it('should return an empty component if data or columns are not arrays', () => {
        const component = mount(<Body columns={{}} data={[]} />);
        expect(component.children().length).toBe(0);
    });
    it('should return an array of Row components', () => {
        const component = mount(<Body data={data} columns={columns} rows={rows} />);
        const rowElements = component.find('Row');

        expect(rowElements.length).toBe(2);
        expect(rowElements.get(0).props).toEqual(expect.objectContaining({
            data: {
                name: 'a',
            },
            columns,
        }));
        expect(rowElements.get(1).props).toEqual(expect.objectContaining({
            data: {
                name: 'b',
            },
            columns,
        }));
    });
});
