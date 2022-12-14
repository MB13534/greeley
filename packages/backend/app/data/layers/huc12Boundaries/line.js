module.exports = {
  id: 'huc-12-boundaries-line',
  name: 'HUC 12 Boundaries',
  type: 'line',
  source: 'huc-12-boundaries',
  'source-layer': 'BigThompson_HUC12-dqf8s5',
  paint: {
    'line-color': '#D12881',
    'line-width': 1,
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'huc-12-boundaries',
    popup: {
      titleField: 'Name',
      excludeFields: [
        'GNIS_ID',
        'LoadDate',
        'Shape_Area',
        'Shape_Leng',
        'TNMID',
      ],
    },
  },
};
