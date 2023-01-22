import { useReducer, useEffect, useState } from "react";
import { Routes, Route } from "react-router";

import reducer from "./utils/reducer";
import ContactList from "./component/ContactList";
import EditContact from "./component/EditContact";
import Navbar from "./component/Navbar";
import fetchContact from "./utils/fetchContact";
import AddNewContact from "./component/AddNewContact";

function App() {
  const [state, dispatch] = useReducer(reducer, []);
  const [editContact, setEditContact] = useState({});

  // fetch contact when app loads
  useEffect(() => {
    fetchContact(dispatch);
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<ContactList contactList={state}setEditContact={setEditContact} dispatch={dispatch} />}
        />
        <Route
          path="/editcontact"
          element={
            <EditContact editContact={editContact} dispatch={dispatch} />
          }
        />
        <Route path="/addnewcontact" element={<AddNewContact contactList={state} dispatch={dispatch}/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
