import { useMemo } from 'react';
import { getFormattedMonth } from '../../helpers';

export default function useFormattedMonth(month, locale) {
    return useMemo(() => getFormattedMonth(month, locale), [month, locale]);
}
