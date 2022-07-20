module.exports = {
  id: 'big-thompson-forest-roads-line',
  name: 'Forest Roads',
  type: 'line',
  source: 'big-thompson-forest-roads',
  'source-layer': 'BigThompson_USFS_ForestRoads-2w8kj0',
  paint: {
    'line-color': '#8D8D8D',
    'line-width': 2,
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'big-thompson-forest-roads',
    popup: {
      titleField: 'NAME',
    },
  },
};
