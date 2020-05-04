import React from 'react';
import { mount } from 'enzyme';
import StrengthBar from '../strengthBar';
import { StyledStateBar, StyledStateLabel } from '../styled';

describe('<StrengthBar />', () => {
    it('should render a StyledStateBar with the right `passwordState`', () => {
        const component = mount(<StrengthBar passwordState="weak" />);
        const styledStateBar = component.find(StyledStateBar);
        expect(styledStateBar.length).toBe(1);
        expect(styledStateBar.prop('passwordState')).toBe('weak');
    });

    it('should render the password state label when passed', () => {
        const passwordStateLabels = {
            weak: 'Weak',
            average: 'Average',
            strong: 'Strong',
        };
        const component = mount(
            <StrengthBar passwordState="weak" passwordStateLabels={passwordStateLabels} />,
        );
        expect(component.find(StyledStateLabel).length).toBe(1);
    });
});
