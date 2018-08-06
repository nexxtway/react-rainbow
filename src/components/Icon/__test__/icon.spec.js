import React from 'react';
import { shallow } from 'enzyme';
import Icon from './../index';

describe('<Icon/>', () => {
    it(': should be replaced by -', () => {
        const component = shallow(<Icon iconName="custom:custom5" />);

        expect(component.find('.slds-icon-custom-custom5').exists()).toBe(true);
    });
});
