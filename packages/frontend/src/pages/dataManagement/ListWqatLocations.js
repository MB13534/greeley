import React, { useMemo } from "react";
import DataScrubbing from "../../components/DataScrubbing";
import { useQuery } from "react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const ListWqatLocations = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { data: LocationsLookup } = useQuery(
    ["same-as-lookup-organizations"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/same-as-lookup-locations`,
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

  const { data: LocationTypesLookup } = useQuery(
    ["lookup-location-types"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/lookup-location-types`,
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

  const { data: WaterbodiesLookup } = useQuery(
    ["lookup-waterbodies"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/lookup-waterbodies`,
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

  const FormattedLocationsLookup = useMemo(() => {
    let converted = {};
    if (LocationsLookup?.length) {
      LocationsLookup.forEach((d) => {
        converted[d.same_as_ndx] = d.item_name;
      });
    }
    converted[-999] = "-----";
    return converted;
  }, [LocationsLookup]);

  const FormattedLocationTypesLookup = useMemo(() => {
    let converted = {};
    if (LocationTypesLookup?.length) {
      LocationTypesLookup.forEach((d) => {
        converted[d.ndx] = d.item_name;
      });
    }
    return converted;
  }, [LocationTypesLookup]);

  const FormattedWaterbodiesLookup = useMemo(() => {
    let converted = {};
    if (WaterbodiesLookup?.length) {
      WaterbodiesLookup.forEach((d) => {
        converted[d.ndx] = d.item_name;
      });
    }
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
      title: "Location ID",
      field: "location_id",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Location Name",
      field: "location_name",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Waterbody Name",
      field: "waterbody_ndx",
      editable: "never",
      lookup: FormattedWaterbodiesLookup,
      cellStyle: { height: "40px" },
    },
    {
      title: "Location Type",
      field: "location_type_ndx",
      editable: "never",
      lookup: FormattedLocationTypesLookup,
      cellStyle: { height: "40px" },
    },
    {
      title: "HUC8",
      field: "huc8",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "HUC12",
      field: "huc12",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Same As",
      field: "same_as_ndx",
      lookup: FormattedLocationsLookup,
      cellStyle: { height: "40px" },
    },
  ];

  return (
    <DataScrubbing
      endpoint="list-wqat-locations"
      title="Locations"
      indexField="location_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columns={columns}
    />
  );
};

export default ListWqatLocations;
