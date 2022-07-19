module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, ARRAY} = DataTypes;
  const ListParameterGroupsGraphMode = sequelize.define(
    'list_parameter_groups_graph_mode',
    {
      parameters: {
        type: ARRAY(INTEGER),
      },
      parameter_group_name: {
        type: TEXT,
      },
      stats_period: {
        type: ARRAY(TEXT),
      },
      parameter_group_ndx: {
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

  return ListParameterGroupsGraphMode;
};
