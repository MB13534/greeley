export const BASEMAP_STYLES = [
  {
    style: "outdoors-v11",
    name: "Outdoors",
    url: "mapbox://styles/mapbox/outdoors-v11",
  },
  {
    style: "streets-v11",
    name: "Streets",
    url: "mapbox://styles/mapbox/streets-v11",
  },
  {
    style: "satellite-streets-v11",
    name: "Satellite",
    url: "mapbox://styles/mapbox/satellite-streets-v11",
  },
  {
    style: "light-v10",
    name: "Light",
    url: "mapbox://styles/mapbox/light-v10",
  },
  {
    style: "dark-v10",
    name: "Dark",
    url: "mapbox://styles/mapbox/dark-v10",
  },
];

export const DEFAULT_MAP_CENTER = [-104.98518, 39.73871];

export const INIT_MAP_CONFIG = {
  style: BASEMAP_STYLES[0].url,
  center: DEFAULT_MAP_CENTER,
  zoom: 7.7,
  preserveDrawingBuffer: true,
};

export const WELLS_LAYER_ID = "spwqat-locations-circle";
export const WELLS_LABELS_LAYER_ID = "spwqat-locations-symbol";
export const INIT_FILTER_VALUES = {
  reach: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "reach",
    options: [],
    type: "multi-select",
    value: [],
  },
  organizations: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "organization",
    options: [],
    type: "multi-select",
    value: [],
  },

  moreThanA: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "more_than_a",
    type: "boolean",
    value: false,
  },
  moreThanB: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "more_than_b",
    type: "boolean",
    value: false,
  },
  moreThanC: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "more_than_c",
    type: "boolean",
    value: false,
  },
  dataRecentA: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "data_recent_a",
    type: "boolean",
    value: false,
  },
  dataRecentB: {
    layerId: WELLS_LAYER_ID,
    layerFieldName: "data_recent_b",
    type: "boolean",
    value: false,
  },

  search: {
    layerId: WELLS_LAYER_ID,
    type: "select",
    value: "attributes_search",
  },
};

export const WELLS_SEARCH_OPTIONS = [
  {
    value: "attributes_search",
    label: "Attributes",
  },
  {
    value: "comma_separated_wells_search",
    label: "Locations",
  },
];
