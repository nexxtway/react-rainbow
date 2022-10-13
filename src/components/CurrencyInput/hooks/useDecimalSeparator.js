import { useMemo } from 'react';
import { getSeparator } from '../helpers';

export default function useDecimalSeparator({ locale, style, currency }) {
    return useMemo(() => getSeparator({ locale, type: 'decimal', style, currency }), [
        currency,
        locale,
        style,
    ]);
}
