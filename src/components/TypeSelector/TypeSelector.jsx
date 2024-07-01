import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const TypeSelector = ({ filterByType }) => {
  const onSelectChange = (e) => {
    filterByType(e.target.value);
  };
  return (
    <Select placeholder="Type" onChange={onSelectChange}>
      <option value="Refill">Refill</option>
      <option value="Withdrawal">Withdrawal</option>
    </Select>
  );
};

TypeSelector.propTypes = {
  filterByType: PropTypes.func,
};
