/* eslint-disable react/prop-types */
const Button = ({ label, onClick }) => {
  return (
    <>
      <button
        type="button"
        onClick={onClick}
        className="text-white w-full mt-3 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  "
      >
        {label}
      </button>
    </>
  );
};

export default Button;
