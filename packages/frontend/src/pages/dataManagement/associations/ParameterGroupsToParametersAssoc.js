import React, { useState, useMemo, useEffect } from "react";
import { Typography, Grid, Box, Chip } from "@material-ui/core";
import { useAuth0 } from "@auth0/auth0-react";
import useFetchData from "../../../hooks/useFetchData";

import SearchableList from "../../../components/SearchableList";

import styled from "styled-components/macro";
import { Flex } from "../../../components/Flex";
import AssociationControls from "./AssociationControls";
import ParametersListForParameterGroupsManagementTable from "./ParametersListForParameterGroupsManagementTable";
import useFormSubmitStatus from "../../../hooks/useFormSubmitStatus";
import axios from "axios";
import FormSnackbar from "../../../components/FormSnackbar";

const Root = styled.div`
  margin-top: 6px;
  width: 100%;
`;

const ParameterGroupsToParametersAssoc = () => {
  const { setWaitingState, snackbarOpen, snackbarError, handleSnackbarClose } =
    useFormSubmitStatus();
  const { getAccessTokenSilently } = useAuth0();

  const [refreshSwitch, setRefreshSwitch] = useState(false);
  const [activeParameterGroup, setActiveParameterGroup] = useState({});
  const [associatedParameters, setAssociatedParameters] = useState([]);

  const [ParameterGroups] = useFetchData("list-wqat-parameter-groups", [
    refreshSwitch,
  ]);
  const [Parameters] = useFetchData(`list-wqat-parameters`, []);

  const FilteredParameters = useMemo(() => {
    return Parameters.filter(
      (item) => item.wqat_include && item.same_as_ndx === -999
    );
  }, [Parameters]);

  const handleParameterGroupSelect = (parameterGroup) => {
    setAssociatedParameters([]);
    setActiveParameterGroup(parameterGroup);
  };

  const prepareValues = () => {
    const associatedParametersNdxs = associatedParameters.map(
      (parameter) => parameter.parameter_ndx
    );

    let preparedValues = [...FilteredParameters];

    //loops through and removes the selected parameter_group_ndx from every assoc_parameter_group_ndx array
    preparedValues.forEach((parameter) => {
      parameter?.assoc_parameter_group_ndx
        ? (parameter.assoc_parameter_group_ndx =
            parameter?.assoc_parameter_group_ndx?.filter(
              (item) => item !== activeParameterGroup.parameter_group_ndx
            ))
        : (parameter.assoc_parameter_group_ndx = []);
      //adds the parameter_group_ndx to only the arrays that the user has selected
      associatedParametersNdxs.includes(parameter.parameter_ndx) &&
        parameter.assoc_parameter_group_ndx.push(
          activeParameterGroup.parameter_group_ndx
        );
    });

    return preparedValues;
  };

  const handleRefresh = () => {
    setRefreshSwitch((state) => !state);
  };

  const handleSubmit = () => {
    // Set up a cancellation source
    let didCancel = false;
    setWaitingState("in progress");
    async function writeData() {
      try {
        const token = await getAccessTokenSilently();

        // Create request headers with token authorization
        const headers = { Authorization: `Bearer ${token}` };

        await axios.post(
          `${process.env.REACT_APP_ENDPOINT}/api/list-wqat-parameters/`,
          prepareValues(),
          { headers }
        );
        if (!didCancel) {
          // Ignore if we started fetching something else
          console.log("success");
          setWaitingState("complete", "no error");
          handleRefresh();
        }
      } catch (err) {
        // Is this error because we cancelled it ourselves?
        if (axios.isCancel(err)) {
          console.log(`call was cancelled`);
        } else {
          console.error(err);
          setWaitingState("complete", "error");
        }
        didCancel = true;
      }
    }
    writeData();
  };

  const handleSelectNone = () => setAssociatedParameters([]);

  const handleSelectAll = () =>
    setAssociatedParameters(FilteredParameters.map((d) => d));

  const handleParametersSelect = (rowData, row) => {
    const value = row;
    const checked = row.tableData.checked;
    setAssociatedParameters((prevState) => {
      let newValues = [...prevState];
      if (checked) {
        newValues.push(value);
      } else {
        const index = newValues
          .map((value) => value.parameter_ndx)
          .indexOf(value.parameter_ndx);
        newValues.splice(index, 1);
      }
      return newValues;
    });
  };

  useEffect(() => {
    const activeAssociations = FilteredParameters.filter((parameter) =>
      parameter?.assoc_parameter_group_ndx?.includes(
        activeParameterGroup.parameter_group_ndx
      )
    );
    if (activeAssociations.length > 0 && activeAssociations[0] !== null) {
      setAssociatedParameters(activeAssociations);
    } else {
      setAssociatedParameters([]);
    }
  }, [FilteredParameters, activeParameterGroup, refreshSwitch]);

  return (
    <Root>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={3}>
          <SearchableList
            title="Parameter Groups"
            data={ParameterGroups}
            valueField="parameter_group_ndx"
            primaryDisplayField="parameter_group_name"
            active={activeParameterGroup}
            onClick={handleParameterGroupSelect}
          />
        </Grid>
        <Grid item xs={12} sm={9}>
          <Box marginTop={2} width="100%">
            <Flex>
              <Typography variant="h6" color="textSecondary" gutterBottom>
                Manage Parameters Associations:
              </Typography>

              {activeParameterGroup.parameter_group_ndx && (
                <Box marginTop={2} marginBottom={2} marginLeft={2}>
                  <Chip label={activeParameterGroup.parameter_group_name} />
                </Box>
              )}
            </Flex>

            {activeParameterGroup.parameter_group_ndx && (
              <AssociationControls
                handleSave={handleSubmit}
                handleSelectAll={handleSelectAll}
                handleSelectNone={handleSelectNone}
              />
            )}

            {activeParameterGroup.parameter_group_ndx ? (
              <ParametersListForParameterGroupsManagementTable
                selections={associatedParameters}
                onCheck={handleParametersSelect}
                refreshSwitch={refreshSwitch}
              />
            ) : (
              <>
                <Typography variant="body1" paragraph>
                  Select a parameter group from the left to associate them with
                  parameters.
                </Typography>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
      <FormSnackbar
        open={snackbarOpen}
        error={snackbarError}
        handleClose={handleSnackbarClose}
        successMessage="Associations successfully saved."
        errorMessage="Associations could not be saved."
      />
    </Root>
  );
};

export default ParameterGroupsToParametersAssoc;
