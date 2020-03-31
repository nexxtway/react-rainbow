import React from 'react';
import { mount } from 'enzyme';
import Preview from '../preview';
import StyledFileCardTitle from '../styled/fileCardTitle';
import StyledFileCardDescription from '../styled/fileCardDescription';
import StyledButtonIcon from '../styled/buttonIcon';

describe('<Preview />', () => {
    it('should show default labels', () => {
        const component = mount(<Preview />);
        const title = component.find(StyledFileCardTitle);
        const type = component.find(StyledFileCardDescription);
        expect(title.text()).toBe('Unknow File Name');
        expect(type.text()).toBe('Unknow File Type');
    });
    it('should set the right labels according to params', () => {
        const component = mount(<Preview fileName="preview-title" fileType="text/csv" />);
        const title = component.find(StyledFileCardTitle);
        const type = component.find(StyledFileCardDescription);
        expect(title.text()).toBe('preview-title');
        expect(type.text()).toBe('text/csv');
    });
    it('should run remove handler function after click the remove button', () => {
        const onRemoveFileFn = jest.fn();
        const component = mount(<Preview onRemoveFile={onRemoveFileFn} />);
        component.find(StyledButtonIcon).simulate('click');
        expect(onRemoveFileFn).toHaveBeenCalled();
    });
    it('should have data passed properly to preview table', () => {
        const props = {
            data: [
                { First_Name: 'John', Last_Name: 'Doe' },
                { First_Name: 'Marie', Last_Name: 'Sun' },
                { First_Name: 'Jane', Last_Name: 'Doe' },
            ],
            columns: ['First_Name', 'Last_Name'],
            isLoading: true,
        };
        const component = mount(<Preview {...props} />);
        expect(component.find('PreviewTable').props()).toEqual(props);
    });
});
