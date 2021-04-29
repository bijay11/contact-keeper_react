import React, { useReducer } from "react";
//import uuid from "uuid";
import { v4 as uuid } from "uuid";

import ContactContext from "./contactContext";
import contactReducer from "./contactReducer";
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Sara Smith",
        email: "ssmith@gmail.com",
        phone: "111-111-1111",
        type: "professional",
      },
      {
        id: 2,
        name: "Ted Johnson",
        email: "tedh@gmail.com",
        phone: "222-222-2222",
        type: "personal",
      },
      {
        id: 3,
        name: "Harry White",
        email: "harry@gmail.com",
        phone: "333-333-3333",
        type: "personal",
      },
    ],
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };
  //Set Current Contact
  //Clear Current Contact
  //Update Contact
  //Filter Contact
  //Clear Contact

  //return our providers so that we can wrap the application with the context.
  return (
    <ContactContext.Provider
      value={{
        //anything we want to access from other components including state and actions need to go here.
        contacts: state.contacts,
        addContact,
        deleteContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
