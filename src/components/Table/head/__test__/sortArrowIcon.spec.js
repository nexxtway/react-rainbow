import React from 'react';
import { mount } from 'enzyme';
import SortArrowIcon from '../sortArrowIcon';

describe('<SortArrowIcon />', () => {
    it('should set the right class names when direction is asc', () => {
        const component = mount(<SortArrowIcon direction="asc" />);
        expect(component.find('svg').prop('className')).toBe(
            'rainbow-table_header-arrow rainbow-table_header-arrow--asc',
        );
    });
    it('should set the right class names when direction is desc', () => {
        const component = mount(<SortArrowIcon direction="desc" />);
        expect(component.find('svg').prop('className')).toBe('rainbow-table_header-arrow');
    });
});
