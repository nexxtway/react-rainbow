import React from 'react';
import { mount } from 'enzyme';
import Row from '../body/row';

const data = { name: 'a' };

const columns = [
    {
        component: undefined,
        field: 'name',
    },
];

describe('<Row />', () => {
    it('should return a tr element with no children', () => {
        const component = mount(<Row data={data} colums={undefined} />);

        expect(component.find('tr').children().length).toBe(0);
    });
    it('should return a tr element with a Cell component', () => {
        const component = mount(<Row data={data} colums={columns} />);
        const trElement = component.find('tr');

        expect(trElement.children().length).toBe(1);
        expect(trElement.find('Cell').props()).toEqual({
            component: undefined,
            value: 'a',
        });
    });
});
