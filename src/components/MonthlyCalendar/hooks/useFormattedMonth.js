import { useMemo } from 'react';
import { getFormattedMonth } from '../../Calendar/helpers';

export default function useFormattedMonth(month, currentLocale) {
    return useMemo(() => getFormattedMonth(month, currentLocale), [currentLocale, month]);
}
