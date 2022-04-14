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
import MaterialTable from "material-table";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const ListWqatOrganizations = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [columns, setColumns] = useState([]);
  const { data, error, isFetching } = useQuery(
    ["list-wqat-organizations"],
    async () => {
      try {
        const token = await getAccessTokenSilently();
        const headers = { Authorization: `Bearer ${token}` };

        const { data } = await axios.get(
          `${process.env.REACT_APP_ENDPOINT}/api/list-wqat-organizations`,
          { headers }
        );

        setColumns(
          Object.keys(data[0]).map((key) => ({
            title: key,
            field: key,
          }))
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

  if (error) return "An error has occurred: " + error.message;
  return (
    <React.Fragment>
      <Helmet title="Organizations" />
      <Typography variant="h3" gutterBottom display="inline">
        Organizations
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Typography>Organizations</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Card mb={6}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Empty
              </Typography>

              <MaterialTable
                columns={columns}
                isLoading={isFetching}
                data={data}
              />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default ListWqatOrganizations;
