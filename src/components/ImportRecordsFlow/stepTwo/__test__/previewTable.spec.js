import React from 'react';
import { mount, shallow } from 'enzyme';
import PreviewTable from '../previewTable';

const data = [
    { First_Name: 'John', Last_Name: 'Doe' },
    { First_Name: 'Marie', Last_Name: 'Sun' },
    { First_Name: 'Jane', Last_Name: 'Doe' },
];
const columns = ['First_Name', 'Last_Name'];

describe('<Preview />', () => {
    it('should run spinner if preview is loading', () => {
        const component = mount(<PreviewTable data={data} columns={columns} isLoading />);
        expect(component.find('Spinner').exists()).toBe(true);
    });
    it('should match columns length', () => {
        const component = shallow(<PreviewTable data={data} columns={columns} isLoading={false} />);
        const loopedColumns = component.find('Column');
        expect(loopedColumns.length).toBe(2);
    });
});
