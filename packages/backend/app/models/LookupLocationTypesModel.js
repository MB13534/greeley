module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const LookupLocationTypes = sequelize.define(
    'lookup_location_types',
    {
      ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      item_name: {
        type: TEXT,
      },
    },
    {
      defaultScope: {
        order: [['item_name', 'asc']],
      },
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return LookupLocationTypes;
};
