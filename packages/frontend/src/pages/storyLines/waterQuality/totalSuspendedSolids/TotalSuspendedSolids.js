import React from "react";

import WaterQualityPage from "../WaterQualityPage";
import Chapter1 from "./Chapter1";
import Chapter2 from "./Chapter2";
import Chapter3 from "./Chapter3";
import Chapter4 from "./Chapter4";
import Chapter5 from "./Chapter5";
import Chapter6 from "./Chapter6";
import Chapter7 from "./Chapter7";
import Chapter8 from "./Chapter8";
import Chapter9 from "./Chapter9";
import Chapter10 from "./Chapter10";

function TotalSuspendedSolids() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 7",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 8",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 9",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
    {
      chapter: "Chapter 10",
      links: [
        {
          title: "City of Boulder, General Information on Solids",
          url: "http://bcn.boulder.co.us/basin/data/BACT/info/TSS.html",
        },
        {
          title: "EPA, Water Quality Assessment and TMDL Information",
          url: "https://ofmpub.epa.gov/waters10/attains_index.home",
        },
        {
          title: "EPA, National Pollutant Discharge Elimination System",
          url: "https://www.epa.gov/npdes/secondary-treatment-standards",
        },
      ],
    },
  ];

  const title = "Total Suspended Solids";

  const description =
    "Learn not only what Total Suspended Solids are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries.";

  const chapters = [
    {
      number: "1",
      description: "Intro",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "What are Total Suspended Solids?",
      body: <Chapter2 />,
    },
    {
      number: "3",
      description: "Why should I care?",
      body: <Chapter3 />,
    },
    {
      number: "4",
      description: "How does TSS get into the South Platte River?",
      body: <Chapter4 />,
    },
    {
      number: "5",
      description: "Regulation",
      body: <Chapter5 />,
    },
    {
      number: "6",
      description: "Standards",
      body: <Chapter6 />,
    },
    {
      number: "7",
      description:
        "When are the most Total Suspended Solids present in the South Platte River?",
      body: <Chapter7 />,
    },
    {
      number: "8",
      description: "Impacts of storm runoff",
      body: <Chapter8 />,
    },
    {
      number: "9",
      description: "Available information?",
      body: <Chapter9 />,
    },
    {
      number: "10",
      description: "What can I do?",
      body: <Chapter10 />,
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

export default TotalSuspendedSolids;
