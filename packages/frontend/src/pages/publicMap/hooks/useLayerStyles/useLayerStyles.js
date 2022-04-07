import { useState } from "react";
import { scaleOrdinal } from "d3-scale";
import { schemePaired } from "d3-scale-chromatic";

const mediaValues = [
  "[not specified]",
  "Wastewater Treatment Plant Effluent",
  "Surface Water",
];

const locationTypesValues = [
  "Other-Surface Water",
  "Mine/Mine Discharge Adit (Mine Entrance)",
  "Channelized Stream",
  "Mine/Mine Discharge",
  "Facility Municipal Sewage (POTW)",
  "Storm Sewer",
  "Facility Public Water Supply (PWS)",
  "[not specified]",
  "Mine/Mine Discharge Tailings Pile",
  "Facility Privately Owned Non-industrial",
  "Mine/Mine Discharge Waste Rock Pile",
  "Facility Industrial",
  "Reservoir",
  "Well",
  "Canal Irrigation",
  "River/Stream",
  "Spring",
  "Canal Transport",
];

const organizationsValues = [
  "DRMS",
  "CORIVWCH_WQX",
  "THORNTON_WQX",
  "21COL001_WQX",
  "MWRD_WQX",
  "DDEH_WQX",
  "SUNENCO",
  "CCWF",
  "BLMRW",
  "CDOT",
  "CWSD_WQX",
  "AURORA_WQX",
  "SACWSD_WQX",
  "BRIGHTON_WQX",
  "GCWIN",
  "LEWWTP_WQX",
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
const styleValues = {
  default: {
    id: "default",
    layerId,
    layerFieldName: "",
    name: "Default",
    paint: {
      "circle-color": "#1e8dd2",
    },
  },
  media: {
    id: "media",
    layerId,
    layerFieldName: "media",
    name: "Media",
    options: [],
    type: "multi-select",
    value: [],
    paint: {
      "circle-color": [
        "match",
        ["get", "media"],
        ...buildScale(mediaValues),
        "#000000",
      ],
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
