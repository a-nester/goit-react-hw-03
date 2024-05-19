import { useState } from "react";
import "./App.css";
import { ContactForm } from "./components/ContactForm/ContactForm";

function App() {
  const [contact, setContact] = useState("");
  console.log(contact);

  return (
    <>
      <ContactForm onSubmit={setContact} />
    </>
  );
}

export default App;
