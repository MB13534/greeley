module.exports = {
  id: 'colorado-counties-line',
  name: 'Colorado Counties',
  type: 'line',
  source: 'colorado-counties',
  'source-layer': 'Colorado_Counties-8fbk7h',
  paint: {
    'line-color': '#FF1A57',
    // 'line-width': 3,
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'colorado-counties',
    popup: {
      titleField: 'COUNTY',
    },
  },
};
