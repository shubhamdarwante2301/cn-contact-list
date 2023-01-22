import { ACTION } from "./actions";

// add new contact on the list
const addNewContact = (dispatch, {id, name, email, phone}) => {
    fetch(`https://jsonplaceholder.typicode.com/users`, {
        method: 'POST',
        body: JSON.stringify({
            id: id,
            name: name,
            email: email,
            phone: phone
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        // console.log(data);
        dispatch({
            type: ACTION.ADD_CONTACT,
            payload: data
        })
    })
    .catch((error) => {
        console.error("Error",error);
    })
}
export default addNewContact