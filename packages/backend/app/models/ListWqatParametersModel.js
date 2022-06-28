module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, BOOLEAN, ARRAY, DATE} = DataTypes;
  const ListWqatParameters = sequelize.define(
    'list_wqat_parameters',
    {
      parameter_ndx: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true,
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
      created_timestamp: {
        type: DATE,
      },
      assoc_parameter_group_ndx: {
        type: ARRAY(INTEGER),
      },
      display_name: {
        type: TEXT,
      },
      chem_conv_ndx: {
        type: INTEGER,
      },
      official_name: {
        type: BOOLEAN,
      },
      display_abbrev: {
        type: TEXT,
      },
      allow_zeros: {
        type: BOOLEAN,
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
