/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import Button from "../Shared/Button";
import Dropdown from "../Shared/Dropdown";
import InputField from "../Shared/InputField";
import { FieldContext } from "../../context/formFields";
import { useRandomID } from "../../hooks/useRandomId";

const options = ["InputField", "Checkbox", "Dropdown", "Radio"];

const CreateFields = () => {
  const [currentField, setCurrentField] = useState({
    type: "text",
    label: "",
    options: ["Option 1", "Option 2"],
  });

  const { setNewFormField, formFields } = useContext(FieldContext);
  const id = useRandomID();
  const handleAdd = () => {
    setNewFormField([...formFields, { id, ...currentField }]);
  };

  useEffect(() => {
    console.log(formFields);
  }, [formFields]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentField({
      ...currentField,
      [name]: value,
    });
  };

  return (
    <>
      <div className="flex flex-col w-full gap-1 justify-center items-center ">
        <Dropdown
          label="Select Field"
          options={options}
          name="type"
          onChange={handleChange}
        />
        <InputField
          label="Label for Field"
          name="label"
          onChange={handleChange}
        />

        {currentField.type === "Dropdown" && (
          <div className="flex flex-col gap-1 w-full">
            {/* <label>Options:</label> */}
            {currentField.options.map((option, i) => (
              <div key={i} className="w-full">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900 "
                >
                  Options {i + 1}
                </label>
                <InputField
                  type="text"
                  value={option}
                  onChange={(e) => {
                    const updatedOptions = [...currentField.options];
                    updatedOptions[i] = e.target.value;
                    setCurrentField({
                      ...currentField,
                      options: updatedOptions,
                    });
                  }}
                />
              </div>
            ))}
            <Button
              onClick={() =>
                setCurrentField({
                  ...currentField,
                  options: [...currentField.options, ""],
                })
              }
              label="Add Option"
            />
          </div>
        )}
        <Button onClick={handleAdd} label="Add Field" />
      </div>
    </>
  );
};

export default CreateFields;
