import React from "react";

const Chapter4 = () => {
  return (
    <>
      <h2>How do nutrients get into the South Platte River?</h2>
      <img
        style={{ width: "80%", margin: "20px auto" }}
        alt="ecoli source"
        src="/static/img/storylines/ecoli_source-02.png"
      />

      <p>
        Excessive nitrogen and phosphorus that washes into water bodies are
        often the direct result of human activities. The primary sources of
        nutrient pollution are:
      </p>

      <ul>
        <li>
          <a
            href="https://www.epa.gov/nutrientpollution/sources-and-solutions-agriculture"
            target="_blank"
            rel="noreferrer noopener"
          >
            Wastewater
          </a>
          : Our sewer and septic systems are responsible for treating large
          quantities of waste, and these systems do not always operate properly
          or remove enough nitrogen and phosphorus before discharging into
          waterways.
        </li>
        <li>
          <a
            href="https://www.epa.gov/nutrientpollution/sources-and-solutions-stormwater"
            target="_blank"
            rel="noreferrer noopener"
          >
            Stormwater
          </a>
          : When precipitation falls on our cities and towns, it runs across
          hard surfaces - like rooftops, sidewalks and roads - and carries
          pollutants, including nitrogen and phosphorus, into local waterways.
        </li>
        <li>
          <a
            href="https://www.epa.gov/nutrientpollution/sources-and-solutions-and-around-homer"
            target="_blank"
            rel="noreferrer noopener"
          >
            In and Around the Home
          </a>
          : Fertilizers, yard and pet waste, and certain soaps and detergents
          contain nitrogen and phosphorus, and can contribute to nutrient
          pollution if not properly used or disposed of. The amounts of hard
          surfaces and type of landscaping can also increase the runoff of
          nitrogen and phosphorus during wet weather.
        </li>
        <li>
          <a href="/#" target="_blank" rel="noreferrer noopener">
            In the air
          </a>
          : Nitrate and ammonia are present in rainfall. Numerous biological
          processes (animal waste and commercial fertilizer application), as
          well as combustion (for example, from power plants) release these
          gases in the air and are return to rivers and lakes in rainfall.
        </li>
      </ul>
    </>
  );
};

export default Chapter4;
