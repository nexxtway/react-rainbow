import React from 'react';
import { mount } from 'enzyme';
import HeaderIcon from './../headerIcon';

describe('<HeaderIcon/>', () => {
    it('should not render the icon when is not passed', () => {
        const component = mount(
            <HeaderIcon />,
        );
        expect(component.find('.rainbow-media__figure').length).toBe(0);
    });
    it('should render the icon passed', () => {
        const component = mount(
            <HeaderIcon icon={<svg />} />,
        );
        expect(component.find('svg').exists()).toBe(true);
    });
});
