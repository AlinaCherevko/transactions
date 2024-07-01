import { Select } from "@chakra-ui/react";
import PropTypes from "prop-types";

export const StatusSelector = ({ filterByStatus }) => {
  const onSelectChange = (e) => {
    filterByStatus(e.target.value);
  };
  return (
    <Select placeholder="Status" onChange={onSelectChange}>
      <option value="Pending">Pending</option>
      <option value="Completed">Completed</option>
      <option value="Cancelled">Cancelled</option>
    </Select>
  );
};
StatusSelector.propTypes = {
  filterByStatus: PropTypes.func,
};
