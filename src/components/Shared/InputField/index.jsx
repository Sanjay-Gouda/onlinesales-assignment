import { RiDeleteBin6Fill } from "react-icons/ri";

/* eslint-disable react/prop-types */
const InputField = ({
  label,
  value,
  handleDelete,
  name,
  onChange,
  isShowDelete,
}) => {
  return (
    <>
      <div className="w-full">
        <label
          htmlFor="first_name"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
        <div className="flex justify-center items-center gap-2">
          <input
            type="text"
            name={name}
            value={value}
            id="first_name"
            onChange={onChange}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
            placeholder={label}
            required
          />
          {isShowDelete && (
            <RiDeleteBin6Fill
              color="red"
              size={20}
              onClick={(id) => handleDelete(id)}
              cursor="pointer"
            />
          )}
        </div>
      </div>
    </>
  );
};

export default InputField;
