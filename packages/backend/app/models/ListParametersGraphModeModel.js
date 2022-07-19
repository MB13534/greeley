module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, DATE, BIGINT} = DataTypes;
  const ListParametersGraphMode = sequelize.define(
    'list_parameters_graph_mode',
    {
      por_end: {
        type: DATE,
      },
      por_start: {
        type: DATE,
      },
      resultcount: {
        type: BIGINT,
      },
      unit_desc: {
        type: TEXT,
      },
      unit_ndx: {
        type: INTEGER,
      },
      parameter_abbrev: {
        type: TEXT,
      },
      parameter_name: {
        type: TEXT,
      },
      parameter_group_name: {
        type: TEXT,
      },
      stats_period: {
        type: TEXT,
      },
      parameter_group_ndx: {
        type: INTEGER,
      },
      parameter_ndx: {
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

  return ListParametersGraphMode;
};
