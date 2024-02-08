import { RiDeleteBin6Fill } from "react-icons/ri";

const Radio = ({ label, name, onChange, handleDelete }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <input
          type="radio"
          value={label}
          onChange={onChange}
          name={name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 "
        />
        <label
          htmlFor="default-radio-2"
          className="ms-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
      </div>
      <RiDeleteBin6Fill
        onClick={handleDelete}
        color="red"
        size={20}
        cursor="pointer"
      />
    </div>
  );
};

export default Radio;
