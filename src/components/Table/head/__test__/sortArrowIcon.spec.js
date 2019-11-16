import React from 'react';
import { mount } from 'enzyme';
import SortArrowIcon from '../sortArrowIcon';
import StyledSortArrowIcon from './../styled/sortArrowIcon';

describe('<SortArrowIcon />', () => {
    it('should set the prop arrowAscendent to true when direction is asc', () => {
        const component = mount(<SortArrowIcon direction="asc" />);
        expect(component.find(StyledSortArrowIcon).prop('arrowAscendent')).toBe(true);
    });
    it('should set the prop arrowAscendent to true when direction is desc', () => {
        const component = mount(<SortArrowIcon direction="desc" />);
        expect(component.find(StyledSortArrowIcon).prop('arrowAscendent')).toBe(false);
    });
});
