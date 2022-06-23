import React from "react";
import {
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from "@material-ui/core";
import { Helmet } from "react-helmet-async";
import Link from "@material-ui/core/Link";
import { NavLink } from "react-router-dom";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import Panel from "../../../components/panels/Panel";
import ParameterGroupsToParametersAssoc from "./ParameterGroupsToParametersAssoc";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

const ParameterGroupsToParameters = () => {
  return (
    <React.Fragment>
      <Helmet title="Parameter Groups to Parameters Associations" />
      <Typography variant="h3" gutterBottom display="inline">
        Parameter Groups to Parameters Associations
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Typography>Parameter Groups to Parameters</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Panel title="Parameter Groups to Parameters">
        <ParameterGroupsToParametersAssoc />
      </Panel>
    </React.Fragment>
  );
};

export default ParameterGroupsToParameters;
