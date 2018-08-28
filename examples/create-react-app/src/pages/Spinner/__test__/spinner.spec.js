import React from 'react';
import { shallow } from 'enzyme';
import Spinner from 'react-slds/components/Spinner';
import SpinnerExample from './../';

describe('<SpinnerExample/>', () => {
    it('should render the Spinner', () => {
        const component = shallow(
            <SpinnerExample />,
        );
        expect(component.find(Spinner).exists()).toBe(true);
    });
});
