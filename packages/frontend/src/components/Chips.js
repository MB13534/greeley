import React from "react";
import PropTypes from "prop-types";
import { Chip as MuiChip } from "@material-ui/core";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components/macro";

const Chip = styled(MuiChip)`
  margin: 2px;
  &:hover {
    background-color: ${({ theme }) => theme.palette.secondary.main};
    color: white;
    cursor: pointer !important;
  }
`;

const Chips = (props) => {
  const {
    data,
    valueField,
    displayField,
    handleChipClick,
    activeChips = [],
    tooltipField1 = "",
    tooltipField2 = "",
  } = props;
  return data.map((d) => (
    <Tooltip
      key={d[valueField]}
      arrow
      placement="bottom"
      title={
        tooltipField1 &&
        d[tooltipField1] + (tooltipField2 ? ` in ${d[tooltipField2]}` : "")
      }
    >
      <Chip
        data-value={d.valueField}
        label={d[displayField]}
        color={activeChips.includes(d[valueField]) ? "secondary" : "default"}
        clickable={false}
        onClick={handleChipClick}
      />
    </Tooltip>
  ));
};

Chips.propTypes = {
  data: PropTypes.array.isRequired,
};

export default Chips;
