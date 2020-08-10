import submitMessage from '../services/submitMessage';
import { showSuccessMessage, showErrorMessage } from './message';

export const MESSAGE_START_LOADING = 'MESSAGE_START_LOADING';
export const MESSAGE_STOP_LOADING = 'MESSAGE_STOP_LOADING';

const successMessage = 'Your message has been sent successfully.';
const errorMessage = 'There was an error trying to send the message. Please try again.';

export default function sendMessage(data) {
    return dispatch => {
        dispatch({ type: MESSAGE_START_LOADING });
        return submitMessage(data)
            .then(response => {
                if (response.data && response.data.code === 'MESSAGE_SAVED') {
                    dispatch(showSuccessMessage(successMessage));
                } else {
                    dispatch(showErrorMessage(errorMessage));
                }
                dispatch({ type: MESSAGE_STOP_LOADING });
            })
            .catch(() => {
                dispatch(showErrorMessage(errorMessage));
                dispatch({ type: MESSAGE_STOP_LOADING });
            });
    };
}
