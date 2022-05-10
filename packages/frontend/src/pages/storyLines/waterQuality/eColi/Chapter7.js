import React from "react";

const Chapter7 = () => {
  return (
    <>
      <h2>
        When is the most <em>E. coli</em> present in the South Platte River?
      </h2>
      <img
        style={{ margin: "20px auto" }}
        alt="ecoli seasonal"
        src="/static/img/storylines/ecoli_seasonal-04.png"
      />
      <p>
        <em>E. coli</em> concentrations tend to be higher between May and
        October, when the weather is warmer and more people recreate in the
        South Platte and its tributaries. <em>E. coli</em> concentrations tend
        to be lower in winter, when the weather is colder, and spring, when
        streamflow is higher.
      </p>

      <ul>
        <li>
          The national drinking water standard for <em>E. coli</em> is 0 CFU/100
          mL water in most cases
        </li>
        <li>
          The natural swimming area standards in Colorado are 235 CFU/100 mL
          water
        </li>
        <li>
          The primary contact (wading and swimming) standard for many streams in
          Colorado including the South Platte River in Denver is 126 CFU/100 mL
        </li>
      </ul>
    </>
  );
};

export default Chapter7;
