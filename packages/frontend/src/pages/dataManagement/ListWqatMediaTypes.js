import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatMediaTypes = () => {
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
      title: "Media Name",
      field: "media_name",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Subdivision Name",
      field: "media_subdivision_name",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
  ];

  return (
    <DataScrubbing
      endpoint="list-wqat-media-types"
      title="Media Types"
      indexField="media_type_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columns={columns}
    />
  );
};

export default ListWqatMediaTypes;
