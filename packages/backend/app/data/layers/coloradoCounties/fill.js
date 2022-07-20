module.exports = {
  id: 'colorado-counties-fill',
  name: 'Colorado Counties',
  type: 'fill',
  source: 'colorado-counties',
  'source-layer': 'Colorado_Counties-8fbk7h',
  paint: {
    'fill-color': '#FF1A57',
    'fill-opacity': 0,
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
