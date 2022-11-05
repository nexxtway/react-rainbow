import { useReducer } from 'react';
import { getChildNodes, insertChildOrderly } from './helpers';
import isChildRegistered from './helpers/isChildRegistered';

const useChildrenRegister = props => {
    const { containerRef, selector } = props;
    const [childrenRegistered, dispatch] = useReducer((state, action) => {
        const { type, child, id } = action;
        switch (type) {
            case 'register': {
                if (child && !isChildRegistered({ children: state, id: child.id })) {
                    const nodes = getChildNodes({ ref: containerRef.current, selector });
                    return insertChildOrderly({ childrenRegistered: state, child, nodes });
                }
                return state;
            }
            case 'unregister':
                return state.filter(value => value.id !== id);
            default:
                return state;
        }
    }, []);

    const register = child => {
        dispatch({ type: 'register', child });
    };

    const unregister = id => {
        dispatch({ type: 'unregister', id });
    };

    return { childrenRegistered, register, unregister };
};

export default useChildrenRegister;
