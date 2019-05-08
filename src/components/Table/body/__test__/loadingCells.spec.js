import React from 'react';
import { mount } from 'enzyme';
import LoadingCells from '../loadingCells';

describe('<LoadingCells />', () => {
    it('should not render anything when value is 0', () => {
        const component = mount(<LoadingCells value={0} />);
        expect(component.children().length).toBe(0);
    });
    it('should render the amount of children that match with the value passed', () => {
        const component = mount(<LoadingCells value={3} columns={[{}, {}, {}]} />);
        expect(component.children().length).toBe(3);
    });
});
