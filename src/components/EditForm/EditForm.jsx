import { useState } from "react";
import PropTypes from "prop-types";

export const EditForm = ({ status, setStatus }) => {
  const [selectedOption, setSelectedOption] = useState(status);

  const options = [
    { label: "Completed" },
    { label: "Cancelled" },
    { label: "Pending" },
  ];
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setStatus(event.target.value);
  };
  return (
    <ul style={{ listStyle: "none" }}>
      <h2>Pick option for transaction status</h2>
      {options.map((option) => (
        <li key={option.label}>
          <input
            type="radio"
            id={option.label}
            name="radioGroup"
            value={option.label}
            checked={selectedOption === option.label}
            onChange={handleOptionChange}
          />
          <label htmlFor={option.label}>{option.label}</label>
        </li>
      ))}
    </ul>
  );
};
EditForm.propTypes = {
  status: PropTypes.string,
  setStatus: PropTypes.func,
};
