import React from 'react';
import { mount } from 'enzyme';
import Rows from '../body';

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

describe('<Rowx />', () => {
    it('should return an empty component if no data and columns are passed', () => {
        const component = mount(<Rows />);
        expect(component.children().length).toBe(0);
    });

    it('should return an empty component if data or columns are not arrays', () => {
        const component = mount(<Rows columns={{}} data={[]} />);
        expect(component.children().length).toBe(0);
    });

    it('should return an array of Row components', () => {
        const component = mount(<Rows data={data} columns={columns} />);
        const rows = component.find('Row');

        expect(rows.get(0).props).toEqual({
            data: {
                name: 'a',
            },
            columns,
        });
    });
});
