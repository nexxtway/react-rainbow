import React from 'react';
import { mount } from 'enzyme';
import Options from './../options';

describe('<Options />', () => {
    it('should not render any option when pages is 0', () => {
        const component = mount(<Options pages={0} />);
        expect(component.children().length).toBe(0);
    });
    it('should render the right amount of options when pages is greater than 1', () => {
        const component = mount(<Options pages={4} />);
        expect(component.children().length).toBe(4);
    });
});
