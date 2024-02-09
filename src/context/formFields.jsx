/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const FieldContext = createContext();

const FormContext = ({ children }) => {
  const [formFields, setNewFormField] = useState([]);
  const [formData, setFormData] = useState([]);
  return (
    <>
      <FieldContext.Provider
        value={{ formFields, setNewFormField, formData, setFormData }}
      >
        {children}
      </FieldContext.Provider>
    </>
  );
};

export default FormContext;
