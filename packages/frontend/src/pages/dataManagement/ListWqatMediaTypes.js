import React from "react";
import DataScrubbing from "../../components/DataScrubbing";

const ListWqatMediaTypes = () => {
  return (
    <DataScrubbing
      endpoint="list-wqat-media-types"
      editableFields={["wqat_include"]}
      title="Media Types"
      indexField="media_type_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columnDisplayFields={[
        "media_type_ndx",
        "media_name",
        "media_subdivision_name",
        "wqat_include",
      ]}
    />
  );
};

export default ListWqatMediaTypes;
