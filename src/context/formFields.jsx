/* eslint-disable react/prop-types */
import { useState } from "react";
import { createContext } from "react";

export const FieldContext = createContext();

const FormContext = ({ children }) => {
  const [formFields, setNewFormField] = useState([]);

  return (
    <>
      <FieldContext.Provider value={{ formFields, setNewFormField }}>
        {children}
      </FieldContext.Provider>
    </>
  );
};

export default FormContext;
