import React, { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import PercentInput from '..';

const TestPercentInput = props => {
    // eslint-disable-next-line react/prop-types
    const { initialValue } = props;
    const [value, setValue] = useState(initialValue);
    return <PercentInput onChange={setValue} value={value} />;
};

describe('<PercentInput />', () => {
    it('should mount a input with a value of 5%', () => {
        [5, '5', '5.', '5.00', '5.00003'].forEach(value => {
            render(<PercentInput value={value} />);
        });
        screen.getAllByRole('textbox').forEach(input => {
            expect(input).toHaveValue('5%');
        });
    });

    it('should mount a input with a value of 0%', () => {
        [0, '.0', '0.00003'].forEach(value => {
            render(<PercentInput value={value} />);
        });
        screen.getAllByRole('textbox').forEach(input => {
            expect(input).toHaveValue('0%');
        });
    });

    it('should mount a input with a empty value', () => {
        ['', '  ', 'foo', null, undefined, true, false, Infinity, {}, []].forEach(value => {
            render(<PercentInput value={value} />);
        });
        screen.getAllByRole('textbox').forEach(input => {
            expect(input).toHaveValue('');
        });
    });

    it('should mount a input with a value of "-"', () => {
        const { getByRole } = render(<PercentInput value="-" />);
        expect(getByRole('textbox')).toHaveValue('-');
    });

    it('should be change value to 5 when is fucused', () => {
        const { getByRole } = render(<PercentInput value={5} />);
        const input = getByRole('textbox');
        expect(input).toHaveValue('5%');
        fireEvent.focus(input);
        expect(input).toHaveValue('5');
    });

    it('should be change value to $5.00 when is not focused', () => {
        const { getByRole } = render(<PercentInput value={5} />);
        const input = getByRole('textbox');
        fireEvent.focus(input);
        expect(input).toHaveValue('5');
        fireEvent.blur(input);
        expect(input).toHaveValue('5%');
    });

    it('should fire onChange with the value when it is a valid value', () => {
        const onChangeMockFn = jest.fn();
        const { getByRole } = render(<PercentInput onChange={onChangeMockFn} />);
        const input = getByRole('textbox');
        ['5', '5.', '05', '5.00', '-', '.0', '-5'].forEach(value => {
            fireEvent.change(input, { target: { value } });
            expect(onChangeMockFn).toHaveBeenCalledWith(value);
        });
    });

    it('should not fire onChange with the value when it is an invalid value', () => {
        const onChangeMockFn = jest.fn();
        const { getByRole } = render(<PercentInput onChange={onChangeMockFn} />);
        const input = getByRole('textbox');
        ['5..', '5..0', '.', 'foo', ' ', ''].forEach(value => {
            fireEvent.change(input, { target: { value } });
        });
        expect(onChangeMockFn).toHaveBeenCalledTimes(0);
    });

    it('should calculate the selectionStart when writing to the input', async () => {
        const { getByRole } = render(<TestPercentInput />);
        const input = getByRole('textbox');

        fireEvent.focus(input);
        input.focus();
        input.setSelectionRange(0, 0);
        expect(input.selectionStart).toBe(0);
        expect(input.selectionEnd).toBe(0);

        await userEvent.type(input, '123');
        expect(input).toHaveValue('123');
        expect(input.selectionStart).toBe(3);

        await userEvent.type(input, '4');
        expect(input).toHaveValue('1,234');
        expect(input.selectionStart).toBe(5);
    });

    it('should calculate the selectionStart when a valid number is pasted into the input', async () => {
        const { getByRole } = render(<TestPercentInput initialValue={1234} />);
        const input = getByRole('textbox');

        fireEvent.focus(input);
        input.focus();
        input.setSelectionRange(2, 2);
        expect(input.selectionStart).toBe(2);
        expect(input).toHaveValue('1,234');

        await userEvent.paste('567');
        expect(input).toHaveValue('1,567,234');
        expect(input.selectionStart).toBe(6);
    });

    it('should calculate the selectionStart when an input slice is cut', async () => {
        const { getByRole } = render(<TestPercentInput initialValue={1234567} />);
        const input = getByRole('textbox');

        fireEvent.focus(input);
        input.focus();
        input.setSelectionRange(2, 6);
        expect(input).toHaveValue('1,234,567');

        expect(input.selectionStart).toBe(2);
        await userEvent.cut();
        expect(input).toHaveValue('1,567');
        expect(input.selectionStart).toBe(1);
    });

    it('should calculate the selectionStart when an input slice is cut', async () => {
        const { getByRole } = render(<TestPercentInput initialValue="0.0" />);
        const input = getByRole('textbox');

        fireEvent.focus(input);
        expect(input).toHaveValue('0.0');

        expect(input.selectionStart).toBe(0);
        fireEvent.change(input, { target: { value: '01.0', selectionStart: 2 } });
        expect(input).toHaveValue('1.0');
        expect(input.selectionStart).toBe(1);
    });
});
