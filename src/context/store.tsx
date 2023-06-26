import { createContext, useContext, useReducer, useEffect } from "react";
import { StoreStateType, ActionType } from "../interfaces";
import Reducer from "./reducer";
import _ from "lodash"
interface StoreType {
    dispatch: (action:ActionType) => void,
    state: StoreStateType
}

const STORAGE_KEY = import.meta.env.REACT_APP_APP_STORAGE_KEY

const INITIAL_STATE = {
    state: {
        token: '',
        currentUser: undefined
    },
    dispatch: ({}:ActionType) => {}
}
const WHITE_LIST = ['token']
const store = createContext(INITIAL_STATE);
const { Provider } = store;

const StateProvider = ({ children }: any) => {

    const [state, dispatch] = useReducer(Reducer, INITIAL_STATE, (state) => {
        const persistedData = localStorage.getItem(STORAGE_KEY);
        const data = persistedData ? JSON.parse(persistedData) : [];
        return { ...state, ...data };
    });

    useEffect(() => {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(_.pick(state, WHITE_LIST)));
    }, [state]);

    useEffect(() => {
        window.addEventListener('storage', () => {
            const persistedData = localStorage.getItem(STORAGE_KEY);
            const newData = persistedData ? (JSON.parse(persistedData)) : null;
            if (newData) {
                dispatch({ type: 'SYNC_REQUEST', payload: newData });
            }
        })
    }, []);

    return (
        <Provider value={{ state, dispatch }}>
            {children}
        </Provider>
    )
}

const useStore = (): StoreType => useContext(store);
export { store, StateProvider, useStore };
