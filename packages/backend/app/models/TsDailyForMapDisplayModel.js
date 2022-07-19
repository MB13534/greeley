module.exports = (sequelize, DataTypes) => {
  const {TEXT, BOOLEAN, REAL, INTEGER, DATE} = DataTypes;
  const TsDailyForMapDisplay = sequelize.define(
    'ts_daily_for_map_display',
    {
      organization: {
        type: TEXT,
      },
      project: {
        type: TEXT,
      },
      parameter: {
        type: TEXT,
      },
      collect_date: {
        type: DATE,
      },
      result: {
        type: REAL,
      },
      units: {
        type: REAL,
      },
      nondetect: {
        type: BOOLEAN,
      },
      bmk_line1: {
        type: REAL,
      },
      bmk_color1: {
        type: TEXT,
      },
      bmk_line2: {
        type: REAL,
      },
      bmk_color2: {
        type: TEXT,
      },
      bmk_line3: {
        type: REAL,
      },
      bmk_color3: {
        type: TEXT,
      },
      bmk_line4: {
        type: REAL,
      },
      bmk_color4: {
        type: TEXT,
      },
      reach_ndx: {
        type: INTEGER,
      },
      reach_name: {
        type: TEXT,
      },
      reach_description: {
        type: TEXT,
      },
      location_ndx: {
        type: INTEGER,
      },
      location_id: {
        type: TEXT,
      },
      location_name: {
        type: TEXT,
      },
      parameter_ndx: {
        type: INTEGER,
      },
      param_abbrev: {
        type: TEXT,
      },
      bmk_reach_ndx: {
        type: INTEGER,
      },
      organization_ndx: {
        type: INTEGER,
      },
      ndx: {
        type: INTEGER,
        primaryKey: true,
      },
    },
    {
      schema: 'ui',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return TsDailyForMapDisplay;
};
