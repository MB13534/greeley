import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import {
  Grid as MuiGrid,
  Link,
  Card as MuiCard,
  Typography,
  CardContent as MuiCardContent,
  CardMedia,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { customSecondary } from "../../../theme/variants";

const Card = styled(MuiCard)(spacing);
const Grid = styled(MuiGrid)(spacing);

const StoryCard = styled(Card)`
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35) !important;
  margin: 0px 20px 40px 20px;
  height: 100%;
  width: 400px;

  &:hover {
    background-color: #f6f6f6;
    outline: 4px solid ${() => customSecondary[500]};
    & .title-highlight {
      color: ${() => customSecondary[500]};
    }
  }
`;

const CardContent = styled(MuiCardContent)`
  position: relative;

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)}px;
  }
`;

function EmptyCard({
  title,
  description = "",
  url = "#",
  image = "",
  tooltip = null,
}) {
  return (
    <Grid item mb={10}>
      <Link component={NavLink} to={url} underline="none">
        <StoryCard>
          <CardMedia
            style={{ height: "180px" }}
            image={image}
            title={tooltip}
          />
          <CardContent>
            <Typography className="title-highlight" variant="h5" gutterBottom>
              {title}
            </Typography>
            <Typography variant="body2" gutterBottom color="textSecondary">
              {description}
            </Typography>
          </CardContent>
        </StoryCard>
      </Link>
    </Grid>
  );
}

function WaterQualityStorylineSummary() {
  return (
    <React.Fragment>
      <Grid container justify="center">
        <EmptyCard
          title="What is Water Quality?"
          description="Learn about the nexus between water between water quantity and quality and more."
          url="/storylines/water-quality/what-is-water-quality"
          image="/static/img/storylines/StorylineCardThumbnail-WhatIsWaterQuality.png"
          tooltip="Water Quality"
        />
        <EmptyCard
          title="E. coli Storyline"
          description="Learn not only what E. coli are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
          url="/storylines/water-quality/e-coli"
          image="/static/img/storylines/StorylineCardThumbnail-Ecoli.png"
          tooltip="E. Coli"
        />
        <EmptyCard
          title="Nutrients Storyline"
          description="Learn not only what Nutrients are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
          url="/storylines/water-quality/nutrients"
          image="/static/img/storylines/StorylineCardThumbnail-Nutrients.png"
          tooltip="Nutrients"
        />
        <EmptyCard
          title="Contaminants of Emerging Concern Storyline"
          description="Learn not only what Contaminants of Emerging Concern are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
          url="/storylines/water-quality/contaminants-of-emerging-concern"
          image="/static/img/storylines/StorylineCardThumbnail-CECs.png"
          tooltip="Contaminants"
        />
        <EmptyCard
          title="Total Dissolved Solids Storyline"
          description="Learn not only what Total Dissolved Solids are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
          url="/storylines/water-quality/total-dissolved-solids"
          image="/static/img/storylines/StorylineCardThumbnail-Solids.png"
          tooltip="Dissolved Solids"
        />
        <EmptyCard
          title="Total Suspended Solids Storyline"
          description="Learn not only what Total Suspended Solids are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries."
          url="/storylines/water-quality/total-suspended-solids"
          image="/static/img/storylines/StorylineCardThumbnail-pHTempDO.png"
          tooltip="Suspended Solids"
        />
        <EmptyCard
          title="Metals and Other Trace Elements Storyline"
          description="Learn about Metals and Other Trace Elements."
          url="/storylines/water-quality/metals-and-other-trace-elements"
          image="/static/img/storylines/StorylineCardThumbnail-Metals.png"
          tooltip="Metals and Other Trace Elements"
        />
      </Grid>
    </React.Fragment>
  );
}

export default WaterQualityStorylineSummary;
