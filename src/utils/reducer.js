import {ACTION} from './actions'

// reducer function for useReducer hook used to store the state of contactlist
const reducer = (state, action) => {
    switch(action.type) {
        case ACTION.FETCH_DATA:
            return action.payload;
        case ACTION.ADD_CONTACT:
            return [...state, action.payload];
        case ACTION.DELETE_CONTACT:
            const newList = state.filter(contact => contact.id !== action.id);
            return newList;
        case ACTION.EDIT_CONTACT:
            const updatedList = state.map(contact => contact.id === action.payload.id ? action.payload : contact);
            return updatedList;
        default:
            return state;
    }
}

export default reducer
