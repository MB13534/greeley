import { Box, Typography } from "@material-ui/core";
import FilterControl from "../filters/filterControl";
import Filter from "../filters/filter";
import WellStylesControl from "../controls/wellStylesControl";
import React from "react";
import styled from "styled-components/macro";
import useLayerStyles from "../hooks/useLayerStyles";

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

const getMoreFiltersCount = (filterValues) => {
  const keys = [
    "moreThanA",
    "moreThanB",
    "moreThanC",
    "dataRecentA",
    "dataRecentB",
  ];
  return keys.filter((key) => filterValues[key].value).length;
};

const FiltersBar = ({
  filterValues,
  handleFilterValues,
  handleSelectAll,
  handleSelectNone,
  updateLayerStyles,
}) => {
  const { activeStyle, handleActiveStyle, styleOptions } = useLayerStyles({
    onLayerStyleChange: updateLayerStyles,
  });

  return (
    <>
      {filterValues?.search?.value === "attributes_search" && (
        <FiltersSection>
          <FiltersContainer>
            <FilterControl
              appliedCount={filterValues?.reach?.value?.length}
              label="Reach"
            >
              <Filter
                label="Reach"
                name="reach"
                onChange={handleFilterValues}
                onSelectAll={handleSelectAll}
                onSelectNone={handleSelectNone}
                options={filterValues?.reach?.options}
                type={filterValues?.reach?.type}
                value={filterValues?.reach?.value}
              />
            </FilterControl>
            <FilterControl
              appliedCount={filterValues?.organizations?.value?.length}
              label="Organizations"
            >
              <Filter
                label="Organizations"
                name="organizations"
                onChange={handleFilterValues}
                onSelectAll={handleSelectAll}
                onSelectNone={handleSelectNone}
                options={filterValues?.organizations?.options}
                type={filterValues?.organizations?.type}
                value={filterValues?.organizations?.value}
              />
            </FilterControl>
            <FilterControl
              appliedCount={getMoreFiltersCount(filterValues)}
              label="More Filters"
            >
              <Box display="flex" flexDirection="column">
                <Filter
                  label="More than 1 Result"
                  name="moreThanA"
                  onChange={handleFilterValues}
                  type="boolean"
                  value={filterValues?.moreThanA?.value}
                />
                <Filter
                  label="More than 3 Results"
                  name="moreThanB"
                  onChange={handleFilterValues}
                  type="boolean"
                  value={filterValues?.moreThanB?.value}
                />
                <Filter
                  label="More than 10 Results"
                  name="moreThanC"
                  onChange={handleFilterValues}
                  type="boolean"
                  value={filterValues?.moreThanC?.value}
                />
                <Filter
                  label="Collected within Last 10 Years"
                  name="dataRecentA"
                  onChange={handleFilterValues}
                  type="boolean"
                  value={filterValues?.dataRecentA?.value}
                />
                <Filter
                  label="Collected within Last 5 Years"
                  name="dataRecentB"
                  onChange={handleFilterValues}
                  type="boolean"
                  value={filterValues?.dataRecentB?.value}
                />
              </Box>
            </FilterControl>
          </FiltersContainer>
        </FiltersSection>
      )}

      <FiltersSection>
        <FiltersContainer>
          <FilterControl label={`Color wells by ${activeStyle.name}`}>
            <Typography variant="subtitle1" gutterBottom>
              Color wells by
            </Typography>
            <WellStylesControl
              label="Color wells by"
              name="wellStyles"
              onChange={handleActiveStyle}
              options={styleOptions}
              value={activeStyle.id}
            />
          </FilterControl>
        </FiltersContainer>
      </FiltersSection>
    </>
  );
};

export default FiltersBar;
