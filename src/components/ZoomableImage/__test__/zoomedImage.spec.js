import React from 'react';
import { mount } from 'enzyme';
import { StyledCenteredImage } from '../styled';
import ZoomedImage from '../zoomedImage';

jest.useFakeTimers();

describe('<ZoomableImage />', () => {
    it('should call close when clicked', () => {
        const close = jest.fn();
        const component = mount(
            <ZoomedImage src="https://via.placeholder.com/450" originalRect={{}} close={close} />,
        );
        component.find(StyledCenteredImage).simulate('click');
        jest.runAllTimers();
        expect(close).toHaveBeenCalled();
    });

    it('should close when Escape key is pressed', () => {
        const close = jest.fn();
        const component = mount(
            <ZoomedImage src="https://via.placeholder.com/450" originalRect={{}} close={close} />,
        );
        component.find(StyledCenteredImage).simulate('keydown', { key: 'Escape' });
        jest.runAllTimers();
        expect(close).toHaveBeenCalled();
    });
});
