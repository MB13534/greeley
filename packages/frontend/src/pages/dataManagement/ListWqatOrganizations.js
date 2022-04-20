import React, { useMemo } from "react";
import DataScrubbing from "../../components/DataScrubbing";
import { useQuery } from "react-query";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const ListWqatOrganizations = () => {
  const { getAccessTokenSilently } = useAuth0();

  const { data: OrganizationsLookup } = useQuery(
    ["same-as-lookup-organizations"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/same-as-lookup-organizations`,
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

  const FormattedOrganizationsLookup = useMemo(() => {
    let converted = {};
    if (OrganizationsLookup?.length) {
      OrganizationsLookup.forEach((d) => {
        converted[d.same_as_ndx] = d.item_name;
      });
    }
    converted[0] = "-----";
    return converted;
  }, [OrganizationsLookup]);

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
      title: "Organization ID",
      field: "organization_id",
      editable: "never",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Display Name",
      field: "organization_name",
      cellStyle: {
        height: "40px",
      },
    },
    {
      title: "Same As",
      field: "same_as_ndx",
      lookup: FormattedOrganizationsLookup,
      cellStyle: { height: "40px" },
    },
  ];

  return (
    <DataScrubbing
      endpoint="list-wqat-organizations"
      title="Organizations"
      indexField="organization_ndx"
      tableMaxHeight="calc(100vh - 64px - 48px - 106px - 48px - 64px - 180px)"
      columns={columns}
    />
  );
};

export default ListWqatOrganizations;
