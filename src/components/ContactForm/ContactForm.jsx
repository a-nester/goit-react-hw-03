import { useId } from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import css from "./ContactForm.module.css";
import { Button } from "../Button/Button";

export const ContactForm = ({ onSubmit, contacts }) => {
  const idName = useId();
  const idPhone = useId();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const contactName = evt.target.elements.name.value;
    const contactPhone = evt.target.elements.phone.value;

    const newElem = contacts.filter((el) => {
      return el.phone === contactPhone;
    });

    if (newElem.length > 0) {
      alert("This number is allready exist");
      return;
    } else {
      onSubmit({
        id: `id-${contacts.length + 1}`,
        name: contactName,
        number: contactPhone,
      });
    }
  };

  return (
    <>
      <Formik
        initialValues={{ name: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Required";
          } else if (!/^[A-Z]+[A-Z]{2,}$/i.test(values.name)) {
            errors.name = "Invalid name";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form className={css.form} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && errors.name}
            <input
              type="password"
              name="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
            />
            {errors.password && touched.password && errors.password}

            <Button type="submit" disabled={isSubmitting} onClick={onSubmit}>
              Add contact
            </Button>
          </form>
        )}
      </Formik>
      <form className={css.form} onSubmit={handleSubmit}>
        <label htmlFor={idName}>Name</label>
        <input name="name" type="text" id={idName} required />
        <label htmlFor={idPhone}>Phone</label>
        <input name="phone" type="tel" id={idPhone} required />
        <Button onClick={onSubmit}>Add contact</Button>
      </form>
    </>
  );
};

export default ContactForm;

// <button type="submit" disabled={isSubmitting}>
//   Add contact
// </button>;
