import { useContext, useMemo } from 'react';
import { AppContext } from '../../components/Application/context';

export default function useLocale(localProp) {
    const context = useContext(AppContext);
    return useMemo(() => localProp || (context && context.locale), [localProp, context]);
}
