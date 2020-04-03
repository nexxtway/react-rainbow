import React from 'react';
import { mount } from 'enzyme';
import StyledContainer from '../styled/container';
import StepTwo from '../';

describe('<StepTwo />', () => {
    it('should show preview if file has been selected', () => {
        const component = mount(<StepTwo hasFileSelected />);
        expect(component.find('Preview').exists()).toBe(true);
    });
    it('should show upload manager if file has not been selected', () => {
        const component = mount(<StepTwo hasFieldSelected={false} />);
        expect(component.find('UploadFileButton').exists()).toBe(true);
    });
    it('should show default upload presentation on load', () => {
        const component = mount(<StepTwo />);
        const firstRenderIf = component.find('RenderIf').at(0);
        const secondRenderIf = component.find('RenderIf').at(1);
        expect(firstRenderIf.prop('isTrue')).toBe(false);
        expect(secondRenderIf.prop('isTrue')).toBe(true);
    });
    it('should hide the draggable upload presentation on load', () => {
        const component = mount(<StepTwo />);
        const renderIfBlock = component.find('RenderIf').at(0);
        expect(renderIfBlock.prop('isTrue')).toBe(false);
    });
    it('should render the right content when drag over', () => {
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('dragOver');
        const firstRenderIf = component.find('RenderIf').at(0);
        const secondRenderIf = component.find('RenderIf').at(1);
        expect(firstRenderIf.prop('isTrue')).toBe(true);
        expect(secondRenderIf.prop('isTrue')).toBe(false);
    });
    it('should call stopPropagation and preventDefault when drag over', () => {
        const event = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn(),
        };
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('dragOver', event);
        expect(event.stopPropagation).toHaveBeenCalledTimes(1);
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
    it('should call stopPropagation and preventDefault when drag enter', () => {
        const event = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn(),
        };
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('dragEnter', event);
        expect(event.stopPropagation).toHaveBeenCalledTimes(1);
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
    it('should render the right content when drag over and then drag leave', () => {
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('dragOver');
        component.find(StyledContainer).simulate('dragLeave');
        const firstRenderIf = component.find('RenderIf').at(0);
        const secondRenderIf = component.find('RenderIf').at(1);
        expect(firstRenderIf.prop('isTrue')).toBe(false);
        expect(secondRenderIf.prop('isTrue')).toBe(true);
    });
    it('should have draggable prop for the upload container', () => {
        const component = mount(<StepTwo />);
        expect(component.find(StyledContainer).prop('draggable')).toBe(true);
    });
    it('should call preventDefault when file is dropped', () => {
        const event = {
            stopPropagation: jest.fn(),
            preventDefault: jest.fn(),
            dataTransfer: {
                files: [{ type: 'text/csv' }],
            },
        };
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('drop', event);
        expect(event.stopPropagation).toHaveBeenCalledTimes(1);
        expect(event.preventDefault).toHaveBeenCalledTimes(1);
    });
    it('should set isDragOver to false on drop file', () => {
        const event = {
            dataTransfer: {
                files: [{ type: 'text/csv' }],
            },
        };
        const component = mount(<StepTwo />);
        component.find(StyledContainer).simulate('drop', event);
        const firstRenderIf = component.find('RenderIf').at(0);
        const secondRenderIf = component.find('RenderIf').at(1);
        expect(firstRenderIf.prop('isTrue')).toBe(false);
        expect(secondRenderIf.prop('isTrue')).toBe(true);
    });
    it('should call onProcessFile if one file was added and has the right type', () => {
        const event = {
            dataTransfer: {
                files: [{ type: 'text/csv' }],
            },
        };
        const onProcessFileFn = jest.fn();
        const component = mount(<StepTwo onProcessFile={onProcessFileFn} />);
        component.find(StyledContainer).simulate('drop', event);
        expect(onProcessFileFn).toHaveBeenCalledTimes(1);
    });
    it('should not call onProcessFile if more than one file was added', () => {
        const event = {
            dataTransfer: {
                files: [{ type: 'text/csv' }, { type: 'text/csv' }, { type: 'text/csv' }],
            },
        };
        const onProcessFileFn = jest.fn();
        const component = mount(<StepTwo onProcessFile={onProcessFileFn} />);
        component.find(StyledContainer).simulate('drop', event);
        expect(onProcessFileFn).not.toHaveBeenCalled();
    });
    it('should not call onProcessFile if file type is not text/csv', () => {
        const event = {
            dataTransfer: {
                files: [{ type: 'text/html' }],
            },
        };
        const onProcessFileFn = jest.fn();
        const component = mount(<StepTwo onProcessFile={onProcessFileFn} />);
        component.find(StyledContainer).simulate('drop', event);
        expect(onProcessFileFn).not.toHaveBeenCalled();
    });
    it('should call onProcessFile with the right data', () => {
        const event = {
            dataTransfer: {
                files: [{ type: 'text/csv' }],
            },
        };
        const onProcessFileFn = jest.fn();
        const component = mount(<StepTwo onProcessFile={onProcessFileFn} />);
        component.find(StyledContainer).simulate('drop', event);
        expect(onProcessFileFn).toHaveBeenCalledWith({ type: 'text/csv' });
    });
});
