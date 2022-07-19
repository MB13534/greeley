module.exports = (sequelize, DataTypes) => {
  const {TEXT, INTEGER} = DataTypes;
  const ListBenchmarkScaleColors = sequelize.define(
    'list_benchmark_scale_colors',
    {
      benchmark_scale: {
        type: INTEGER,
        primaryKey: true,
      },
      symbol_color: {
        type: TEXT,
      },
    },
    {
      schema: 'ui',
      timestamps: false,
      paranoid: true,
      freezeTableName: true,
    }
  );

  return ListBenchmarkScaleColors;
};
