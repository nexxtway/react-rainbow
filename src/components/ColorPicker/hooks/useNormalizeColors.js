import { useMemo } from 'react';
import isValidColor from '../../../../styles/helpers/color/isValidColor';

export default function useNormalizeColors(colors) {
    return useMemo(() => {
        if (Array.isArray(colors)) {
            return colors.filter(color => isValidColor(color));
        }
        return [];
    }, [colors]);
}
