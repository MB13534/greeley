import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatWaterbodies = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-waterbodies"
      editableFields={["wqat_include"]}
      title="Water Bodies"
      indexField="waterbody_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={["waterbody_ndx", "waterbody_name", "wqat_include"]}
    />
  );
};

export default ListWqatWaterbodies;
