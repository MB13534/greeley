module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const SameAsLookupLocations = sequelize.define(
    'same_as_lookup_locations',
    {
      same_as_ndx: {
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

  return SameAsLookupLocations;
};
