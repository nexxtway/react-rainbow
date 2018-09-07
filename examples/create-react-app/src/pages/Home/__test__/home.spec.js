import React from 'react';
import { shallow } from 'enzyme';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';
import Home from './../';

describe('<Home/>', () => {
    it('should render the VerticalNavigation', () => {
        const component = shallow(
            <Home />,
        );
        expect(component.find(VerticalNavigation).exists()).toBe(true);
        expect(component.find(VerticalSection).exists()).toBe(true);
        expect(component.find(VerticalItem).exists()).toBe(true);
    });
});
