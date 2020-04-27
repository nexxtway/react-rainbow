import { useContext, useMemo } from 'react';
import { AppContext } from '../../components/Application/context';
import getBrowserLocale from '../utils/getBrowserLocale';

export default function useLocale(localProp) {
    const context = useContext(AppContext);
    return useMemo(() => localProp || (context && context.locale) || getBrowserLocale(), [
        localProp,
        context,
    ]);
}
