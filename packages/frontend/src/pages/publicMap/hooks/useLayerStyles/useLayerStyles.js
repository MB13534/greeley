import { useState } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemePaired } from "d3-scale-chromatic";

const reachValues = [
  "South Platte Headwaters",
  "Middle South Platte-Cherry Creek",
  "Upper South Platte",
  "Clear Creek",
];

const organizationsValues = [
  "DRMS",
  "Denver Department of Environmental Health",
  "South Adams County Water and Sanitation District (Colorado)",
  "River Watch",
  "SUNENCO",
  "CCWF",
  "Metro Waste Water Reclamation District (Colorado)",
  "Standley Lake Watershed Group (Volunteer)",
  "Littleton/Englewood Wastewater Treatment Plant (Colorado)",
  "EPA National Aquatic Resource Survey Data",
  "CWSD",
  "City of Thornton (Colorado)",
  "Groundwater Colorado",
  "City of Aurora (Colorado)",
  "Colorado Dept. of Public Health & Environment",
];

const buildScale = (values) => {
  const scale = scaleOrdinal(schemePaired);
  return values.reduce((acc, val) => {
    acc.push([val]);
    acc.push(scale(val));
    return acc;
  }, []);
};

const layerId = "spwqat-locations-circle";
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
  reach: {
    id: "reach",
    layerId,
    layerFieldName: "reach",
    name: "Reach",
    options: [],
    type: "multi-select",
    value: [],
    paint: {
      "circle-color": [
        "match",
        ["get", "reach"],
        ...buildScale(reachValues),
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
