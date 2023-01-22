import React from 'react'
import style from '../styles/contactlist.module.css'

// contact list headings for homepage
const ContactHeading = () => {
    return (
        <div className={style.headingWrapper}>
            <div>Name</div>
            <div>Email</div>
            <div>Phone</div>
            <div>Action</div>
        </div>
    )
}

export default ContactHeading
