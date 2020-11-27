import React from 'react';
import { mount } from 'enzyme';
import ProgressStep from '..';
import InternalTooltip from '../../InternalTooltip';
import ProgressIndicator from '../../ProgressIndicator';
import StyledStepNumberButton from '../styled/stepNumberButton';

jest.useFakeTimers();
describe('<ProgressStep/>', () => {
    it('should register itself when mounted', () => {
        const registerFn = jest.fn();
        mount(<ProgressStep name="step-1" privateRegisterStep={registerFn} numbersMap={[]} />);
        jest.runAllTimers();
        const params = {
            name: 'step-1',
            onSetStepState: expect.any(Function),
        };
        expect(registerFn).toHaveBeenCalledWith(params);
    });

    it('should render numbers inside progress step when variant is "numeric"', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-1" variant="numeric">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
            </ProgressIndicator>,
        );
        const step2 = component.find('ProgressStep[name="step-2"]');
        const number = step2.find(StyledStepNumberButton);
        expect(number.exists()).toBe(true);
        expect(number.text()).toBe('2');
    });

    it('should show a checkmark icon when marked as completed', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-3" variant="numeric">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: Date.now() });
        const step1 = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        expect(step1.find('DoneIcon').exists()).toBe(true);
    });

    it('should show an error icon when marked as error', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-3" variant="numeric">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" hasError />
                <ProgressStep name="step-3" />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: Date.now() });
        const step2 = component.find('ProgressStep[name="step-2"]').find('ButtonIcon');
        expect(step2.find('ErrorIcon').exists()).toBe(true);
    });

    it('should render a Tooltip component when `tooltip` prop is valid', () => {
        const wrapper = mount(<ProgressStep name="step-1" tooltip="Step 1" numbersMap={[]} />);
        expect(wrapper.find(InternalTooltip).exists()).toBe(true);
    });
});
