import React from 'react';
import { mount } from 'enzyme';
import Header from '../header';

describe('<Header />', () => {
    it('should call on onColumnSelect action when clicked', () => {
        const onColumnSelectMock = jest.fn();
        const component = mount(
            <Header sortable onColumnSelect={onColumnSelectMock} columnIndex={0} />,
        );
        component.find('th').simulate('click');
        expect(onColumnSelectMock).toHaveBeenCalledWith(expect.any(Object), 0);
    });
});
