import React from 'react';
import { mount } from 'enzyme';
import RadioGroup from '..';
import StyledLabel from '../styled/label';
import RadioGroupStyledContentContainer from '../styled/contentContainer';

describe('<RadioGroup />', () => {
    it('renders correctly in vertical orientation (default)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} />);
        const elem = component.find(RadioGroupStyledContentContainer);

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });

    it('renders correctly in vertical orientation (explicit)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} orientation="vertical" />);
        const elem = component.find(RadioGroupStyledContentContainer);

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe(
            'column',
        );
    });

    it('renders correctly in horizontal orientation (explicit)', () => {
        const options = [{ value: 'admin', label: 'Admin' }, { value: 'user', label: 'User' }];

        const component = mount(<RadioGroup options={options} orientation="horizontal" />);
        const elem = component.find(RadioGroupStyledContentContainer);

        expect(getComputedStyle(elem.getDOMNode()).getPropertyValue('flex-direction')).toBe('row');
    });

    it('should render a label when label prop is passed', () => {
        const component = mount(<RadioGroup label="RadioGroup Label" />);
        expect(component.find(StyledLabel).exists()).toBe(true);
    });

    it('should set "left" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<RadioGroup label="RadioGroup Label" labelAlignment="left" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });

    it('should set "right" to labelAlignment prop passed in the Label component', () => {
        const component = mount(<RadioGroup label="RadioGroup Label" labelAlignment="right" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('right');
    });

    it('should set "left" to labelAlignment if prop not passed in the Label component', () => {
        const component = mount(<RadioGroup label="RadioGroup Label" />);
        expect(component.find(StyledLabel).prop('labelAlignment')).toBe('left');
    });
});
