import React from "react";
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

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function EmptyCard({
  title,
  description = "Description goes here",
  url = "#",
}) {
  return (
    <Link component={NavLink} to={url} underline="none">
      <Card mb={6}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" gutterBottom>
            {description}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
}

function StorylinesHome() {
  return (
    <React.Fragment>
      <Helmet title="Blank Page" />
      <Typography variant="h3" gutterBottom display="inline">
        Storylines
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Typography>Storylines</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard
            title="What is Water Quality?"
            description="Learn about the nexus between water between water quantity and quality and more."
            url="/storylines/what-is-water-quality"
          />
          <EmptyCard
            title="E. coli Storyline"
            description="Learn not only what E. coli are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
            url="/storylines/e-coli"
          />
          <EmptyCard
            title="Nutrients Storyline"
            description="Learn not only what nutrients are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
            url="/storylines/nutrients"
          />
          <EmptyCard
            title="Contaminants of Emerging Concern Storyline"
            description="Learn not only what Contaminants of Emerging Concern are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
            url="/storylines/contaminants-of-emerging-concern"
          />
          <EmptyCard
            title="Total Dissolved Solids Storyline"
            description="Learn not only what Total Dissolved Solids are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
            url="/storylines/total-dissolved-solids"
          />
          <EmptyCard
            title="Total Suspended Solids Storyline"
            description="Learn not only what Total Suspended Solids are, but additionally what can"
            url="/storylines/total-suspended-solids"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default StorylinesHome;
