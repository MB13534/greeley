module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN} = DataTypes;
  const ListWqatParameters = sequelize.define(
    'list_wqat_parameters',
    {
      parameter_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      characteristic_name: {
        type: TEXT,
      },
      sample_fraction: {
        type: TEXT,
      },
      method_speciation: {
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
      unit_ndx: {
        type: INTEGER,
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
          ['sample_fraction', 'asc'],
          ['characteristic_name', 'asc'],
          ['method_speciation', 'asc'],
        ],
      },
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListWqatParameters;
};
