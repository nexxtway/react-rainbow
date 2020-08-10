import { SHOW_ERROR_MESSAGE, SHOW_SUCCESS_MESSAGE, HIDE_MESSAGE } from '../actions/message';

const initialState = {
    message: undefined,
    variant: undefined,
};

export default function(state = initialState, action) {
    switch (action.type) {
        case SHOW_ERROR_MESSAGE:
            return {
                ...state,
                message: action.message,
                variant: 'error',
            };

        case SHOW_SUCCESS_MESSAGE:
            return {
                ...state,
                message: action.message,
                variant: 'success',
            };

        case HIDE_MESSAGE:
            return {
                ...state,
                message: undefined,
            };

        default:
            return state;
    }
}
