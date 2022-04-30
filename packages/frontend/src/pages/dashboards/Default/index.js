import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  Link,
  CardContent,
  Card as MuiCard,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { green, red } from "@material-ui/core/colors";

import Actions from "./Actions";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";
import Stats from "./Stats";
import Table from "./Table";
import { NavLink } from "react-router-dom";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Card = styled(MuiCard)(spacing);

function EmptyCard({
  title,
  description = "Description goes here",
  url = "#",
}) {
  return (
    <Link component={NavLink} to={url} underline="none">
      <Card>
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

function Default() {
  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justify="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Dashboard
          </Typography>
          <Typography variant="subtitle1">Welcome back!</Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard
            title="Check Out Our Water Quality Storylines!"
            description="Water quality is complex. Take a dive into the prepared storylines to emerse yourself in comprehensive introduction. From E. coli, to nutrients, to emerging contaminants, learn not only how these constiuents impact water quality, but additionally how they get into the river and how they are regulated. Then take this knowledge and use it to help keep our rivers and streams healthy!"
            url="/storylines"
          />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Readings Today"
            amount="2.532"
            chip="Today"
            percentageText="+26%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Water Pressure"
            amount="170.212"
            chip="Annual"
            percentageText="-14%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Total Costs"
            amount="$ 24.300"
            chip="Monthly"
            percentageText="+18%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Compliant Wells"
            amount="45"
            chip="Yearly"
            percentageText="-9%"
            percentagecolor={red[500]}
          />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={8}>
          <LineChart />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DoughnutChart />
        </Grid>
      </Grid>
      <Grid container spacing={6}>
        <Grid item xs={12} lg={4}>
          <BarChart />
        </Grid>
        <Grid item xs={12} lg={8}>
          <Table />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
