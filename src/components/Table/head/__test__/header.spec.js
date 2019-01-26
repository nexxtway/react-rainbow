import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';

describe('<Header />', () => {
    it('should call onSort if its clicked', () => {
        const onSortMockFn = jest.fn();
        const component = mount(
            <Header
                sortable
                sortDirection="asc"
                columnIndex={0}
                onSort={onSortMockFn} />,
        );
        const clickableHeader = component.find('.rainbow-table_header-container');
        clickableHeader.simulate('click');
        expect(onSortMockFn).toHaveBeenCalledWith(expect.any(Object), 0, 'asc');
    });
});
