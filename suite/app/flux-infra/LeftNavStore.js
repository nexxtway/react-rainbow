import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import { fromJS, Map } from 'immutable';
import { TOGGLE_EXPAND_TREE } from './LeftNavActions';

class LeftNavStore extends ReduceStore {
    getInitialState() {
        return fromJS({
            sessions: {
                components: {
                    isExpanded: true
                }
            }
        })
    }
    
    reduce(state, action) {
        switch(action.type) {
            case TOGGLE_EXPAND_TREE:
                let session = state.get('sessions').get(action.payload);
                if (session) {
                    let actual = session.get('isExpanded');
                    return state.setIn(['sessions', action.payload, 'isExpanded'], !actual);
                }
            default:
                return state;
        }
    }
}

const instance = new LeftNavStore(AppDispatcher);
export default instance;