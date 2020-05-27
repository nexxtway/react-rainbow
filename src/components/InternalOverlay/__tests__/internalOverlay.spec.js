import React from 'react';
import { mount } from 'enzyme';
import InternalOverlay from '..';
import * as scroll from '../scroll';
import * as resolver from '../ContentMetaResolver';

const mockDisableScroll = jest.fn();
const mockEnableScroll = jest.fn();
scroll.disableScroll = mockDisableScroll;
scroll.enableScroll = mockEnableScroll;

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
});
