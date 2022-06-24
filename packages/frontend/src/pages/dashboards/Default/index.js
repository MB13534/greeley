import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
  CardContent,
  Card as MuiCard,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import LineChart from "./LineChart";
import DoughnutChart from "./DoughnutChart";

import { useAuth0 } from "@auth0/auth0-react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import WaterQualityStorylineSummary from "../../storyLines/waterQuality/WaterQualityStorylineSummary";

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

const Card = styled(MuiCard)(spacing);

const Hero = styled.div`
  background: url("/static/img/sle-bluff-lake.jpeg") left center / cover
    no-repeat;
  height: 250px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Welcome = styled.div`
  background-color: rgba(249, 246, 241, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  border-radius: 50%;
  position: absolute;
\`;
`;

function Default() {
  const { user } = useAuth0();

  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Hero>
        <Welcome>
          <Typography variant="h3" gutterBottom style={{ color: "white" }}>
            Welcome to the
          </Typography>
          <Typography variant="h2" gutterBottom style={{ color: "white" }}>
            Water Quality Assessment Tool Dashboard
          </Typography>
          <Typography variant="subtitle1" style={{ color: "white" }}>
            {user?.name}
          </Typography>
        </Welcome>
      </Hero>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <LineChart />
        </Grid>
        <Grid item xs={12} lg={6}>
          <DoughnutChart />
        </Grid>
      </Grid>

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Accordion defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Card>
                <CardContent>
                  <Typography variant="h3" gutterBottom>
                    Check Out Our Water Quality Storylines!
                  </Typography>
                  <Typography variant="body2" gutterBottom>
                    Water quality is complex. Take a dive into the prepared
                    storylines to emerse yourself in comprehensive introduction.
                    From E. coli, to nutrients, to emerging contaminants, learn
                    not only how these constiuents impact water quality, but
                    additionally how they get into the river and how they are
                    regulated. Then take this knowledge and use it to help keep
                    our rivers and streams healthy!
                  </Typography>
                </CardContent>
              </Card>
            </AccordionSummary>
            <AccordionDetails>
              <WaterQualityStorylineSummary />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
