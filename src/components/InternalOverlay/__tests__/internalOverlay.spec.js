/* eslint-disable id-length */
import React from 'react';
import { mount } from 'enzyme';
import InternalOverlay from '..';
import * as scroll from '../../../libs/scrollController';
import * as resolver from '../ContentMetaResolver';

const mockDisableScroll = jest.fn();
const mockEnableScroll = jest.fn();
scroll.disableBodyScroll = mockDisableScroll;
scroll.enableBodyScroll = mockEnableScroll;

describe('<InternalOverlay />', () => {
    beforeEach(() => {
        Element.prototype.getClientRects = jest.fn(() => {
            return [
                {
                    bottom: 0,
                    height: 0,
                    left: 0,
                    right: 0,
                    top: 0,
                    width: 0,
                    x: 0,
                    y: 0,
                },
            ];
        });

        mockDisableScroll.mockReset();
        mockEnableScroll.mockReset();
    });

    it('should render if isVisible is true', () => {
        const component = mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                isVisible
            />,
        );
        expect(component.find('[id="test-id"]').exists()).toBe(true);
    });

    it('should not render if isVisible is false', () => {
        const component = mount(
            <InternalOverlay render={() => <div id="test-id" />} triggerElementRef={{}} />,
        );
        expect(component.find('[id="test-id"]').exists()).toBe(false);
    });

    it('should disable scroll when isVisible is true', () => {
        const component = mount(
            <InternalOverlay render={() => <div id="test-id" />} triggerElementRef={{}} />,
        );
        component.setProps({
            isVisible: true,
        });
        component.setProps({});
        expect(mockDisableScroll).toHaveBeenCalledTimes(1);
    });

    it('should enable scroll when isVisible is false', () => {
        const component = mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                isVisible
            />,
        );
        mockEnableScroll.mockClear();
        component.setProps({
            isVisible: false,
        });
        expect(mockEnableScroll).toHaveBeenCalledTimes(1);
    });

    it('should resolve content meta', () => {
        const mockContentMetaResolver = jest.spyOn(resolver, 'default');
        mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                isVisible
            />,
        );
        expect(mockContentMetaResolver).toHaveBeenCalledTimes(1);
    });

    it('should call positionResolver with the right parameters when it is passed', () => {
        const positionResolverMock = jest.fn();
        mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                positionResolver={positionResolverMock}
                isVisible
            />,
        );
        expect(positionResolverMock).toHaveBeenCalledWith({
            content: expect.any(Object),
            trigger: expect.any(Object),
            viewport: expect.any(Object),
        });
    });

    it('should call onOpened when isVisible is true', () => {
        const onOpenedMock = jest.fn();
        mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                onOpened={onOpenedMock}
                isVisible
            />,
        );
        expect(onOpenedMock).toHaveBeenCalledTimes(1);
    });

    it('should not call onOpened when isVisible is false', () => {
        const onOpenedMock = jest.fn();
        mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={{}}
                onOpened={onOpenedMock}
            />,
        );
        expect(onOpenedMock).not.toHaveBeenCalled();
    });

    it('should call triggerElementRef when triggerElementRef is a function', () => {
        const triggerElementRefMock = jest.fn();
        mount(
            <InternalOverlay
                render={() => <div id="test-id" />}
                triggerElementRef={triggerElementRefMock}
                isVisible
            />,
        );
        expect(triggerElementRefMock).toHaveBeenCalledTimes(1);
    });
});
