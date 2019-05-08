import React from 'react';
import { shallow } from 'enzyme';
import ProgressBar from 'react-rainbow-components/components/ProgressBar';
import ProgressBarExample from './../';

describe('<ProgressBarExample/>', () => {
    it('should render the ProgressBar', () => {
        const component = shallow(<ProgressBarExample />);
        expect(component.find(ProgressBar).exists()).toBe(true);
    });
});
