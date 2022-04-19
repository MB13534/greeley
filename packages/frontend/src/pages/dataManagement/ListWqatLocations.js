import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatLocations = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-locations"
      editableFields={["wqat_include"]}
      title="Locations"
      indexField="location_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "location_ndx",
        "location_id",
        "location_name",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatLocations;
