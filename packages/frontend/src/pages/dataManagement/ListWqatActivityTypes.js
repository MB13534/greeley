import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatActivityTypes = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-activity-types"
      editableFields={["wqat_include"]}
      title="Activity Types"
      indexField="activity_type_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "activity_type_ndx",
        "activity_type_desc",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatActivityTypes;
