import { useCallback, useRef } from 'react';
import {
    getChildNodes,
    insertChildOrderly,
    isChildRegistered,
} from './useChildrenRegister/helpers';

const useChildrenRegisterRef = props => {
    const { containerRef, selector } = props;
    const childrenRegisteredRef = useRef([]);

    const register = useCallback(
        child => {
            if (
                child &&
                !isChildRegistered({ children: childrenRegisteredRef.current, id: child.id })
            ) {
                const nodes = getChildNodes({ ref: containerRef.current, selector });
                childrenRegisteredRef.current = insertChildOrderly({
                    children: childrenRegisteredRef.current,
                    child,
                    nodes,
                });
            }
        },
        [containerRef, selector],
    );

    const unregister = useCallback(id => {
        childrenRegisteredRef.current = childrenRegisteredRef.current.filter(
            value => value.id !== id,
        );
    }, []);

    return { childrenRegistered: childrenRegisteredRef.current, register, unregister };
};

export default useChildrenRegisterRef;
