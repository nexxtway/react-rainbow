import { useMemo } from 'react';
import formatDate from '../helpers/formatDate';
import { isEmptyRange } from '../../Calendar/helpers';

export default function useFormatDate(value, format, locale, selectionType) {
    return useMemo(() => {
        if (selectionType === 'single') return formatDate(value, format, locale);
        if (isEmptyRange(value)) return '';

        const formattedRange = value.map(date => formatDate(date, format, locale));
        return formattedRange.join(' - ');
    }, [value, format, locale, selectionType]);
}
