import { Helmet } from "react-helmet-async";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Link,
  Typography,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const PageBreadcrumbs = ({ title }) => {
  return (
    <>
      <Helmet title="Storyline Title" />
      <Typography variant="h3" gutterBottom display="inline">
        Water Quality Storyline
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/storylines/water-quality">
          Water Quality
        </Link>
        <Typography>{title}</Typography>
      </Breadcrumbs>

      <Divider my={6} />
    </>
  );
};

export default PageBreadcrumbs;
