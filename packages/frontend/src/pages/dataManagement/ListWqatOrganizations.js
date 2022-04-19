import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatOrganizations = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-organizations"
      editableFields={["wqat_include"]}
      title="Organizations"
      indexField="organization_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "organization_ndx",
        "organization_id",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatOrganizations;
