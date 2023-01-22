import { ACTION } from "./actions";

// fetch the initial contact list from the server and update the state
const fetchContact =  (dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        dispatch({
            type: ACTION.FETCH_DATA,
            payload: data
        })
    })
}
export default fetchContact