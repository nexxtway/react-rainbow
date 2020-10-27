/* eslint-disable id-length */
import React from 'react';
import { mount } from 'enzyme';
import Tooltip from '..';
import StyledTooltip from '../styled';

jest.useFakeTimers();

const triggerElement = {
    current: {
        getBoundingClientRect: jest.fn(() => {
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
        }),
    },
};

describe('<Tooltip />', () => {
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
    });

    it('should have top as default position', () => {
        const component = mount(<Tooltip triggerElementRef={triggerElement} />);
        expect(component.prop('preferredPosition')).toBe('top');
    });

    it('should set the position after onOpen', () => {
        const component = mount(<Tooltip triggerElementRef={triggerElement} />);
        jest.runAllTimers();
        expect(
            component
                .find('InternalOverlay')
                .find(StyledTooltip)
                .prop('position'),
        ).not.toBeNull();
    });
});
