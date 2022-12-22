import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Indicator from '../indicators/indicator';

describe('<Indicator />', () => {
    it('should set the right props if the indicator is selected', () => {
        const { getByRole } = render(
            <Indicator
                selectedItem="indicator-1"
                id="indicator-1"
                containerId="container-1"
                header="Header"
            />,
        );
        const indicator = getByRole('tab');

        expect(indicator).toHaveAttribute('aria-selected', 'true');
        expect(indicator).toHaveAttribute('tabindex', '0');
    });
    it('should set the right props if the indicator is not selected', () => {
        const { getByRole } = render(
            <Indicator
                selectedItem="indicator-2"
                id="indicator-1"
                containerId="container-1"
                header="Header"
            />,
        );
        const indicator = getByRole('tab');

        expect(indicator).toHaveAttribute('aria-selected', 'false');
        expect(indicator).toHaveAttribute('tabindex', '-1');
    });
    it('should set the assistive text as title to the button element', () => {
        const { getByText, getByRole } = render(
            <Indicator
                selectedItem="indicator-1"
                id="indicator-1"
                containerId="container-1"
                header="Header"
            />,
        );

        expect(getByText('Header Tab')).toBeDefined();
        expect(getByRole('tab')).toHaveAttribute('title', 'Header Tab');
    });
    it('should set title and text in AssistiveText to undefined when header is not a string', () => {
        const { getByRole } = render(
            <Indicator
                selectedItem="indicator-1"
                id="indicator-1"
                containerId="container-1"
                header={<span>Header</span>}
            />,
        );
        const indicator = getByRole('tab');

        expect(indicator).toHaveTextContent('');
        expect(indicator).not.toHaveAttribute('title');
    });
    it('should set the right accesivillity props', () => {
        const { getByRole } = render(
            <Indicator
                selectedItem="indicator-1"
                id="indicator-1"
                containerId="container-1"
                header="Header"
            />,
        );
        const indicator = getByRole('tab');

        expect(indicator).toHaveAttribute('id', 'indicator-1');
        expect(indicator).toHaveAttribute('aria-controls', 'container-1');
    });
    it('should call the function passed in onSelect prop', () => {
        const onSelectMockFn = jest.fn();
        const { getByRole } = render(
            <Indicator
                selectedItem="indicator-1"
                id="indicator-1"
                containerId="container-1"
                header="Header"
                onSelect={onSelectMockFn}
            />,
        );
        fireEvent.click(getByRole('tab'));

        expect(onSelectMockFn).toHaveBeenCalledWith('indicator-1');
    });
});
