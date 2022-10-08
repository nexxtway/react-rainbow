import { useMemo } from 'react';
import { getSeparator } from '../helpers';

export default function useDecimalSeparator(locale, options) {
    return useMemo(() => getSeparator(locale, 'decimal', options), [locale, options]);
}
