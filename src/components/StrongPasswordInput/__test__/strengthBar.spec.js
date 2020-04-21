import React from 'react';
import { mount } from 'enzyme';
import StrengthBar from '../strengthBar';
import { StyledStateBar, StyledStateLabel } from '../styled';

describe('<StrengthBar />', () => {
    it('should render a StyledStateBar with the right `passwordState`', () => {
        const component = mount(<StrengthBar passwordState="poor" />);
        const styledStateBar = component.find(StyledStateBar);
        expect(styledStateBar.length).toBe(1);
        expect(styledStateBar.prop('passwordState')).toBe('poor');
    });

    it('should render the password state label when passed', () => {
        const component = mount(<StrengthBar passwordState="poor" passwordStateLabel="poor" />);
        expect(component.find(StyledStateLabel).length).toBe(1);
    });
});
