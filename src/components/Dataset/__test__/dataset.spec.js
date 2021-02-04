import React from 'react';
import { mount } from 'enzyme';
import Dataset from '..';

const context = {
    registerDataset: jest.fn(),
    unregisterDataset: jest.fn(),
    updateDataset: jest.fn(),
};

describe('<Dataset />', () => {
    beforeEach(() => {
        jest.resetAllMocks();
        React.useContext = jest.fn().mockReturnValue(context);
    });

    it('should call registerDataset with dataset props', () => {
        mount(
            <Dataset
                title="Dataset 1"
                values={[1, 2, 3]}
                backgroundColor="#ccc"
                borderColor="#000"
                stack="stack-1"
                type="line"
            />,
        );
        expect(context.registerDataset).toHaveBeenCalledWith(expect.any(String), {
            label: 'Dataset 1',
            data: [1, 2, 3],
            backgroundColor: '#ccc',
            borderColor: '#000',
            stack: 'stack-1',
            type: 'line',
            fill: false,
        });
    });

    it('should call unregisterDataset when unmounted', () => {
        const wrapper = mount(
            <Dataset
                title="Dataset 1"
                values={[1, 2, 3]}
                backgroundColor="#ccc"
                borderColor="#000"
                stack="stack-1"
                type="line"
            />,
        );
        wrapper.unmount();
        expect(context.unregisterDataset).toHaveBeenCalledTimes(1);
    });

    it('should call updateDataset when props changes', () => {
        const wrapper = mount(
            <Dataset
                title="Dataset 1"
                values={[1, 2, 3]}
                backgroundColor="#ccc"
                borderColor="#000"
                stack="stack-1"
                type="line"
            />,
        );
        wrapper.setProps({
            values: [4, 5, 6],
        });
        expect(context.updateDataset).toHaveBeenCalledWith(expect.any(String), {
            label: 'Dataset 1',
            data: [4, 5, 6],
            backgroundColor: '#ccc',
            borderColor: '#000',
            stack: 'stack-1',
            type: 'line',
            fill: false,
        });
    });
});
