module.exports = {
  id: 'dwr-gages-symbol',
  name: 'DWR Gages',
  type: 'symbol',
  source: 'dwr-gages',
  'source-layer': 'DWR_Gages_2022-co7x1h',
  layout: {
    'text-field': ['get', 'Abbrev'],
    'text-size': 14,
    'text-offset': [0, -1.2],
    'text-font': ['literal', ['Roboto Black', 'Arial Unicode MS Bold']],
    visibility: 'none',
  },
  paint: {
    'text-color': 'rgb(49,49,49)',
    'text-halo-color': 'rgba(255,255,255,1)',
    'text-halo-width': 3,
  },
  lreProperties: {
    layerGroup: 'dwr-gages',
    popup: {
      excludePopup: true,
    },
  },
};
