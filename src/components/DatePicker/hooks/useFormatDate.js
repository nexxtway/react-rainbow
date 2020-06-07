import { useMemo } from 'react';
import formatDate from '../helpers/formatDate';

export default function useFormatDate(value, format, locale) {
    return useMemo(() => formatDate(value, format, locale), [value, format, locale]);
}
