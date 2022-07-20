import React, { useEffect, useLayoutEffect, useState } from "react";
import { InputAdornment, TextField as MuiTextField } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import styled from "styled-components/macro";
import { WELLS_LABELS_LAYER_ID, WELLS_LAYER_ID } from "../../constants";
import mapboxgl from "!mapbox-gl"; // eslint-disable-line import/no-webpack-loader-syntax
import { lineColors } from "../../../../utils";

const TextField = styled(MuiTextField)`
  width: 100%;
`;

const CommaSeparatedWellsSearch = ({ map }) => {
  //current value in the search box
  const [value, setValue] = useState("");

  //an unique set of the submitted wells, all caps and stripped
  const [wells, setWells] = useState([""]);
  //upon load, zoom to the center of the clearwater markers
  //draw a rectangle that represents the area of markers
  //**a marker must be on the screen in order for it to be in the query results
  useEffect(() => {
    map?.flyTo({ center: [-104.98518, 39.73871], zoom: 7.5 });
    const northEast = [-103.87945, 40.4524];
    const southEast = [-103.87945, 38.86938];
    const southWest = [-106.20588, 38.86938];
    const northWest = [-106.20588, 40.4524];

    if (!map.getSource("boundingBox")) {
      map.addSource("boundingBox", {
        type: "geojson",
        data: {
          type: "Feature",
          properties: {},
          geometry: {
            type: "LineString",
            coordinates: [
              northEast,
              southEast,
              southWest,
              northWest,
              northEast,
            ],
          },
        },
      });
      map.addLayer({
        id: "boundingBox",
        type: "line",
        source: "boundingBox",
        layout: {
          "line-join": "round",
          "line-cap": "round",
        },
        paint: {
          "line-color": lineColors.maroon,
          "line-width": 5,
        },
      });
    }
  }, [map]);

  //when the user submits, the wells array gets created
  //when the wells array changes, the filter gets applied
  useEffect(() => {
    if (
      map !== undefined &&
      map.getLayer(WELLS_LAYER_ID) &&
      map.getLayer(WELLS_LABELS_LAYER_ID) &&
      wells
    ) {
      map.setFilter(WELLS_LABELS_LAYER_ID, [
        "match",
        ["get", "station_id"],
        ...wells,
        true,
        false,
      ]);
      map.setFilter(WELLS_LAYER_ID, [
        "match",
        ["get", "station_id"],
        ...wells,
        true,
        false,
      ]);
    }
  }, [wells]); //eslint-disable-line

  //equiv of ComponentWillUnmount
  //when the component resolves, remove the filter and the bounding box
  useLayoutEffect(() => {
    return () => {
      map.setFilter(WELLS_LAYER_ID, null);
      map.setFilter(WELLS_LABELS_LAYER_ID, null);
      map.removeLayer("boundingBox");
      map.removeSource("boundingBox");
    };
  }, []); //eslint-disable-line

  //when the user types, update the current value state
  //if the user clears the search box, reset the bounding box to influence
  //the user always includes the whole box in their search
  const handleChange = (event) => {
    setValue(event?.target?.value);
    if (event?.target?.value === "") {
      map?.flyTo({ center: [-104.98518, 39.73871], zoom: 8 });
    }
  };

  //when the user submits, take the value string and turn it into an set
  //that removes duplicates, white space, and makes all letters cap
  //then query every point and compare to those within the wells set
  //take the resulting coordinates and zoom to a bounding box containing those points
  //setWells to the original set to apply the filter
  const handleSubmit = (event) => {
    event.preventDefault();

    const wellsArray = value.replaceAll(" ", "").toUpperCase().split(",");
    const uniqueWellsArray = [...new Set(wellsArray)];

    const allWells = map.querySourceFeatures("greeley-locations", {
      sourceLayer: "greeley-locations",
    });

    const filteredWells = allWells.filter((well) => {
      return uniqueWellsArray.includes(well.properties.station_id);
    });

    const allCoords = filteredWells.map((item) => [
      item.properties.y_lon,
      item.properties.x_lat,
    ]);

    if (allCoords.length) {
      const bounds = allCoords.reduce(function (bounds, coord) {
        return bounds.extend(coord);
      }, new mapboxgl.LngLatBounds(allCoords[0], allCoords[0]));

      map.fitBounds(bounds, {
        padding: 200,
      });
    }

    setWells([uniqueWellsArray]);
  };

  return (
    <>
      <form style={{ width: "100%" }} onSubmit={handleSubmit}>
        <TextField
          style={{ width: "100%", minWidth: "162px" }}
          id="comma-separated-wells-search"
          label="Multiple Locations Filter"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          autoComplete="off"
          onChange={handleChange}
          placeholder="Filter by comma separated locations"
          type="search"
          value={value}
          variant="outlined"
          size="small"
        />
      </form>
    </>
  );
};

export default CommaSeparatedWellsSearch;
