import { RiDeleteBin6Fill } from "react-icons/ri";

/* eslint-disable react/prop-types */
const Dropdown = ({
  label,
  options,
  name,
  onChange,
  isShowDelete,
  handleDelete,
  value,
}) => {
  console.log(options);
  return (
    <>
      <div className="flex flex-col w-full ">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          {label}
        </label>
        <div className="flex justify-between items-center gap-2">
          <select
            id="countries"
            onChange={onChange}
            name={name}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-base cursor-pointer rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
          >
            <option selected={value === "text"}>Choose Field </option>
            {options?.map((opt, ind) => (
              <option value={opt} key={ind}>
                {opt}
              </option>
            ))}
          </select>
          <div>
            {isShowDelete && (
              <RiDeleteBin6Fill
                onClick={handleDelete}
                color="red"
                size={20}
                cursor="pointer"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
