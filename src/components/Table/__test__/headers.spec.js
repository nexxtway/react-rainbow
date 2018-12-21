import React from 'react';
import { mount } from 'enzyme';
import Column from '../../Column';
import resolveColumns from '../resolve-columns';
import Headers from '../head';

describe('<Headers />', () => {
    it('should return an array of table header elements', () => {
        const columns = resolveColumns([
            <Column field="a" header="header" />,
            <Column field="b" header="header-2" />,
        ]);
        const component = mount(<Headers columns={columns} />);
        const headers = component.find('th');

        expect(headers.length).toBe(2);
        expect(headers.get(0).props.className).toBe('rainbow-table_header');
        expect(headers.get(0).props.children).toBe('header');
    });
    it('should return null if no columns is passed', () => {
        const component = mount(<Headers />);
        expect(component.children().length).toBe(0);
    });
});
