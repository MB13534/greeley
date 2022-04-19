module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN} = DataTypes;
  const ListWqatActivityTypes = sequelize.define(
    'list_wqat_activity_types',
    {
      activity_type_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      activity_type_desc: {
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
      defaultScope: {
        order: [
          ['needs_review', 'desc'],
          ['wqat_include', 'desc'],
          ['display_order', 'asc'],
          ['activity_type_ndx', 'asc'],
        ],
      },
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatActivityTypes;
};
