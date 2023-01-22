import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/editcontact.module.css";
import updateContact from "../utils/updateContact";

// edit the contact
const EditContact = ({ editContact, dispatch }) => {
  let { id, name, email, phone } = editContact;
  const [newName, setName] = useState(name);
  const [newEmail, setEmail] = useState(email);
  const [newPhone, setPhone] = useState(phone);
  return (
    <div>
      <h1 className={style.heading}>Edit Contact</h1>
      <form action="" className={style.form}>
        <input
          type="text"
          placeholder="Name"
          value={newName}
          required
          onChange={(event) => setName(event.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          value={newEmail}
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <input
          type="text"
          placeholder='Number'
          value={newPhone}
          required
          onChange={(event) => setPhone(event.target.value)}
        />
        <div className={style.formButton}>
          <Link
            to="/"
            className={style.updateBtn}
            onClick={() => {
              updateContact(dispatch, {
                id: id,
                name: newName,
                email: newEmail,
                phone: newPhone,
              });
            }}
          >
            Update Contact
          </Link>
          <Link to="/" className={style.cancelBtn}>
            Cancle
          </Link>
        </div>
      </form>
    </div>
  );
};

export default EditContact;
