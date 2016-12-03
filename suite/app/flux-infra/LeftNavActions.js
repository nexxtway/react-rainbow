import { dispatch } from './AppDispatcher';

export const TOGGLE_EXPAND_TREE = 'TOGGLE_EXPAND_TREE';
export const toggleExpandTree = function (session) {
    dispatch({ type: TOGGLE_EXPAND_TREE, payload: session });
};
