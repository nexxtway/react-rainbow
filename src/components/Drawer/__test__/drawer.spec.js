import React from 'react';
import { mount } from 'enzyme';
import CounterManager from '../../../libs/counterManager';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from '../../../libs/scrollController';
import Drawer from '../';
import StyledContent from '../styled/content';
import StyledCloseButton from '../styled/closeButton';

const DrawerState = {
    OPENING: 0,
    OPENED: 1,
    CLOSING: 2,
    CLOSED: 3,
};

jest.mock('../../../libs/counterManager', () => ({
    increment: jest.fn(),
    decrement: jest.fn(),
    hasModalsOpen: jest.fn(() => false),
}));

jest.mock('../../../libs/scrollController', () => ({
    disableBodyScroll: jest.fn(),
    enableBodyScroll: jest.fn(),
    clearAllBodyScrollLocks: jest.fn(),
}));

describe('<Drawer />', () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation(init => [init, setState]);

    beforeEach(() => {
        disableBodyScroll.mockReset();
        enableBodyScroll.mockReset();
        clearAllBodyScrollLocks.mockReset();
    });

    afterEach(() => {
        jest.clearAllMocks();
    });

    it('should render the children passed', () => {
        const component = mount(
            <Drawer isOpen>
                <p data-id="drawer-children">drawer content</p>
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('p[data-id="drawer-children"]').text()).toBe('drawer content');
        }, 300);
    });
    it('should render the footer passed', () => {
        const component = mount(
            <Drawer isOpen footer="drawer footer">
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('footer').text()).toBe('drawer footer');
        }, 300);
    });
    it('should set tabIndex as -1 in section element', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
        }, 300);
    });
    it('should set the same generated id to section as aria-labelledby and to Header as id', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(
                /drawer-heading/,
            );
            expect(component.find('Header').prop('id')).toMatch(/drawer-heading/);
        }, 300);
    });
    it('should set the same generated id to section as aria-describedby and to children container as id', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(
                /drawer-content/,
            );
            expect(component.find(StyledContent).prop('id')).toMatch(/drawer-content/);
        }, 300);
    });
    it('should set aria-modal to true in section element', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
        }, 300);
    });
    it('should set aria-hidden to false in section element when drawer is open', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
        }, 300);
    });
    it('should fire an event when the close button is clicked and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            component.find('ButtonIcon').simulate('click');
            expect(closeMockFn).toHaveBeenCalledTimes(1);
        }, 300);
    });
    it('should fire an event when the drawer backdrop is clicked and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            component.find('div[role="presentation"]').simulate('click');
            expect(closeMockFn).toHaveBeenCalledTimes(1);
        }, 300);
    });
    it('should fire an event when the ESC key is pressed and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 27 });
            expect(closeMockFn).toHaveBeenCalledTimes(1);
        }, 300);
    });
    it('should call disableBodyScroll when open the drawer', () => {
        mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
        }, 300);
    });
    it('should call enableBodyScroll when drawer is closed', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        component.setProps({
            isOpen: false,
        });
        setTimeout(() => {
            expect(enableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
        }, 300);
    });
    it('should call CounterManager.decrement when the component unmount and it is open', () => {
        CounterManager.decrement.mockReset();
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        component.unmount();
        setTimeout(() => {
            expect(CounterManager.decrement).toHaveBeenCalledTimes(1);
        }, 300);
    });
    it('should not call CounterManager.decrement when the component unmount and it is not open', () => {
        CounterManager.decrement.mockReset();
        const component = mount(
            <Drawer isOpen={false}>
                <p />
            </Drawer>,
        );
        component.unmount();
        setTimeout(() => {
            expect(CounterManager.decrement).toHaveBeenCalledTimes(1);
        }, 300);
    });
    it('should render the close button by default', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find(StyledCloseButton).exists()).toBe(true);
        }, 300);
    });
    it('should not render the close button when the hideCloseButton prop is equal to true', () => {
        const component = mount(
            <Drawer isOpen hideCloseButton>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(component.find(StyledCloseButton).exists()).toBe(false);
        }, 300);
    });
    it('should set right animation states when opened', () => {
        mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(setState).toHaveBeenCalledWith(DrawerState.OPENING);
            expect(setState).toHaveBeenCalledWith(DrawerState.OPENED);
        }, 300);
    });
    it('should set right animation states when closed', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        component.setProps({
            isOpen: false,
        });
        setTimeout(() => {
            expect(setState).toHaveBeenCalledWith(DrawerState.CLOSING);
            expect(setState).toHaveBeenCalledWith(DrawerState.CLOSED);
        }, 300);
    });
    it('should call onOpened when drawer state switch to OPENED', () => {
        const onOpenedMockFn = jest.fn();
        mount(
            <Drawer isOpen onOpened={onOpenedMockFn}>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(onOpenedMockFn).toHaveBeenCalledTimes(1);
        }, 300);
    });
});
