import React, { useState } from "react";
import { useQuery } from "react-query";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import axios from "axios";
import DataAdminEditOnlyTable from "./DataAdminEditOnlyTable";
import Loader from "./Loader";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const DataScrubbing = ({
  endpoint,
  title,
  indexField,
  tableMaxHeight,
  columns,
}) => {
  const { getAccessTokenSilently } = useAuth0();

  const [tableData, setTableData] = useState(null);
  const { error, isFetching } = useQuery(
    [endpoint],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/${endpoint}`,
          { headers }
        );

        setTableData(data);
      } catch (err) {
        console.error(err);
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  if (error) return "An error has occurred: " + error.message;
  return (
    <React.Fragment>
      <Helmet title={title} />
      <Typography variant="h3" gutterBottom display="inline">
        {title}
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Typography>{title}</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card mb={6}>
            <CardContent>
              {tableData ? (
                <DataAdminEditOnlyTable
                  label={title}
                  isLoading={isFetching}
                  data={tableData}
                  height={tableMaxHeight}
                  endpoint={endpoint}
                  lookupNdx={indexField}
                  pageSize={30}
                  updateHandler={setTableData}
                  columns={columns}
                />
              ) : (
                <Loader />
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default DataScrubbing;
