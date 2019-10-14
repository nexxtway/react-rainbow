import React from 'react';
import { mount } from 'enzyme';
import ProgressIndicator from './../index';
import ProgressStep from '../../ProgressStep';
import StyledActiveIcon from '../../ProgressStep/styled/activeIcon';
import StyledInactiveIcon from '../../ProgressStep/styled/inactiveIcon';

jest.useFakeTimers();

describe('<ProgressIndicator/>', () => {
    it('should render the children passed', () => {
        const component = mount(<ProgressIndicator>ProgressStep</ProgressIndicator>);
        expect(component.text()).toBe('ProgressStep');
    });
    it('should set the right icon when currentStepName is step-2 and the step-3 has an error', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-2">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" hasError />
                <ProgressStep name="step-4" />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: Date.now() });
        const item1 = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        const item2 = component.find('ProgressStep[name="step-2"]').find('ButtonIcon');
        const item3 = component.find('ProgressStep[name="step-3"]').find('ButtonIcon');
        const item4 = component.find('ProgressStep[name="step-4"]').find('ButtonIcon');
        expect(item1.find('DoneIcon').exists()).toBe(true);
        expect(item2.find(StyledActiveIcon).exists()).toBe(true);
        expect(item3.find('ErrorIcon').exists()).toBe(true);
        expect(item4.find(StyledInactiveIcon).exists()).toBe(true);
    });
    it('should set the right assistiveText to the ButtonIcon component when currentStepName is step-2 and the step-3 has an error ', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-2">
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" hasError />
                <ProgressStep name="step-4" label="Step 4" />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: Date.now() });
        const item1 = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        const item2 = component.find('ProgressStep[name="step-2"]').find('ButtonIcon');
        const item3 = component.find('ProgressStep[name="step-3"]').find('ButtonIcon');
        const item4 = component.find('ProgressStep[name="step-4"]').find('ButtonIcon');
        expect(item1.prop('assistiveText')).toBe('Step 1 - Completed');
        expect(item2.prop('assistiveText')).toBe('Step 2 - Active');
        expect(item3.prop('assistiveText')).toBe('Step 3 - Error');
        expect(item4.prop('assistiveText')).toBe('Step 4');
    });
    it('should fire an event with the right data when the step is clicked', () => {
        const onClickMockFn = jest.fn();
        const component = mount(
            <ProgressIndicator currentStepName="step-1" onClick={onClickMockFn}>
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
            </ProgressIndicator>,
        );
        component
            .find('ProgressStep[name="step-2"]')
            .find('ButtonIcon')
            .simulate('click');
        expect(onClickMockFn).toHaveBeenCalledWith(expect.any(Object), 'step-2');
    });
});
