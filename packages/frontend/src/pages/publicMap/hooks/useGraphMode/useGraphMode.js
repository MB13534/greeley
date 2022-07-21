import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";
import useFetchData from "../../../../hooks/useFetchData";
import { groupByValue } from "../../../../utils";
import { styleValues } from "../useLayerStyles/useLayerStyles";

const useGraphMode = ({
  map,
  updateLayerFilters,
  updateLayerStyles,
  filterValues,
  layers,
  lastLocationIdClicked,
  setLastLocationIdClicked,
  setDataVizVisible,
}) => {
  const [graphModeVisible, setGraphModeVisible] = useState(false);
  const [legendVisible, setLegendVisible] = useState(true);

  const initFilterValues = {
    periodOfRecord: "full",
    analysis: "benchmark_scale_median",
    parameterGroups: ["Bacteria", "Metals", "Nutrient", "Other", "Physical"],
    parameters: ["E. Coli"],
  };
  const [filterValuesGraphMode, setFilterValuesGraphMode] =
    useState(initFilterValues);

  const periodOfRecords = [
    {
      value: "short",
      label: "Recent",
    },
    {
      value: "medium",
      label: "Last 10 Years",
    },
    {
      value: "full",
      label: "Full Period",
    },
  ];
  const analysisTypes = [
    {
      value: "benchmark_scale_median",
      label: "Median",
    },
    {
      value: "benchmark_scale_pctile85",
      label: "85th Percentile",
    },
  ];
  const [parameterGroups, isParameterGroupsLoading] = useFetchData(
    "list-parameter-groups-graph-mode",
    [],
    false
  );

  const [hasParametersLoaded, setHasParametersLoaded] = useState(false);
  const { data: parameters, isFetching: isParametersFetching } = useQuery(
    [
      "list-parameters-graph-mode",
      filterValuesGraphMode.periodOfRecord,
      filterValuesGraphMode.parameterGroups,
      isParameterGroupsLoading,
    ],
    async () => {
      if (!isParameterGroupsLoading) {
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_ENDPOINT}/api/list-parameters-graph-mode`,
            {
              periodOfRecord: filterValuesGraphMode.periodOfRecord,
              parameterGroups: filterValuesGraphMode.parameterGroups.map(
                (parameterGroup) => getParameterGroupIndexByName(parameterGroup)
              ),
            }
          );
          return data;
        } catch (err) {
          console.error(err);
        }
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  const [benchmarkScaleColors] = useFetchData(
    "list-benchmark-scale-colors",
    [],
    false
  );
  const getHexColorForScore = (score) => {
    return (
      benchmarkScaleColors.find((x) => x.benchmark_scale === score)
        .symbol_color || "black"
    );
  };

  const graphModeBenchmarkColorsDefaults = [
    { name: `Above secondary benchmark`, color: `#FF0000` },
    { name: `Above benchmark`, color: `#FFA500` },
    { name: `Approaching benchmark`, color: `#FFFF00` },
    { name: `Below benchmark`, color: `#3CB371` },
    { name: `No benchmarks available`, color: `#0000FF` },
  ];
  const [graphModeBenchmarkColors, setGraphModeBenchmarkColors] = useState(
    graphModeBenchmarkColorsDefaults
  );
  useEffect(() => {
    if (benchmarkScaleColors) {
      setGraphModeBenchmarkColors([
        {
          name: `Above secondary benchmark`,
          color: benchmarkScaleColors[5]?.symbol_color ?? `#FF0000`,
        },
        {
          name: `Above benchmark`,
          color: benchmarkScaleColors[4]?.symbol_color ?? `#FFA500`,
        },
        {
          name: `Approaching benchmark`,
          color: benchmarkScaleColors[3]?.symbol_color ?? `#FFFF00`,
        },
        {
          name: `Below benchmark`,
          color: benchmarkScaleColors[2]?.symbol_color ?? `#3CB371`,
        },
        {
          name: `No benchmarks available`,
          color: benchmarkScaleColors[1]?.symbol_color ?? `#0000FF`,
        },
      ]);
    }
  }, [benchmarkScaleColors]);

  const handleGraphModeClick = () => {
    if (!graphModeVisible) {
      layers.forEach((layer) => {
        if (
          ["greeley-locations-circle", "greeley-locations-symbol"].includes(
            layer.id
          )
        ) {
          map.setLayoutProperty(
            layer?.lreProperties?.name || layer.id,
            "visibility",
            "visible"
          );
        } else {
          map.setLayoutProperty(
            layer?.lreProperties?.name || layer.id,
            "visibility",
            "none"
          );
        }
      });

      setDataVizVisible(false);

      map.setFilter("greeley-locations-circle", null);
      map.setFilter("greeley-locations-symbol", null);
    } else {
      map.setFilter("greeley-locations-circle", null);
      map.setFilter("greeley-locations-symbol", null);

      updateLayerFilters(filterValues);
      updateLayerStyles(styleValues.default);
      setDataVizVisible(false);

      layers.forEach((layer) => {
        if (layer?.layout?.visibility === "visible") {
          map.setLayoutProperty(
            layer?.lreProperties?.name || layer.id,
            "visibility",
            "visible"
          );
        } else {
          map.setLayoutProperty(
            layer?.lreProperties?.name || layer.id,
            "visibility",
            "none"
          );
        }
      });
    }

    setGraphModeVisible(!graphModeVisible);
    setLastLocationIdClicked(null);
    setLastLocationId(null);
  };

  useEffect(() => {
    if (!isParametersFetching && parameters?.length) {
      setHasParametersLoaded(true);
    }
  }, [isParametersFetching, parameters]);

  useEffect(() => {
    if (hasParametersLoaded) {
      setFilterValuesGraphMode((prevState) => {
        return {
          ...prevState,
          parameters: cleanParams(filterValuesGraphMode.parameters),
        };
      });
    }
  }, [parameters]); //eslint-disable-line

  useEffect(() => {
    if (hasParametersLoaded) {
      setFilterValuesGraphMode((prevState) => {
        return {
          ...prevState,
          parameterGroups: cleanParamGroups(
            filterValuesGraphMode.parameterGroups
          ),
        };
      });
    }
  }, [parameterGroups]); //eslint-disable-line

  const [hasGraphDataLoaded, setHasGraphDataLoaded] = useState(false);
  const [isAnalyticsTableDataLoading, setIsAnalyticsTableDataLoading] =
    useState(false);
  const { data } = useQuery(
    [
      "locations-map-graph-mode",
      filterValuesGraphMode.periodOfRecord,
      filterValuesGraphMode.parameters,
      hasParametersLoaded,
    ],
    async () => {
      if (hasParametersLoaded) {
        setIsAnalyticsTableDataLoading(true);
        try {
          const { data } = await axios.post(
            `${process.env.REACT_APP_ENDPOINT}/api/locations-map-graph-mode`,
            {
              periodOfRecord: filterValuesGraphMode.periodOfRecord,
              parameters: filterValuesGraphMode.parameters.map((parameter) =>
                getParameterIndexByName(parameter)
              ),
            }
          );

          setHasGraphDataLoaded(true);
          return data;
        } catch (err) {
          console.error(err);
        }
      }
    },
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
    }
  );

  useEffect(() => {
    if (graphModeVisible) {
      setIsAnalyticsTableDataLoading(false);
      recolorPointsForLayers(data);
      fetchAnalyticsTableForLocation();
      fetchAnalyticsTimeSeriesForLocation();
    }
  }, [graphModeVisible, data]); //eslint-disable-line

  useEffect(() => {
    if (graphModeVisible) {
      recolorPointsForLayers(data);
    }
  }, [filterValuesGraphMode.analysis]); //eslint-disable-line

  const recolorPointsForLayers = (data = null) => {
    const layerIds = ["greeley-locations-circle"];

    // sort by location_index ascending
    data.sort((a, b) => (a.ndx > b.ndx ? 1 : b.ndx > a.ndx ? -1 : 0));

    const colorData = [];
    const locationValues = {};

    data.forEach((row) => {
      // set a default score
      if (typeof locationValues[row.ndx] === "undefined") {
        locationValues[row.ndx] = 0;
      }

      if (filterValuesGraphMode.analysis === "benchmark_scale_pctile85") {
        if (row.benchmark_scale_pctile85 > locationValues[row.ndx]) {
          locationValues[row.ndx] = row.benchmark_scale_pctile85;
        }
      } else {
        if (row.benchmark_scale_median > locationValues[row.ndx]) {
          locationValues[row.ndx] = row.benchmark_scale_median;
        }
      }
    });

    for (const [loc_id, score] of Object.entries(locationValues)) {
      colorData.push(parseInt(loc_id));
      colorData.push(getHexColorForScore(score));
    }

    layerIds.forEach((id) => {
      map.setFilter(id, [
        "match",
        ["get", "ndx"],
        Object.keys(locationValues).map((x) => parseInt(x)).length
          ? Object.keys(locationValues).map((x) => parseInt(x))
          : "",
        true,
        false,
      ]);

      map.setFilter(id.replace("circle", "symbol"), [
        "match",
        ["get", "ndx"],
        Object.keys(locationValues).map((x) => parseInt(x)).length
          ? Object.keys(locationValues).map((x) => parseInt(x))
          : "",
        true,
        false,
      ]);

      if (colorData.length) {
        map.setPaintProperty(id, "circle-opacity", 1);
        map.setPaintProperty(id, "circle-stroke-opacity", 1);
        map.setPaintProperty(id, "circle-color", [
          "interpolate",
          ["linear"],
          ["get", "ndx"],
          ...colorData,
        ]);
      }
    });
  };

  const getParameterGroupIndexByName = (name) => {
    let parameterGroup = parameterGroups?.find(
      (x) => x.parameter_group_name === name
    );
    return parameterGroup.parameter_group_ndx;
  };

  const getParameterIndexByName = (name) => {
    let parameter = parameters.find((x) => x.parameter_abbrev === name);
    return parameter?.parameter_ndx || null;
  };

  const cleanParams = (params) => {
    const newParams = [];

    parameters.forEach((x) => {
      if (params.indexOf(x.parameter_abbrev) !== -1) {
        newParams.push(x.parameter_abbrev);
      }
    });

    return newParams;
  };

  const cleanParamGroups = (params) => {
    const newParams = [];

    parameterGroups
      .filter((item) =>
        item.stats_period.includes(filterValuesGraphMode.periodOfRecord)
      )
      .forEach((x) => {
        if (params.indexOf(x.parameter_group_name) !== -1) {
          newParams.push(x.parameter_group_name);
        }
      });

    return newParams;
  };

  const handleFilterValuesGraphMode = (name, value) => {
    if (!["periodOfRecord", "analysis"].includes(name)) {
      setFilterValuesGraphMode((prevState) => {
        const existingVals = [...prevState[name]];
        const existingIndex = existingVals.indexOf(value);
        existingIndex > -1
          ? existingVals.splice(existingIndex, 1)
          : existingVals.push(value);

        return {
          ...prevState,
          [name]: existingVals,
        };
      });
    } else {
      setFilterValuesGraphMode((prevState) => {
        return {
          ...prevState,
          [name]: value,
        };
      });
    }
  };

  const onSelectAllParameters = () => {
    setFilterValuesGraphMode((prevState) => {
      return {
        ...prevState,
        parameters: parameters.map((x) => x.parameter_abbrev),
      };
    });
  };

  const onSelectNoneParameters = () => {
    setFilterValuesGraphMode((prevState) => {
      return {
        ...prevState,
        parameters: [],
      };
    });
  };

  const onSelectAllParameterGroups = () => {
    setFilterValuesGraphMode((prevState) => {
      return {
        ...prevState,
        parameterGroups: parameterGroups.map((x) => x.parameter_group_name),
      };
    });
  };

  const onSelectNoneParameterGroups = () => {
    setFilterValuesGraphMode((prevState) => {
      return {
        ...prevState,
        parameterGroups: [],
      };
    });
  };

  const [lastLocationId, setLastLocationId] = useState(null);
  const [analyticsResults, setAnalyticsResults] = useState(null);
  const [timeSeriesResults, setTimeSeriesResults] = useState(null);

  function fetchAnalyticsTableForLocation(location_index) {
    if (graphModeVisible) {
      if (!location_index) location_index = lastLocationId;
      if (!location_index) return;
      setAnalyticsResults(
        data.filter(
          (item) =>
            item.stats_period === filterValuesGraphMode.periodOfRecord &&
            item.ndx === location_index
        )
      );
    }
  }

  const [isTimeSeriesResultsLoading, setIsTimeSeriesResultsLoading] =
    useState(false);
  function fetchAnalyticsTimeSeriesForLocation(location_index) {
    setIsTimeSeriesResultsLoading(true);
    if (graphModeVisible) {
      if (!location_index) location_index = lastLocationId;
      if (!location_index) return;

      async function send() {
        try {
          const { data: line } = await axios.post(
            `${process.env.REACT_APP_ENDPOINT}/api/ts-daily-table-for-map-display/${location_index}`,
            {
              parameters: cleanParams(filterValuesGraphMode.parameters).map(
                (x) => getParameterIndexByName(x)
              ),
              periodOfRecord: filterValuesGraphMode.periodOfRecord,
            }
          );

          const groupedLineArray = groupByValue(line, "parameter");

          const { data: bar } = await axios.post(
            `${process.env.REACT_APP_ENDPOINT}/api/ts-annual-table-for-map-display/${location_index}`,
            {
              parameters: cleanParams(filterValuesGraphMode.parameters).map(
                (x) => getParameterIndexByName(x)
              ),
              periodOfRecord: filterValuesGraphMode.periodOfRecord,
            }
          );

          const groupedBarArray = groupByValue(bar, "parameter");

          // console.log("line", groupedLineArray);
          // console.log("bar", groupedBarArray);

          setTimeSeriesResults({
            line: groupedLineArray,
            bar: groupedBarArray,
          });
        } catch (err) {
          // Is this error because we cancelled it ourselves?
          if (axios.isCancel(err)) {
            console.log(`call was cancelled`);
          } else {
            console.error(err);
          }
        }
      }

      send().then(() => {});
    }
  }

  useEffect(() => {
    setIsTimeSeriesResultsLoading(false);
  }, [timeSeriesResults]);

  useEffect(() => {
    setLastLocationId(lastLocationIdClicked);
    fetchAnalyticsTableForLocation(lastLocationIdClicked);
    fetchAnalyticsTimeSeriesForLocation(lastLocationIdClicked);
  }, [lastLocationIdClicked]); //eslint-disable-line

  return {
    filterValuesGraphMode,
    periodOfRecords,
    analysisTypes,
    parameterGroups,
    parameters,
    handleFilterValuesGraphMode,
    onSelectAllParameters,
    onSelectNoneParameters,
    onSelectAllParameterGroups,
    onSelectNoneParameterGroups,
    graphModeVisible,
    handleGraphModeClick,
    hasGraphDataLoaded,
    analyticsResults,
    timeSeriesResults,
    isTimeSeriesResultsLoading,
    getHexColorForScore,
    isAnalyticsTableDataLoading,
    legendVisible,
    setLegendVisible,
    graphModeBenchmarkColors,
  };
};

export default useGraphMode;
