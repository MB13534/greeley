import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatLocationTypes = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-location-types"
      editableFields={["wqat_include"]}
      title="Location Types"
      indexField="location_type_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "location_type_ndx",
        "location_type_desc",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatLocationTypes;
