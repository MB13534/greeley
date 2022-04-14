module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN} = DataTypes;
  const ListWqatWaterbodies = sequelize.define(
    'list_wqat_waterbodies',
    {
      waterbody_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      waterbody_name: {
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
      same_as_ndx: {
        type: INTEGER,
      },
    },
    {
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatWaterbodies;
};
