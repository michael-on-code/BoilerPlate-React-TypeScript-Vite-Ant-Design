import { ActionType } from '../interfaces';
import {
    LOGIN_ACTION,
    LOGOUT_ACTION,
    SYNC_REQUEST
} from './actions'

const Reducer = (state: any, action: ActionType) => {
    switch (action.type) {
        case LOGIN_ACTION:
            return { ...state, ...action.payload };

        case SYNC_REQUEST:
            return { ...state, ...action.payload };

        case LOGOUT_ACTION:
            return { ...state, currentUser: null, user: null, role: null, token: null, caisse: null };

        default:
            return state;
    }
};

export default Reducer;
