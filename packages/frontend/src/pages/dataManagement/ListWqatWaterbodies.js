import React, { useMemo } from "react";
import DataScrubbing from "../../components/DataScrubbing";
import { useAuth0 } from "@auth0/auth0-react";
import { useQuery } from "react-query";
import axios from "axios";

const ListWqatWaterbodies = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { data: WaterbodiesLookup } = useQuery(
    ["same-as-lookup-waterbodies"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/same-as-lookup-waterbodies`,
          { headers }
        );
        return data;
      } catch (err) {
        console.error(err);
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const FormattedWaterbodiesLookup = useMemo(() => {
    let converted = {};
    if (WaterbodiesLookup?.length) {
      WaterbodiesLookup.forEach((d) => {
        converted[d.same_as_ndx] = d.item_name;
      });
    }
    converted[-999] = "-----";
    return converted;
  }, [WaterbodiesLookup]);

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
      title: "Waterbody Name",
      field: "waterbody_name",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Same As",
      field: "same_as_ndx",
      lookup: FormattedWaterbodiesLookup,
      cellStyle: { height: "40px" },
    },
  ];

  return (
    <DataScrubbing
      endpoint="list-wqat-waterbodies"
      title="Water Bodies"
      indexField="waterbody_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columns={columns}
    />
  );
};

export default ListWqatWaterbodies;
