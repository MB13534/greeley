import React, { useEffect, useState } from "react";
import styled from "styled-components/macro";
import { isNullOrUndef } from "chart.js/helpers";
import { Pagination } from "@material-ui/lab";
import { titleize } from "inflected";
import { formatBooleanTrueFalse } from "../../../utils";

const PopupWrap = styled.div`
  height: 200px;
  overflow-y: scroll;
  width: 380px;
`;

const PopupTable = styled.table`
  border-radius: 5px;
  border-collapse: collapse;
  border: 1px solid #ccc;
  width: 100%;
`;

const PopupRow = styled.tr`
  border-radius: 5px;
  &:nth-child(even) {
    background-color: #eee;
  }
`;

const PopupCell = styled.td`
  padding: 3px 6px;
  margin: 0;
`;

const Popup = ({ features, layers }) => {
  function getUniqueFeatures(array, comparatorProperty1, comparatorProperty2) {
    const existingFeatureKeys = {};
    // Because features come from tiled vector data, feature geometries may be split
    // or duplicated across tile boundaries and, as a result, features may appear
    // multiple times in query results.
    //concat two ids to make a unique id
    return array.filter((el) => {
      if (
        existingFeatureKeys[
          el[comparatorProperty1] + el?.properties[comparatorProperty2]
        ]
      ) {
        return false;
      } else {
        existingFeatureKeys[
          el[comparatorProperty1] + el?.properties[comparatorProperty2]
        ] = true;
        return true;
      }
    });
  }

  const uniqueFeatures = getUniqueFeatures(features, "id", "ndx");

  const [page, setPage] = useState(1);
  const [feature, setFeature] = useState(uniqueFeatures?.[0]);
  const [excludeFields, setExcludeFields] = useState([]);

  const handlePageChange = (e, p) => {
    setPage(p);
  };

  useEffect(() => {
    if (uniqueFeatures?.length) {
      setFeature(uniqueFeatures[page - 1]);
    }
  }, [uniqueFeatures, page]);

  useEffect(() => {
    const excludedFields = layers?.find(
      (layer) => layer?.id === feature?.layer?.id
    )?.lreProperties?.popup?.excludeFields;
    setExcludeFields(excludedFields || []);
  }, [feature, layers]);

  let popupData;
  if (feature?.layer?.id === "greeley-locations-circle") {
    popupData = [
      [
        "Period of Record",
        `${new Date(feature?.properties.por_start).getFullYear()} - ${new Date(
          feature?.properties.por_end
        ).getFullYear()}`,
      ],
      ["Reach", feature?.properties.reach],
      ["Organization", feature?.properties.organization],
      ["Record Count", feature?.properties.resultcount],
      ["Huc8", feature?.properties.huc8],
      ["Huc12", feature?.properties.huc12 || "N/A"],
      ["Latitude", feature?.properties.x_lat],
      ["Longitude", feature?.properties.y_lon],
    ];
  } else {
    popupData = excludeFields
      ? Object.entries(feature?.properties).reduce((acc, [key, value]) => {
          //MJB also removing entry if the value is an empty string, null, or undefined
          if (
            !excludeFields.includes(key) &&
            value !== "" &&
            !isNullOrUndef(value)
          ) {
            acc.push([key, value]);
          }
          return acc;
        }, [])
      : Object.entries(feature?.properties);
  }

  if (!popupData) return null;
  return (
    <>
      <h2 style={{ marginBottom: 0 }}>
        {feature?.layer?.id === "greeley-locations-circle"
          ? feature?.properties.station_name
          : titleize(feature?.layer?.id)}
      </h2>
      <h3 style={{ marginTop: 0 }}>
        {feature?.layer?.id === "greeley-locations-circle" &&
          feature?.properties.station_id}
      </h3>
      <PopupWrap>
        <PopupTable>
          <tbody>
            {popupData?.map(([key, value]) => {
              return (
                <PopupRow key={key}>
                  <PopupCell>
                    <strong>{titleize(key)}</strong>
                  </PopupCell>
                  <PopupCell>{formatBooleanTrueFalse(value)}</PopupCell>
                </PopupRow>
              );
            })}
          </tbody>
        </PopupTable>
      </PopupWrap>
      <Pagination
        style={{ display: "flex", justifyContent: "center", marginTop: "10px" }}
        count={uniqueFeatures.length}
        size="medium"
        page={page}
        variant="outlined"
        shape="rounded"
        color="primary"
        onChange={handlePageChange}
      />
    </>
  );
};

export default Popup;
