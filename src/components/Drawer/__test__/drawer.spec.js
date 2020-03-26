import React from 'react';
import { mount } from 'enzyme';
import { TAB_KEY } from '../../../libs/constants';
import CounterManager from '../../../libs/counterManager';
import manageTab from '../../../libs/manageTab';
import {
    disableBodyScroll,
    enableBodyScroll,
    clearAllBodyScrollLocks,
} from '../../../libs/scrollController';
import Drawer from '../';
import StyledFooter from '../styled/footer';
import StyledContent from '../styled/content';
import StyledCloseButton from '../styled/closeButton';

jest.mock('../../../libs/counterManager', () => ({
    increment: jest.fn(),
    decrement: jest.fn(),
    hasModalsOpen: jest.fn(() => false),
}));
jest.mock('../../../libs/manageTab', () => jest.fn());
jest.mock('../../../libs/scrollController', () => ({
    disableBodyScroll: jest.fn(),
    enableBodyScroll: jest.fn(),
    clearAllBodyScrollLocks: jest.fn(),
}));

describe('<Drawer />', () => {
    beforeEach(() => {
        manageTab.mockReset();
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
        expect(component.find('p[data-id="drawer-children"]').text()).toBe('drawer content');
    });
    it('should render the footer passed', () => {
        const component = mount(
            <Drawer isOpen footer="drawer footer">
                <p />
            </Drawer>,
        );
        expect(component.find(StyledFooter).text()).toBe('drawer footer');
    });
    it('should set tabIndex as -1 in section element', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find('section[role="dialog"]').prop('tabIndex')).toBe(-1);
    });
    it('should set the same generated id to section as aria-labelledby and to Header as id', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-labelledby')).toMatch(
            /drawer-header/,
        );
        expect(component.find('Header').prop('id')).toMatch(/drawer-header/);
    });
    it('should set the same generated id to section as aria-describedby and to children container as id', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-describedby')).toMatch(
            /drawer-content/,
        );
        expect(component.find(StyledContent).prop('id')).toMatch(/drawer-content/);
    });
    it('should set aria-modal to true in section element', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-modal')).toBe(true);
    });
    it('should set aria-hidden to false in section element when drawer is open', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find('section[role="dialog"]').prop('aria-hidden')).toBe(false);
    });
    it('should fire an event when the close button is clicked and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        component.find('ButtonIcon').simulate('click');
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should fire an event when the drawer is opened', async done => {
        expect.assertions(1);
        const onOpenedMockFn = jest.fn();
        mount(
            <Drawer isOpen onOpened={onOpenedMockFn}>
                <p />
            </Drawer>,
        );
        setTimeout(() => {
            expect(onOpenedMockFn).toHaveBeenCalledTimes(1);
            done();
        }, 300);
    });
    it('should fire an event when the drawer backdrop is clicked and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        component.find('div[role="presentation"]').simulate('click');
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should fire an event when the ESC key is pressed and the drawer is open', () => {
        const closeMockFn = jest.fn();
        const component = mount(
            <Drawer isOpen onRequestClose={closeMockFn}>
                <p />
            </Drawer>,
        );
        component.find('div[role="presentation"]').simulate('keyDown', { keyCode: 27 });
        expect(closeMockFn).toHaveBeenCalledTimes(1);
    });
    it('should call disableBodyScroll when open the drawer', () => {
        mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(disableBodyScroll).toHaveBeenCalledWith(expect.any(Node));
    });
    it('should call enableBodyScroll when drawer is closed', async done => {
        expect.assertions(1);
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
            done();
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
        expect(CounterManager.decrement).toHaveBeenCalledTimes(1);
    });
    it('should not call CounterManager.decrement when the component unmount and it is not open', () => {
        CounterManager.decrement.mockReset();
        const component = mount(
            <Drawer isOpen={false}>
                <p />
            </Drawer>,
        );
        component.unmount();
        expect(CounterManager.decrement).not.toHaveBeenCalled();
    });
    it('should render the close button by default', () => {
        const component = mount(
            <Drawer isOpen>
                <p />
            </Drawer>,
        );
        expect(component.find(StyledCloseButton).exists()).toBe(true);
    });
    it('should not render the close button when the hideCloseButton prop is equal to true', () => {
        const component = mount(
            <Drawer isOpen hideCloseButton>
                <p />
            </Drawer>,
        );
        expect(component.find(StyledCloseButton).exists()).toBe(false);
    });
    it('should call manageTab when opened and TAB key is pressed', () => {
        const component = mount(<Drawer isOpen />);
        component.simulate('keyDown', { keyCode: TAB_KEY });
        expect(manageTab).toHaveBeenCalled();
    });
});
