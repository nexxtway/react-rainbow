import React from 'react';
import { shallow } from 'enzyme';
import AssignFieldModalFooter from '../assignFieldModalFooter';
import StyledCancelButton from '../styled/cancelButton';

describe('<AssignFieldModalFooter />', () => {
    it('should run cancel method when cancel button is clicked', () => {
        const onCancelFn = jest.fn();
        const component = shallow(<AssignFieldModalFooter onCancel={onCancelFn} />);
        component.find(StyledCancelButton).simulate('click');
        expect(onCancelFn).toHaveBeenCalled();
    });
    it('should run assign method when assign button is clicked', () => {
        const onAssignFn = jest.fn();
        const component = shallow(<AssignFieldModalFooter onAssign={onAssignFn} />);
        component.find('Button').simulate('click');
        expect(onAssignFn).toHaveBeenCalled();
    });
    it('should disable the button when disable param is set to true', () => {
        const component = shallow(<AssignFieldModalFooter isAssignButtonDisabled />);
        expect(component.find('Button').prop('disabled')).toBe(true);
    });
});
