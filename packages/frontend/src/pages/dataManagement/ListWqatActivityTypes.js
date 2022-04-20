import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatActivityTypes = () => {
  const columns = [
    {
      title: "Enabled",
      field: "wqat_include",
      type: "boolean",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Activity Type",
      field: "activity_type_desc",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
  ];

  return (
    <DataScrubbing
      endpoint="list-wqat-activity-types"
      title="Activity Types"
      indexField="activity_type_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columns={columns}
    />
  );
};

export default ListWqatActivityTypes;
