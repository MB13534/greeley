import React, { useMemo, useState } from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import useFetchData from "../../../hooks/useFetchData";
import { Switch } from "@lrewater/lre-react";
import { FormControlLabel } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  materialTable: {
    "& th:last-child": {
      textAlign: "left!important",
    },
  },
  toolbar: {
    paddingLeft: theme.spacing(2),
  },
  filterBtn: {
    marginTop: theme.spacing(1),
  },
}));

const Toolbar = (props) => {
  const classes = useStyles();
  const { handleChange, checked } = props;
  return (
    <div>
      <MTableToolbar {...props} />
      <div className={classes.toolbar}>
        <FormControlLabel
          control={
            <Switch
              label=""
              checked={checked}
              value="exclude"
              name="exclude"
              onChange={handleChange}
            />
          }
          label={
            checked ? (
              <>
                Toggle to view <em>all</em> parameters
              </>
            ) : (
              <>
                Toggle to view only <em>selected</em> parameters
              </>
            )
          }
        />
      </div>
    </div>
  );
};

const ParametersListForParameterGroupsManagementTable = ({
  selections,
  onCheck,
  refreshSwitch,
}) => {
  const classes = useStyles();
  const [exclude, setExclude] = useState(true);

  const handleExclude = () => {
    setExclude((state) => !state);
  };

  const [tableData, isLoading] = useFetchData("list-wqat-parameters", [
    refreshSwitch,
  ]);

  const FilteredTableData = useMemo(() => {
    return tableData.filter(
      (item) => item.wqat_include && item.same_as_ndx === -999
    );
  }, [tableData]);

  const columns = [
    {
      title: "Sample Fraction",
      field: "sample_fraction",
    },
    { title: "Characteristic Name", field: "characteristic_name" },
    { title: "Method Speciation", field: "method_speciation" },
    { title: "Display Name", field: "display_name" },
  ];

  const filterData = (data) => {
    if (exclude) {
      return data.filter((d) =>
        selections
          .map((selection) => selection.parameter_ndx)
          .includes(d.parameter_ndx)
      );
    }
    return data;
  };

  return (
    <div className={classes.materialTable}>
      <MaterialTable
        title=""
        columns={columns}
        data={filterData(FilteredTableData)}
        isLoading={isLoading}
        components={{
          Toolbar: (props) => {
            return (
              <Toolbar
                handleChange={handleExclude}
                checked={exclude}
                {...props}
              />
            );
          },
        }}
        options={{
          actionsCellStyle: { justifyContent: "center" },
          pageSize: 15,
          pageSizeOptions: [15, 30, 60],
          maxBodyHeight: 600,
          padding: "dense",
          selection: true,
          selectionProps: (rowData) => ({
            checked: selections
              .map((selection) => selection.parameter_ndx)
              .includes(rowData.parameter_ndx),
          }),
          showTextRowsSelected: false,
          showSelectAllCheckbox: false,
        }}
        onSelectionChange={onCheck}
      />
    </div>
  );
};

export default ParametersListForParameterGroupsManagementTable;
