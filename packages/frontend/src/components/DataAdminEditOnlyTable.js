import React, { useState } from "react";

import CopyIcon from "@material-ui/icons/FileCopy";
import CheckIcon from "@material-ui/icons/CheckBox";
import { copyToClipboard, dateFormatter } from "../utils";
import MaterialTable from "material-table";
import { useApp } from "../AppProvider";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

const DataAdminTable = ({
  label,
  data,
  pageSize = 10,
  isLoading = false,
  height = "100%",
  actions = [],
  endpoint,
  lookupNdx,
  updateHandler,
  columns,
}) => {
  const shouldShowSameAsNdxToggle = [
    "list-wqat-parameters",
    "list-wqat-locations",
  ].includes(endpoint);

  const { doToast } = useApp();
  const { getAccessTokenSilently } = useAuth0();

  const [excludeDisabled, setExcludeDisabled] = useState(false);
  const [excludeSameAsNdx, setExcludeSameAsNdx] = useState(false);

  const handleToggleExcludeDisabled = () => {
    setExcludeDisabled((prevState) => {
      return !prevState;
    });
  };

  const handleToggleExcludeSameAsNdx = () => {
    setExcludeSameAsNdx((prevState) => {
      return !prevState;
    });
  };

  const filterData = (data) => {
    if (excludeDisabled && excludeSameAsNdx) {
      return data.filter(
        (d) => d.wqat_include === true && d.same_as_ndx === -999
      );
    } else if (excludeDisabled) {
      return data.filter((d) => d.wqat_include === true);
    } else if (excludeSameAsNdx) {
      return data.filter((d) => d.same_as_ndx === -999);
    }
    return data;
  };

  const handleUpdate = (newData, oldData, rowData, columnDef) => {
    return (async () => {
      try {
        if (oldData !== newData) {
          const token = await getAccessTokenSilently();
          const headers = { Authorization: `Bearer ${token}` };

          const patchData = {
            [columnDef.field]: newData,
          };

          await axios.patch(
            `${process.env.REACT_APP_ENDPOINT}/api/${endpoint}/${rowData[lookupNdx]}`,
            patchData,
            { headers }
          );
          updateHandler((prevState) => {
            const data = [...prevState];
            data[data.indexOf(rowData)][columnDef.field] = newData;
            return data;
          });
          doToast("success", "New data was updated to the database");
        } else {
          return null;
        }
      } catch (err) {
        console.error(err);
        const message = err?.message ?? "Something went wrong";
        doToast("error", message);
      }
    })();
  };

  const handleReview = (event, rowData) => {
    const rowsToUpdate = rowData.map((row) => row[lookupNdx]);

    rowData.forEach((row) => (row.tableData.checked = false));

    return (async () => {
      try {
        if (rowData.length) {
          const token = await getAccessTokenSilently();
          const headers = { Authorization: `Bearer ${token}` };

          await axios.patch(
            `${process.env.REACT_APP_ENDPOINT}/api/${endpoint}/reviewed/${rowsToUpdate}`,
            { needs_review: false },
            { headers }
          );
          updateHandler((prevState) => {
            const data = [...prevState];
            rowData.forEach(
              (row) => (data[data.indexOf(row)].needs_review = false)
            );

            return data;
          });
          doToast("success", "New data was updated to the database");
        } else {
          return null;
        }
      } catch (err) {
        console.error(err);
        const message = err?.message ?? "Something went wrong";
        doToast("error", message);
      }
    })();
  };

  return (
    <>
      <MaterialTable
        id={label}
        title={`${label} ${dateFormatter(new Date(), "MM/DD/YYYY, h:mm A")}`}
        //ensures the tableData property is not included in the columns
        columns={columns.map(({ tableData, ...rest }) => {
          return rest;
        })}
        isLoading={isLoading}
        data={filterData(data)}
        cellEditable={{
          onCellEditApproved: handleUpdate,
        }}
        actions={[
          {
            icon: CopyIcon,
            tooltip: "Copy Data",
            isFreeAction: true,
            onClick: () => {
              try {
                copyToClipboard(data, columns, () =>
                  doToast("success", "Data was copied to your clipboard.")
                );
              } catch (error) {
                const message = error?.message ?? "Something went wrong";
                doToast("error", message);
              }
            },
          },
          {
            icon: CheckIcon,
            tooltip: "Mark as Reviewed",
            onClick: handleReview,
          },
          {
            icon: excludeDisabled ? "toggle_on" : "toggle_off",
            iconProps: {
              style: { color: excludeDisabled ? "#4CAF50" : "currentcolor" },
            },
            tooltip: excludeDisabled
              ? "Show Disabled Records"
              : "Hide Disabled Records",
            isFreeAction: true,
            onClick: handleToggleExcludeDisabled,
          },
          shouldShowSameAsNdxToggle
            ? {
                icon: excludeSameAsNdx ? "toggle_on" : "toggle_off",
                iconProps: {
                  style: {
                    color: excludeSameAsNdx ? "#4CAF50" : "currentcolor",
                  },
                },
                tooltip: excludeSameAsNdx
                  ? "Show Same As Records"
                  : "Hide Same As Records",
                isFreeAction: true,
                onClick: handleToggleExcludeSameAsNdx,
              }
            : null,
          ...actions,
        ]}
        options={{
          selection: true,
          emptyRowsWhenPaging: false,
          columnsButton: true,
          exportButton: true,
          exportAllData: true,
          pageSize: pageSize,
          pageSizeOptions: [5, 10, 30, 60],
          padding: "dense",
          searchFieldAlignment: "left",
          showTitle: false,
          maxBodyHeight: height,
          rowStyle: (rowData) => {
            return {
              backgroundColor: rowData.needs_review && "#fff2a8",
            };
          },
        }}
      />
    </>
  );
};

export default DataAdminTable;
