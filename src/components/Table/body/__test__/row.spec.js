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
        const cell = component.find('Cell');

        expect(cell.length).toBe(2);
        expect(cell.get(0).props).toEqual({
            component: undefined,
            value: 'a',
            isFirst: true,
        });
        expect(cell.get(1).props).toEqual({
            component: undefined,
            value: 26,
            isFirst: false,
        });
    });
    it('should set the right value to isFirst prop in Cell component', () => {
        const component = mount(<Row data={data} columns={columns} />);
        const cell = component.find('Cell');
        expect(cell.at(0).prop('isFirst')).toBe(true);
        expect(cell.at(1).prop('isFirst')).toBe(false);
    });
    it('should set null to value prop in Cell component when the column field does not exists', () => {
        const wrongColumns = [{
            field: 'wrong field',
        }];
        const component = mount(<Row data={data} columns={wrongColumns} />);
        const cell = component.find('Cell');
        expect(cell.at(0).prop('value')).toBe(null);
    });
});
