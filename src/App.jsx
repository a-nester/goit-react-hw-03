import { useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";
import { ContactList } from "./components/ContactList/ContactList";
import { SearchBox } from "./components/SearchBox/SearchBox";

function App() {
  const [contacts, setContact] = useState([
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ]);
  const [searchValue, setSearchValue] = useState(" ");

  const addContact = (newContact) => {
    setContact((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  const delContact = (contactId) => {
    setContact((prevContacts) => {
      return prevContacts.filter((el) => {
        return el.id !== contactId;
      });
    });
  };

  const filtered = contacts.filter((elem) => {
    return elem.name.toLowerCase().includes(searchValue.toLowerCase());
  });

  return (
    <>
      <div>
        <ContactForm onSubmit={addContact} contacts={contacts} />
        <SearchBox value={searchValue} onChange={setSearchValue} />
      </div>
      <ContactList contacts={filtered} onDelete={delContact} />
    </>
  );
}

export default App;
