import { ACTION } from "./actions";

// update contact by there id
const updateContact = (dispatch, {id, name, email, phone}) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'PUT',
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
        dispatch({
            type: ACTION.EDIT_CONTACT,
            payload: data
        })
    })
}
export default updateContact