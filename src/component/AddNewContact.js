import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/editcontact.module.css";
import addNewContact from "../utils/addNewContact";

// add new contact on the list
const AddNewContact = ({ contactList, dispatch }) => {
  const [newName, setName] = useState("");
  const [newEmail, setEmail] = useState("");
  const [newPhone, setPhone] = useState("");
  let newId = contactList[contactList.length - 1].id + 1;
  return (
    <div>
      <h1 className={style.heading}>Add New Contact</h1>
      <form className={style.form}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={newEmail}
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder="Number"
          value={newPhone}
          onChange={(event) => setPhone(event.target.value)}
        />
        <div className={style.formButton}>
          <Link
            to="/"
            className={style.updateBtn}
            onClick={() =>
              addNewContact(dispatch, {
                id: newId,
                name: newName,
                email: newEmail,
                phone: newPhone,
              })
            }
          >
            Add Contact
          </Link>
          <Link to="/" className={style.cancelBtn}>
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
};

export default AddNewContact;
