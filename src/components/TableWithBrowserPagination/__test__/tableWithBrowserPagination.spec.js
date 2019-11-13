import React from 'react';
import { mount } from 'enzyme';
import TableWithBrowserPagination from './../index';
import Pagination from '../../Pagination';
import Table from '../../Table';
import Options from '../options';
import getPageItems from '../helpers/getPageItems';

jest.mock('./../helpers/getPageItems', () =>
    jest.fn(() => [
        { name: 'Leandro Torres' },
        { name: 'Tahimi' },
        { name: 'Reinier' },
        { name: 'Sara' },
    ]),
);

const data = [
    { name: 'Leandro Torres' },
    { name: 'JL Torres' },
    { name: 'Reinier' },
    { name: 'Sara' },
    { name: 'Tahimi L' },
    { name: 'Saray' },
    { name: 'J Leandro Torres' },
    { name: 'Tahimi' },
    { name: 'Sara P' },
    { name: 'Leo Torres' },
    { name: 'Pepito' },
    { name: 'Juanito' },
    { name: 'Lola' },
    { name: 'Marta' },
];

const nextData = [
    { name: 'Leandro Torres' },
    { name: 'JL Torres' },
    { name: 'Reinier' },
    { name: 'Sara' },
    { name: 'Tahimi L' },
    { name: 'Saray' },
    { name: 'J Leandro Torres' },
    { name: 'Tahimi' },
    { name: 'Sara P' },
    { name: 'Leo Torres' },
];

describe('<TableWithBrowserPagination />', () => {
    it('should show the Pagination when pageSize is less than data length', () => {
        const component = mount(
            <TableWithBrowserPagination keyField="name" data={data} pageSize={5} />,
        );
        expect(component.find(Pagination).exists()).toBe(true);
    });
    it('should not show the Pagination when pageSize is equal or more than data length', () => {
        const pageSizes = [14, 15];
        pageSizes.forEach(pageSize => {
            const component = mount(
                <TableWithBrowserPagination keyField="name" data={data} pageSize={pageSize} />,
            );
            expect(component.find(Pagination).exists()).toBe(false);
        });
    });
    it('should show the Select when the pages amount is greater than 6', () => {
        const component = mount(
            <TableWithBrowserPagination keyField="name" data={data} pageSize={1} />,
        );
        expect(component.find('select').exists()).toBe(true);
    });
    it('should not show the Select when the pages amount is equal or less than 6', () => {
        const pageSizes = [3, 4];
        pageSizes.forEach(pageSize => {
            const component = mount(
                <TableWithBrowserPagination keyField="name" data={data} pageSize={pageSize} />,
            );
            expect(component.find('select').exists()).toBe(false);
        });
    });
    it('should pass the right data to Table', () => {
        const component = mount(<TableWithBrowserPagination keyField="name" />);
        expect(component.find(Table).prop('data')).toEqual([
            { name: 'Leandro Torres' },
            { name: 'Tahimi' },
            { name: 'Reinier' },
            { name: 'Sara' },
        ]);
    });
    it('should pass the right activePage to Pagination', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={2} keyField="name" />,
        );
        expect(component.find(Pagination).prop('activePage')).toBe(1);
    });
    it('should pass the right pages to Pagination', () => {
        const pageSizes = [2, 3];
        const expectedPages = [7, 5];
        pageSizes.forEach((pageSize, index) => {
            const component = mount(
                <TableWithBrowserPagination keyField="name" data={data} pageSize={pageSize} />,
            );
            expect(component.find(Pagination).prop('pages')).toBe(expectedPages[index]);
        });
    });
    it('should pass the right value to Select', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        expect(component.find('select').prop('value')).toBe(1);
    });
    it('should pass the right pages to Options', () => {
        const pageSizes = [1, 2];
        const expectedPages = [14, 7];
        pageSizes.forEach((pageSize, index) => {
            const component = mount(
                <TableWithBrowserPagination keyField="name" data={data} pageSize={pageSize} />,
            );
            expect(component.find(Options).prop('pages')).toBe(expectedPages[index]);
        });
    });
    it('should call updateData when pageSize change dynamically', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.instance().updateData = jest.fn();
        component.setProps({ pageSize: 22 });
        component.update();
        expect(component.instance().updateData).toHaveBeenCalledTimes(1);
    });
    it('should set the current activePage when data change dynamically and activePage is less than pages amount', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 3 });
        component.setProps({ data: nextData });
        component.update();
        expect(component.find('select').prop('value')).toBe(3);
        expect(component.find(Pagination).prop('activePage')).toBe(3);
    });
    it('should set the current activePage when data change dynamically and activePage is equal to pages amount', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 10 });
        component.setProps({ data: nextData });
        component.update();
        expect(component.find('select').prop('value')).toBe(10);
        expect(component.find(Pagination).prop('activePage')).toBe(10);
    });
    it('should set activePage to 1 when data change dynamically and activePage is greater than pages amount', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 11 });
        component.setProps({ data: nextData });
        component.update();
        expect(component.find('select').prop('value')).toBe(1);
        expect(component.find(Pagination).prop('activePage')).toBe(1);
    });
    it('should call getPageItems with the right data for second time when data change dynamically and activePage is less than pages amount', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 3 });
        component.setProps({ data: nextData });
        component.update();
        expect(getPageItems).toHaveBeenCalledTimes(2);
        expect(getPageItems.mock.calls[1][0]).toEqual({
            activePage: 3,
            data: nextData,
            pageSize: 1,
        });
    });
    it('should call getPageItems with the right data for second time when data change dynamically and activePage is equal to pages amount', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 10 });
        component.setProps({ data: nextData });
        component.update();
        expect(getPageItems).toHaveBeenCalledTimes(2);
        expect(getPageItems.mock.calls[1][0]).toEqual({
            activePage: 10,
            data: nextData,
            pageSize: 1,
        });
    });
    it('should call getPageItems with the right data for second time when data change dynamically and activePage is greater than pages amount', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.setState({ activePage: 11 });
        component.setProps({ data: nextData });
        component.update();
        expect(getPageItems).toHaveBeenCalledTimes(2);
        expect(getPageItems.mock.calls[1][0]).toEqual({
            activePage: 1,
            data: nextData,
            pageSize: 1,
        });
    });
    it('should set the right activePage when select a page option in select element', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.find('select').simulate('change', {
            target: { value: 3 },
        });
        expect(component.find('select').prop('value')).toBe(3);
        expect(component.find(Pagination).prop('activePage')).toBe(3);
    });
    it('should call getPageItems with the right data when select a page option in select element', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.find('select').simulate('change', {
            target: { value: 3 },
        });
        expect(getPageItems.mock.calls[1][0]).toEqual({
            activePage: 3,
            data,
            pageSize: 1,
        });
    });
    it('should call scrollTop when select a page option in select element', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.instance().table.current.scrollTop = jest.fn();
        component.find('select').simulate('change', {
            target: { value: 3 },
        });
        expect(component.instance().table.current.scrollTop).toHaveBeenCalled();
    });
    it('should set the right activePage when select a page in Pagination', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        const nextPageButtonComponent = component.find('NavigationButton').at(1);
        nextPageButtonComponent.find('button').simulate('click');
        expect(component.find('select').prop('value')).toBe(2);
        expect(component.find(Pagination).prop('activePage')).toBe(2);
    });
    it('should call getPageItems with the right data when select a page in Pagination', () => {
        getPageItems.mockReset();
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        const nextPageButtonComponent = component.find('NavigationButton').at(1);
        nextPageButtonComponent.find('button').simulate('click');
        expect(getPageItems).toHaveBeenCalledTimes(2);
        expect(getPageItems.mock.calls[1][0]).toEqual({
            activePage: 2,
            data,
            pageSize: 1,
        });
    });
    it('should call scrollTop when select a page in Pagination', () => {
        const component = mount(
            <TableWithBrowserPagination data={data} pageSize={1} keyField="name" />,
        );
        component.instance().table.current.scrollTop = jest.fn();
        const nextPageButtonComponent = component.find('NavigationButton').at(1);
        nextPageButtonComponent.find('button').simulate('click');
        expect(component.instance().table.current.scrollTop).toHaveBeenCalled();
    });
});
