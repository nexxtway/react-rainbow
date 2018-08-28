import React from 'react';
import { shallow } from 'enzyme';
import Card from 'react-slds/components/Card';
import CardExample from './../';

describe('<CardExample/>', () => {
    it('should render the Card', () => {
        const component = shallow(
            <CardExample />,
        );
        expect(component.find(Card).exists()).toBe(true);
    });
});
