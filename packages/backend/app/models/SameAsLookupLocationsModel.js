module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const SameAsLookupOrganizations = sequelize.define(
    'same_as_lookup_organizations',
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

  return SameAsLookupOrganizations;
};
