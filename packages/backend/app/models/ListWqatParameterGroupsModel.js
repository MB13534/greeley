module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const ListWqatParameterGroups = sequelize.define(
    'list_wqat_parameter_groups',
    {
      parameter_group_ndx: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      parameter_group_name: {
        type: TEXT,
      },
      notes: {
        type: TEXT,
      },
    },
    {
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatParameterGroups;
};
