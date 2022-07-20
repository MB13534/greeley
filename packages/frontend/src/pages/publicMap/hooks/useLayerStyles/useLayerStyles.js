import { useState } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemePaired } from "d3-scale-chromatic";

const locationTypesValues = [
  "Canal/Ditch",
  "Facility Municipal Sewage (POTW)",
  "Facility Privately Owned Non-Industrial",
  "Reservoir/Lake",
  "River/Stream",
];

const organizationsValues = [
  "21COL001_WQX",
  "CORIVWCH_WQX",
  "Fort Collins (via BTWF)",
  "Loveland WQ Lab (via BTWF)",
  "Northern Water (via BTWF)",
  "USGS (via BTWF)",
];

const buildScale = (values) => {
  const scale = scaleOrdinal(schemePaired);
  return values.reduce((acc, val) => {
    acc.push([val]);
    acc.push(scale(val));
    return acc;
  }, []);
};

const layerId = "greeley-locations-circle";
export const styleValues = {
  default: {
    id: "default",
    layerId,
    layerFieldName: "",
    name: "Default",
    paint: {
      "circle-color": "#1e8dd2",
    },
  },
  locationTypes: {
    id: "locationTypes",
    layerId,
    layerFieldName: "locationtype",
    name: "Location Types",
    options: [],
    type: "multi-select",
    value: [],
    paint: {
      "circle-color": [
        "match",
        ["get", "locationtype"],
        ...buildScale(locationTypesValues),
        "#000000",
      ],
    },
  },
  organizations: {
    id: "organizations",
    layerId,
    layerFieldName: "organization",
    name: "Organizations",
    options: [],
    type: "multi-select",
    value: [],
    paint: {
      "circle-color": [
        "match",
        ["get", "organization"],
        ...buildScale(organizationsValues),
        "#000000",
      ],
    },
  },
};

const useLayerStyles = ({ onLayerStyleChange }) => {
  const [activeStyle, setActiveStyle] = useState(styleValues.default);
  const styleOptions = Object.entries(styleValues).map(([key, value]) => ({
    display: value.name,
    value: key,
  }));

  const handleActiveStyle = (name) => {
    setActiveStyle(styleValues[name]);
    onLayerStyleChange(styleValues[name]);
  };

  return {
    activeStyle,
    handleActiveStyle,
    styleOptions,
    styleValues,
  };
};

export default useLayerStyles;
