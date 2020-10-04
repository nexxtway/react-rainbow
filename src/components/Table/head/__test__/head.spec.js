import React from 'react';
import { mount } from 'enzyme';
import Head from '../';

const columns = [
    { header: 'header', field: 'name' },
    { header: 'header-2', field: 'email' },
    { header: 'header-3' },
];

describe('<Head />', () => {
    it('should return null if columns is not passed', () => {
        const component = mount(<Head />);
        expect(component.children().length).toBe(0);
    });
    it('should return null if columns is an empty array', () => {
        const component = mount(<Head columns={[]} />);
        expect(component.children().length).toBe(0);
    });
    it('should return the right amount of Header components', () => {
        const component = mount(<Head columns={columns} />);
        const header = component.find('Header');
        expect(header.length).toBe(3);
    });
    it('should set the right sortDirection in Header component when only defaultSortDirection is passed', () => {
        const component = mount(<Head columns={columns} defaultSortDirection="desc" />);
        const header = component.find('Header');
        expect(header.at(0).prop('sortDirection')).toBe('desc');
    });
    it('should set the right sortDirection in Header component when sortDirection is passed and sortedBy match with the column field', () => {
        const component = mount(
            <Head
                columns={columns}
                defaultSortDirection="desc"
                sortDirection="asc"
                sortedBy="name"
            />,
        );
        const header = component.find('Header');
        expect(header.at(0).prop('sortDirection')).toBe('asc');
    });
    it('should set isSorted to true in Header component when the sortedBy passed match with the column field', () => {
        const component = mount(<Head columns={columns} sortedBy="name" />);
        const header = component.find('Header');
        expect(header.at(0).prop('isSorted')).toBe(true);
    });
    it('should set isSorted to false in Header component when the sortedBy passed does not match with the column field', () => {
        const component = mount(<Head columns={columns} sortedBy="other field" />);
        const header = component.find('Header');
        expect(header.at(0).prop('isSorted')).toBe(false);
    });
});
