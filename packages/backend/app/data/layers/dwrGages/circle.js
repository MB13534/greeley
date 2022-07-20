module.exports = {
  id: 'dwr-gages-circle',
  name: 'DWR Gages',
  type: 'circle',
  source: 'dwr-gages',
  'source-layer': 'DWR_Gages_2022-co7x1h',
  paint: {
    'circle-color': '#850000',
    'circle-radius': 6,
    // 'circle-radius': [
    //   'interpolate',
    //   ['exponential', 1.16],
    //   ['zoom'],
    //   0, // min zoom level
    //   3, // circle radius at min zoom
    //   22, // max zoom level
    //   24, // circle radius at max zoom
    // ],
    'circle-stroke-width': 1,
    // 'circle-stroke-width': [
    //   'interpolate',
    //   ['exponential', 1.16],
    //   ['zoom'],
    //   0, // min zoom level
    //   1, // stroke width at min zoom
    //   22, // max zoom level
    //   4, // stroke width at max zoom
    // ],
    'circle-stroke-color': '#fff',
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'dwr-gages',
    popup: {
      titleField: 'Abbrev',
      excludeFields: [],
    },
  },
};
