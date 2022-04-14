module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN} = DataTypes;
  const ListWqatLocationTypes = sequelize.define(
    'list_wqat_location_types',
    {
      location_type_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      location_type_desc: {
        type: TEXT,
      },
      wqat_include: {
        type: BOOLEAN,
      },
      display_order: {
        type: INTEGER,
      },
      notes: {
        type: TEXT,
      },
      needs_review: {
        type: BOOLEAN,
      },
    },
    {
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatLocationTypes;
};
