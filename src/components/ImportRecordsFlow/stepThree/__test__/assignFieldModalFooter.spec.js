import React from 'react';
import { mount } from 'enzyme';
import AssignFieldModalFooter from '../assignFieldModalFooter';

describe('<assignFieldModalFooter />', () => {
    it('should run cancel method when cancel button is clicked', () => {
        const onCancelFn = jest.fn();
        const component = mount(<AssignFieldModalFooter onCancel={onCancelFn} />);
        component
            .find('button')
            .at(0)
            .simulate('click');
        expect(onCancelFn).toHaveBeenCalled();
    });
    it('should run assign method when assign button is clicked', () => {
        const onAssignFn = jest.fn();
        const component = mount(<AssignFieldModalFooter onAssign={onAssignFn} />);
        component
            .find('button')
            .at(1)
            .simulate('click');
        expect(onAssignFn).toHaveBeenCalled();
    });
    it('should disable the button when disable param is set to true', () => {
        const component = mount(<AssignFieldModalFooter isAssignButtonDisabled />);
        expect(
            component
                .find('button')
                .at(1)
                .prop('disabled'),
        ).toBe(true);
    });
    it('should disable button click event when disable param is set to true', () => {
        const onAssignFn = jest.fn();
        const component = mount(
            <AssignFieldModalFooter isAssignButtonDisabled onAssign={onAssignFn} />,
        );
        component
            .find('button')
            .at(1)
            .simulate('click');
        expect(onAssignFn).toHaveBeenCalledTimes(0);
    });
});
