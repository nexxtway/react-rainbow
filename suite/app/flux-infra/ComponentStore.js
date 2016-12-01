import { ReduceStore } from 'flux/utils';
import AppDispatcher from './AppDispatcher';
import { fromJS, Map } from 'immutable';
import components from './../components';

class ComponentStore extends ReduceStore {
    getInitialState() {
        return fromJS({
            components: components
        });
    }
    
    reduce(state, action) {
        switch(action.type) {
            default:
                return state;
        }
    }
}

const instance = new ComponentStore(AppDispatcher);
export default instance;
