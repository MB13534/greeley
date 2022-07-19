module.exports = (sequelize, DataTypes) => {
  const {TEXT, GEOMETRY, BOOLEAN, DOUBLE, REAL, BIGINT, DATE, INTEGER} =
    DataTypes;
  const MapLocationsAll = sequelize.define(
    'locations_map_mjb',
    {
      resultcount: {
        type: BIGINT,
      },
      por_start: {
        type: DATE,
      },
      por_end: {
        type: DATE,
      },
      station_id: {
        type: TEXT,
      },
      location_ndx: {
        type: INTEGER,
      },
      ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      station_name: {
        type: TEXT,
      },
      waterbody: {
        type: TEXT,
      },
      reach: {
        type: TEXT,
      },
      county: {
        type: TEXT,
      },
      huc8: {
        type: TEXT,
      },
      huc12: {
        type: REAL,
      },
      media: {
        type: TEXT,
      },
      locationtype: {
        type: TEXT,
      },
      organization: {
        type: TEXT,
      },
      x_lat: {
        type: DOUBLE,
      },
      y_lon: {
        type: DOUBLE,
      },
      location_geometry: {
        type: GEOMETRY,
      },
      more_than_a: {
        type: BOOLEAN,
      },
      more_than_b: {
        type: BOOLEAN,
      },
      more_than_c: {
        type: BOOLEAN,
      },
      data_recent_a: {
        type: BOOLEAN,
      },
      data_recent_b: {
        type: BOOLEAN,
      },
    },
    {
      schema: 'ui',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return MapLocationsAll;
};
