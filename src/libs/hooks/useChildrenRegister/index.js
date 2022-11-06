import { useReducer } from 'react';
import { getChildNodes, insertChildOrderly } from './helpers';
import isChildRegistered from './helpers/isChildRegistered';

const useChildrenRegister = props => {
    const { containerRef, selector } = props;
    const [childrenRegistered, dispatch] = useReducer((state, action) => {
        const { type, child, name } = action;
        switch (type) {
            case 'register': {
                if (child && !isChildRegistered({ children: state, name: child.name })) {
                    const nodes = getChildNodes({ ref: containerRef.current, selector });
                    return insertChildOrderly({ childrenRegistered: state, child, nodes });
                }
                return state;
            }
            case 'unregister':
                return state.filter(value => value.name !== name);
            default:
                return state;
        }
    }, []);

    const register = child => {
        dispatch({ type: 'register', child });
    };

    const unregister = name => {
        dispatch({ type: 'unregister', name });
    };

    return { childrenRegistered, register, unregister };
};

export default useChildrenRegister;
