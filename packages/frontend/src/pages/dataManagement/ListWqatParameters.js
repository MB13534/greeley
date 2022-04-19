import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatParameters = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-parameters"
      editableFields={["wqat_include"]}
      title="Parameters"
      indexField="parameter_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "parameter_ndx",
        "sample_fraction",
        "characteristic_name",
        "method_speciation",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatParameters;
