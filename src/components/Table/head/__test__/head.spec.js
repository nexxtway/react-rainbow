import React from 'react';
import { mount } from 'enzyme';
import Head from '../';

describe('<Head />', () => {
    it('should return an array of th elements', () => {
        const columns = [
            { header: 'header' },
            { header: 'header-2' },
        ];
        const component = mount(<Head columns={columns} />);
        const head = component.find('th');

        expect(head.length).toBe(2);
        expect(head.get(0).props.children).toBe('header');
        expect(head.get(1).props.children).toBe('header-2');
    });
    it('should return null if no columns is passed', () => {
        const component = mount(<Head />);
        expect(component.children().length).toBe(0);
    });
});
