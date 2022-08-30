import React from "react";
import PropTypes from "prop-types";

export default function ContactInput({
  id, type,
  label, value,
  onChange,
}) {
  return (
    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
      <label
        htmlFor={id}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </label>
    </div>
  );
}

ContactInput.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

ContactInput.defaultProps = {
  id: undefined,
  label: "",
  type: "text",
};
