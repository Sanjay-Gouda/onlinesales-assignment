import { RiDeleteBin6Fill } from "react-icons/ri";

/* eslint-disable react/prop-types */
const Checkbox = ({ label, name, onChange, handleDelete }) => {
  return (
    <>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <input
            id="default-checkbox"
            type="checkbox"
            value={label}
            name={name}
            onChange={onChange}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
          />
          <label
            htmlFor="default-checkbox"
            className="ms-2 text-sm font-medium text-gray-900 "
          >
            {label}
          </label>
        </div>
        <div>
          <RiDeleteBin6Fill
            color="red"
            size={20}
            onClick={handleDelete}
            cursor="pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Checkbox;
