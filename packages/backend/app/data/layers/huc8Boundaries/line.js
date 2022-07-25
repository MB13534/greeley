module.exports = {
  id: 'huc-8-boundaries-line',
  name: 'HUC 8 Boundaries',
  type: 'line',
  source: 'huc-8-boundaries',
  'source-layer': 'BigThompson_HUC8-0qpcs8',
  paint: {
    'line-color': '#60BAF0',
    'line-width': 6,
  },
  layout: {
    visibility: 'visible',
  },
  lreProperties: {
    layerGroup: 'huc-8-boundaries',
    popup: {
      titleField: 'Name',
      excludeFields: [
        'GNIS_ID',
        'LoadDate',
        'Shape_Area',
        'Shape_Leng',
        'TNMID',
        'OBJECTID',
      ],
    },
  },
};
