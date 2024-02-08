import { useContext, useState } from "react";
import Button from "../Shared/Button";
import Checkbox from "../Shared/Checkbox";
import Dropdown from "../Shared/Dropdown";
import InputField from "../Shared/InputField";
import { FieldContext } from "../../context/formFields";
import Radio from "../Shared/Radio";

const PreviewForm = () => {
  const { formFields, setNewFormField } = useContext(FieldContext);

  console.log(formFields, "Fieds");

  const [inputValue, setInputValues] = useState({});
  const [checkedItems, setCheckedItem] = useState([]);

  const handleCheckbox = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      console.log(value, "checked");

      setCheckedItem([...checkedItems, value]);
    } else {
      const unSelectedItem = checkedItems.filter(
        (item) => item.value !== value
      );
      setCheckedItem(unSelectedItem);
    }
  };

  const handleDelete = (id) => {
    const remainingFields = formFields?.filter((item) => item.id !== id);

    setNewFormField(remainingFields);
  };

  const handleInputChange = (e) => {
    const { value, name } = e.target;

    setInputValues({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    console.log(inputValue, { interests: checkedItems });
    console.log(formFields);
  };

  return (
    <>
      <div className="w-full bg-white rounded-lg shadow-lg  md:mt-0 sm:max-w-md xl:p-0 ">
        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
            Preview Form
          </h1>
          <div className="space-y-4 md:space-y-6">
            {formFields.map((item) => {
              return item.type === "InputField" ? (
                <div>
                  <InputField
                    label={item.label}
                    name={item.label}
                    onChange={handleInputChange}
                    isShowDelete={true}
                    handleDelete={() => handleDelete(item.id)}
                  />
                </div>
              ) : item.type === "Checkbox" ? (
                <div>
                  <Checkbox
                    label={item.label}
                    name="intrest"
                    onChange={handleCheckbox}
                    handleDelete={() => handleDelete(item.id)}
                  />
                </div>
              ) : item.type === "Radio" ? (
                <div>
                  <Radio
                    label={item.label}
                    name="gender"
                    onChange={handleInputChange}
                    handleDelete={() => handleDelete(item.id)}
                  />
                </div>
              ) : item.type === "Dropdown" ? (
                <div>
                  <Dropdown
                    options={item.options}
                    label={item.label}
                    name={item.label}
                    onChange={handleInputChange}
                    isShowDelete={true}
                    handleDelete={() => handleDelete(item.id)}
                  />
                </div>
              ) : null;
            })}

            <Button label="Submit" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PreviewForm;
