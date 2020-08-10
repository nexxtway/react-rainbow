import { MESSAGE_START_LOADING, MESSAGE_STOP_LOADING } from '../actions/sendMessage';

const initialState = {
    isLoading: false,
};

export default function contactUs(state = initialState, action) {
    switch (action.type) {
        case MESSAGE_START_LOADING:
            return {
                isLoading: true,
            };

        case MESSAGE_STOP_LOADING:
            return {
                isLoading: false,
            };

        default:
            return state;
    }
}
