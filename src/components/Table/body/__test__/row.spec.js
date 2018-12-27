import React from 'react';
import { mount } from 'enzyme';
import Row from '../row';

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
        const component = mount(<Row data={data} columns={undefined} />);
        expect(component.find('tr').children().length).toBe(0);
    });
    it('should return the amount of Cell components that correspond with the columns', () => {
        const component = mount(<Row data={data} columns={columns} />);
        const trElement = component.find('tr');
        const cell = trElement.find('Cell');

        expect(cell.length).toBe(2);
        expect(cell.get(0).props).toEqual({
            component: undefined,
            value: 'a',
            width: 'unset',
        });
        expect(cell.get(1).props).toEqual({
            component: undefined,
            value: 26,
            width: 'unset',
        });
    });
});
