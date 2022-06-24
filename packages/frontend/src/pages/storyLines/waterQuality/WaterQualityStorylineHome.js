import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import WaterQualityStorylineSummary from "./WaterQualityStorylineSummary";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function WaterQualityStorylineHome() {
  return (
    <React.Fragment>
      <Helmet title="Water Quality Storyline" />
      <Typography variant="h3" gutterBottom display="inline">
        Water Quality Storyline
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Typography>Water Quality</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <WaterQualityStorylineSummary />
    </React.Fragment>
  );
}

export default WaterQualityStorylineHome;
