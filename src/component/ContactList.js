import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/contactlist.module.css";
import { ACTION } from "../utils/actions";
import ContactHeading from "./ContactHeading";

// contact list on homepage
const ContactList = ({ contactList, dispatch, setEditContact }) => {
  return (
    <div className={style.contactListContainer}>
      {/* heading */}
      <ContactHeading />
      {contactList.map((contact, index) => {
        const { id, name, email, phone } = contact;
        return (
          <div id={id} className={style.contactWrapper} key={index}>
            <div>{name}</div>
            <div>{email}</div>
            <div>{phone}</div>
            <div>
              <Link
                to="/editcontact"
                className={style.editBtn}
                onClick={() => {
                  setEditContact(contact);
                }}
              >
                Edit
              </Link>
              <button
                id={id}
                className={style.deleteBtn}
                onClick={() => {
                  dispatch({
                    type: ACTION.DELETE_CONTACT,
                    id: id,
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ContactList;
