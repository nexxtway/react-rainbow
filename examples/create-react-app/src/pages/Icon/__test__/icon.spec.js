import React from 'react';
import { shallow } from 'enzyme';
import Icon from 'react-slds/components/Icon';
import IconExample from './../';

describe('<IconExample/>', () => {
    it('should render the Icon', () => {
        const component = shallow(
            <IconExample />,
        );
        expect(component.find(Icon).exists()).toBe(true);
    });
});
