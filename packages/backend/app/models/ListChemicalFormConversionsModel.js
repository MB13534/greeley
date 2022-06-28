module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER, REAL} = DataTypes;
  const ListChemicalFormConversions = sequelize.define(
    'list_chemical_form_conversions',
    {
      chem_conv_ndx: {
        type: INTEGER,
        primaryKey: true,
      },
      chem_form_1: {
        type: TEXT,
      },
      chem_form_2: {
        type: TEXT,
      },
      conv_factor: {
        type: REAL,
      },
      notes: {
        type: TEXT,
      },
    },
    {
      defaultScope: {
        order: [['chem_conv_ndx', 'asc']],
      },
      schema: 'data',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListChemicalFormConversions;
};
