import { useMemo } from 'react';
import { getSeparator } from '../helpers';

export default function useGroupSeparator(locale, options) {
    return useMemo(() => getSeparator(locale, 'group', options), [locale, options]);
}
