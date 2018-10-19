import React from 'react';
import { mount } from 'enzyme';
import ProgressStep from '../';
import ProgressIndicator from '../../ProgressIndicator';

jest.useFakeTimers();

describe('<ProgressStep />', () => {
    it('should set the rainbow-progress-step--error class to the step when has an error', () => {
        const component = mount(
            <ProgressIndicator>
                <ProgressStep name="step-1" hasError />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: 2 });
        const item = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        expect(item.prop('className')).toBe('rainbow-progress-step--error');
    });
    it('should set the rainbow-progress-step--is-active class to the step-2 step and the rainbow-progress-step--is-completed class to the step-1 step when currentStepName is step-2', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-2">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: 2 });
        const item1 = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        const item2 = component.find('ProgressStep[name="step-2"]').find('ButtonIcon');
        const item3 = component.find('ProgressStep[name="step-3"]').find('ButtonIcon');
        expect(item1.prop('className')).toBe('rainbow-progress-step--is-completed');
        expect(item2.prop('className')).toBe('rainbow-progress-step--is-active');
        expect(item3.prop('className')).toBe('rainbow-progress-step_marker');
    });
    it('should set the right icon when currentStepName is step-2 and the step-3 has an error', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-2">
                <ProgressStep name="step-1" />
                <ProgressStep name="step-2" />
                <ProgressStep name="step-3" hasError />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: 2 });
        const item1 = component.find('ProgressStep[name="step-1"]').find('ButtonIcon');
        const item2 = component.find('ProgressStep[name="step-2"]').find('ButtonIcon');
        const item3 = component.find('ProgressStep[name="step-3"]').find('ButtonIcon');
        expect(item1.find('DoneIcon').exists()).toBe(true);
        expect(item2.find('div').exists()).toBe(true);
        expect(item3.find('ErrorIcon').exists()).toBe(true);
    });
    it('should set the right text to the AssistiveText component when currentStepName is step-2 and the step-3 has an error ', () => {
        const component = mount(
            <ProgressIndicator currentStepName="step-2">
                <ProgressStep name="step-1" label="Step 1" />
                <ProgressStep name="step-2" label="Step 2" />
                <ProgressStep name="step-3" label="Step 3" hasError />
            </ProgressIndicator>,
        );
        jest.runOnlyPendingTimers();
        component.setState({ key: 2 });
        expect(component.find('ProgressStep[name="step-1"]').find('AssistiveText[text="Step 1 - Completed"]').exists()).toBe(true);
        expect(component.find('ProgressStep[name="step-2"]').find('AssistiveText[text="Step 2 - Active"]').exists()).toBe(true);
        expect(component.find('ProgressStep[name="step-3"]').find('AssistiveText[text="Step 3 - Error"]').exists()).toBe(true);
    });
    it('should set the right class names when custom class name is passed', () => {
        const component = mount(
            <ProgressIndicator>
                <ProgressStep className="my-custom-class-name" />
            </ProgressIndicator>,
        );

        expect(component.find('li.rainbow-progress-step.my-custom-class-name').exists()).toBe(true);
    });
});
