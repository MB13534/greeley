module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const ListLocationTypes = sequelize.define(
    'list_location_types',
    {
      location_type_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      location_type_desc: {
        type: TEXT,
      },
    },
    {
      defaultScope: {
        order: [['location_type_desc', 'asc']],
      },
      schema: 'ui',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListLocationTypes;
};
