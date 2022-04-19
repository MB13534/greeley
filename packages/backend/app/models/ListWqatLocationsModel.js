module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN, DOUBLE} = DataTypes;
  const ListWqatLocations = sequelize.define(
    'list_wqat_locations',
    {
      location_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      location_id: {
        type: TEXT,
      },
      location_name: {
        type: TEXT,
      },
      wqat_include: {
        type: BOOLEAN,
      },
      latitude: {
        type: DOUBLE,
      },
      longitude: {
        type: DOUBLE,
      },
      huc8: {
        type: TEXT,
      },
      huc12: {
        type: TEXT,
      },
      location_type_ndx: {
        type: INTEGER,
      },
      waterbody_ndx: {
        type: INTEGER,
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
      defaultScope: {
        order: [
          ['needs_review', 'desc'],
          ['wqat_include', 'desc'],
          ['display_order', 'asc'],
          ['location_ndx', 'asc'],
        ],
      },
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatLocations;
};
