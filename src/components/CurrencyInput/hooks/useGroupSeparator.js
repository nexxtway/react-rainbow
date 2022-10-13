import { useMemo } from 'react';
import { getSeparator } from '../helpers';

export default function useGroupSeparator({ locale, style, currency }) {
    return useMemo(() => getSeparator({ locale, type: 'group', style, currency }), [
        currency,
        locale,
        style,
    ]);
}
