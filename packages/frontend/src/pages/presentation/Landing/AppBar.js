import React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  isWidthDown,
  Toolbar,
  Tooltip,
  withWidth,
} from "@material-ui/core";

import { ROUTES } from "../../../constants";
import { Link as MuiLink } from "@material-ui/core";
import { Link } from "react-router-dom";

const Button = styled(MuiButton)(spacing);

const BrandIcon = styled.img`
  margin-right: ${(props) => props.theme.spacing(2)}px;
  display: flex;
  align-items: center;
`;

function AppBarComponent({ width }) {
  return (
    <AppBar position="absolute" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              <MuiLink
                href="https://lrewater.com"
                target="_blank"
                rel="noreferrer noopener"
              >
                <Tooltip title="Built by LRE Water">
                  <BrandIcon
                    src={`/static/img/lrewater-logo-simple.svg`}
                    width={isWidthDown("xs", width) ? "125" : "150"}
                    height={isWidthDown("xs", width) ? "40" : "48"}
                    alt={"LREWater.com"}
                  />
                </Tooltip>
              </MuiLink>
            </Grid>

            <Grid item xs />
            <Grid item>
              <Button
                ml={2}
                color="primary"
                variant="contained"
                component={Link}
                to={ROUTES.PAGE_DASHBOARD}
              >
                {isWidthDown("xs", width) ? "Dashboard" : "View Dashboard"}
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
  );
}

export default withWidth()(AppBarComponent);
