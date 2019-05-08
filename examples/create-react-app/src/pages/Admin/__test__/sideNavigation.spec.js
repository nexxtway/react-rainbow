import React from 'react';
import { shallow } from 'enzyme';
import VerticalNavigation from 'react-rainbow-components/components/VerticalNavigation';
import VerticalSection from 'react-rainbow-components/components/VerticalSection';
import VerticalSectionOverflow from 'react-rainbow-components/components/VerticalSectionOverflow';
import VerticalItem from 'react-rainbow-components/components/VerticalItem';
import SideNavigation from './../sideNavigation';

describe('<Side Navigation in AdminExample/>', () => {
    it('should render the SideNavigation', () => {
        const component = shallow(<SideNavigation />);
        expect(component.find(VerticalItem).exists()).toBe(true);
        expect(component.find(VerticalNavigation).exists()).toBe(true);
        expect(component.find(VerticalSection).exists()).toBe(true);
        expect(component.find(VerticalSectionOverflow).exists()).toBe(true);
    });
});
