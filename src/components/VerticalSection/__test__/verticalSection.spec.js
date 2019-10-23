import React from 'react';
import { mount } from 'enzyme';
import VerticalSection from '../';
import StyledContainer from '../styled/container';

describe('<VerticalSection/>', () => {
    it('should have the right className the container element', () => {
        const component = mount(<VerticalSection />);
        expect(component.find(StyledContainer).exists()).toBe(true);
    });
    it('should render the children passed', () => {
        const component = mount(<VerticalSection>the children text</VerticalSection>);
        expect(component.find('ul').text()).toBe('the children text');
    });
});
