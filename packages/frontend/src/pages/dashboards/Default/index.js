import React from "react";
import styled from "styled-components/macro";

import { Helmet } from "react-helmet-async";

import {
  Grid as MuiGrid,
  Typography as MuiTypography,
  CardContent,
  Card as MuiCard,
  CardHeader,
  CardMedia,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";

import { useAuth0 } from "@auth0/auth0-react";
import { NavLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { customSecondary, customHighlight } from "../../../theme/variants";

const Typography = styled(MuiTypography)(spacing);

const Grid = styled(MuiGrid)(spacing);

const Card = styled(MuiCard)(spacing);

const ChartWrapper = styled.div`
  height: 378px;
`;

const Hero = styled.div`
  background: url("/static/img/cog-header-entryway.jpg") center center / cover
    no-repeat;
  height: 300px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Recap = styled.section`
  border-top: 5px solid ${() => customHighlight[500]};
  margin-bottom: 24px;
  margin-top: 24px;
`;

const Description = styled.div`
  background-color: ${({ color = customHighlight[500] }) => color};
  color: white;
  padding: 20px 40px;
`;

const Welcome = styled.div`
  height: 250px;
  background-color: rgba(47, 44, 116, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 26px;
  border-radius: 50%;
  position: absolute;
`;

const StoryCard = styled(Card)`
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.35) !important;

  &:hover {
    outline: 4px solid ${() => customSecondary[500]};
    & .title-highlight {
      color: ${() => customSecondary[500]};
    }
  }
`;

const AboutLink = styled(Link)`
  color: ${() => customHighlight[500]};
  font-weight: 900;
`;

function Default() {
  const { user } = useAuth0();

  return (
    <React.Fragment>
      <Helmet title="Greeley Water Quality Dashboard" />
      <Hero>
        <Welcome>
          <Typography variant="h3" gutterBottom style={{ color: "azure" }}>
            Welcome to the
          </Typography>
          <Typography variant="h2" gutterBottom style={{ color: "azure" }}>
            Greeley Water Quality Dashboard
          </Typography>

          <Typography variant="subtitle1" style={{ color: "azure" }}>
            {user?.name}
          </Typography>
        </Welcome>
      </Hero>

      <Recap>
        <Grid container>
          <Grid item xs={12} lg={4} style={{ backgroundColor: "white" }}>
            <Link
              href="https://greeleygov.com/services/ws/system/water-quality"
              target="_blank"
              rel="noreferrer noopener"
            >
              <img
                src={"/static/img/CityOfGreeley_logo.jpg"}
                style={{
                  margin: "auto",
                  display: "block",
                  maxWidth: "100%",
                  // objectFit: "cover",
                  objectFit: "contain",
                  height: "100%",
                }}
                alt="Water Waves"
              />
            </Link>
          </Grid>

          <Grid item xs={12} lg={8}>
            <Description color="#424242">
              <Typography
                variant="h3"
                style={{ fontWeight: "100", fontSize: "30px" }}
              >
                Welcome to the Dashboard!
              </Typography>
              <Typography
                variant="body2"
                component="p"
                style={{
                  padding: "15px",
                  lineHeight: "1.8",
                  fontSize: ".95rem",
                }}
              >
                Greeley Water Department provides safe, high-quality water and
                work hard to ensure a reliable supply for the future. This
                Dashboard brings together data from multiple sources to make
                water quality affecting City of Greeley's residents more
                accessible and usable. This tool represents a snapshot of
                conditions for Greeley's source water 2010 to 2021 for a variety
                of water quality parameters. Explore water quality monitoring
                locations, trends and statistics in the{" "}
                <AboutLink component={NavLink} to="/data-access/map-explorer">
                  Map Explorer
                </AboutLink>{" "}
                or dig deeper into graphical visualizations on the{" "}
                <AboutLink component={NavLink} to="/data-access/graph-explorer">
                  Graph Explorer
                </AboutLink>{" "}
                page.
              </Typography>
            </Description>
          </Grid>
        </Grid>
      </Recap>

      <Grid container spacing={6}>
        <Grid item xs={12} lg={6}>
          <Link
            component={NavLink}
            to="/data-access/map-explorer"
            underline="none"
          >
            <StoryCard mb={3}>
              <CardHeader
                titleTypographyProps={{ variant: "h3" }}
                className="title-highlight"
                title="Map Explorer"
              />
              <CardContent>
                <ChartWrapper>
                  <CardMedia
                    style={{ height: "100%" }}
                    image="/static/img/map.png"
                    title="Map Explorer"
                  />
                </ChartWrapper>
              </CardContent>
            </StoryCard>
          </Link>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Link
            component={NavLink}
            to="/data-access/graph-explorer"
            underline="none"
          >
            <StoryCard mb={3}>
              <CardHeader
                titleTypographyProps={{ variant: "h3" }}
                className="title-highlight"
                title="Graph Explorer"
              />
              <CardContent>
                <ChartWrapper>
                  <CardMedia
                    style={{ height: "100%" }}
                    image="/static/img/graph.png"
                    title="Graph Explorer"
                  />
                </ChartWrapper>
              </CardContent>
            </StoryCard>
          </Link>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
