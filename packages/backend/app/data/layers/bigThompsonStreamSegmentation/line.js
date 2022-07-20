module.exports = {
  id: 'big-thompson-stream-segmentation-line',
  name: 'Stream Segmentation',
  type: 'line',
  source: 'big-thompson-stream-segmentation',
  'source-layer': 'BigThompson_CDPHE_Streams_202-a2fczm',
  paint: {
    'line-color': [
      'match',
      ['get', 'Cat'],
      ['1a'],
      '#2875ea',
      ['2'],
      '#9728b6',
      ['3b'],
      '#488928',
      ['5'],
      '#ea2828',
      'black',
    ],
    'line-width': 3,
  },
  layout: {
    visibility: 'none',
  },
  lreProperties: {
    layerGroup: 'big-thompson-stream-segmentation',
  },
};
