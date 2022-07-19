import { MenuItem, TextField as MuiTextField } from "@material-ui/core";
import React from "react";
import styled from "styled-components/macro";

const FiltersSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing(2)}px;
`;

const FiltersContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)}px;
  flex: 1 1 0;
`;

const TextField = styled(MuiTextField)`
  width: 175px;
  min-width: 125px;
  display: flex;
`;

const FiltersBarGraphMode = ({
  filterValues,
  handleFilterValues,
  periodOfRecords,
  analysisTypes,
}) => {
  return (
    <>
      <FiltersSection>
        <FiltersContainer>
          <TextField
            variant="outlined"
            select
            fullWidth
            size="small"
            label="Period of Record"
            value={filterValues?.periodOfRecord}
            onChange={(e) =>
              handleFilterValues("periodOfRecord", e.target.value)
            }
          >
            {periodOfRecords.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            variant="outlined"
            select
            fullWidth
            size="small"
            label="Analysis"
            value={filterValues.analysis}
            onChange={(e) => handleFilterValues("analysis", e.target.value)}
          >
            {analysisTypes.map((item) => (
              <MenuItem key={item.value} value={item.value}>
                {item.label}
              </MenuItem>
            ))}
          </TextField>
        </FiltersContainer>
      </FiltersSection>
    </>
  );
};

export default FiltersBarGraphMode;
