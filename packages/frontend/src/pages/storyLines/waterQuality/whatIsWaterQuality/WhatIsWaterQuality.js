import React from "react";

import WaterQualityPage from "../WaterQualityPage";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";

function WhatIsWaterQuality() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [
        {
          title: "USGS Water Science School",
          url: "https://water.usgs.gov/edu/",
        },
        {
          title: "EPA",
          url: "https://www.epa.gov/environmental-topics/water-topics",
        },
        {
          title: "CDPHE WQCD",
          url: "https://www.colorado.gov/pacific/cdphe/wqcd",
        },
      ],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "USGS Water Science School",
          url: "https://water.usgs.gov/edu/",
        },
        {
          title: "EPA",
          url: "https://www.epa.gov/environmental-topics/water-topics",
        },
        {
          title: "CDPHE WQCD",
          url: "https://www.colorado.gov/pacific/cdphe/wqcd",
        },
        {
          title: "USFS",
          url: "https://www.fs.usda.gov/",
        },
      ],
    },
  ];

  const title = "What is Water Quality?";

  const description =
    "Learn about the nexus between water between water quantity and quality and more.";

  const chapters = [
    {
      number: "1",
      description: "What is water quality?",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "Why is it important?",
      body: <Chapter2 />,
    },
  ];

  return (
    <WaterQualityPage
      links={links}
      title={title}
      description={description}
      chapters={chapters}
    />
  );
}

export default WhatIsWaterQuality;
