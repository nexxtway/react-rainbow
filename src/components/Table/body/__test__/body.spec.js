import React from 'react';
import { mount } from 'enzyme';
import Body from '../';

const columns = [{
    component: undefined,
    field: 'name',
}];

const data = [
    {
        name: 'a',
    },
    {
        name: 'b',
    },
];

describe('<Rows />', () => {
    it('should return an empty component if no data and columns are passed', () => {
        const component = mount(<Body />);
        expect(component.children().length).toBe(0);
    });

    it('should return an empty component if data or columns are not arrays', () => {
        const component = mount(<Body columns={{}} data={[]} />);
        expect(component.children().length).toBe(0);
    });

    it('should return an array of Row components', () => {
        const component = mount(<Body data={data} columns={columns} />);
        const rows = component.find('Row');

        expect(rows.length).toBe(2);
        expect(rows.get(0).props).toEqual({
            data: {
                name: 'a',
            },
            columns,
            id: 'row-0',
            number: 0,
        });
        expect(rows.get(1).props).toEqual({
            data: {
                name: 'b',
            },
            columns,
            id: 'row-1',
            number: 1,
        });
    });
});
