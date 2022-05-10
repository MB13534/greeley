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

function ContaminantsOfEmergingConcern() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title:
            "EPA, 1985 Guidelines for Deriving Numerical National Water Quality Criteria for the Protection of Aquatic Organisms and Their Uses",
          url: "https://www.epa.gov/sites/production/files/2016-02/documents/guidelines-water-quality-criteria.pdf",
        },
        {
          title:
            "EPA, 2008 Aquatic Life Criteria for Contaminants of Emerging Concern",
          url: "https://www.epa.gov/sites/production/files/2015-08/documents/white_paper_aquatic_life_criteria_for_contaminants_of_emerging_concern_part_i_general_challenges_and_recommendations_1.pdf",
        },
        {
          title: "USEPA, 2008 Water Quality Determination Memo",
          url: "https://www.epa.gov/sites/production/files/2015-08/documents/water_quality_criteria_determination_memo_june_3_2008.pdf",
        },
        {
          title: "USGS, 2017 Contaminants of Emerging Concern",
          url: "https://toxics.usgs.gov/investigations/cec/index.php",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title:
            "EPA, 2016 CECs in source and treated drinking waters of the US",
          url: "http://www.sciencedirect.com/science/article/pii/S0048969716326894?via%3Dihub",
        },
        {
          title:
            "USGS, 2017 pharmaceuticals in source and treated drinking waters of the US",
          url: "http://www.sciencedirect.com/science/article/pii/S0048969716305551?via%3Dihub",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [],
    },
    {
      chapter: "Chapter 5",
      links: [],
    },
    {
      chapter: "Chapter 6",
      links: [],
    },
    {
      chapter: "Chapter 7",
      links: [],
    },
    {
      chapter: "Chapter 8",
      links: [],
    },
    {
      chapter: "Chapter 9",
      links: [
        {
          title: "CDPHE, Medication Take Back Programs",
          url: "https://www.colorado.gov/pacific/cdphe/colorado-medication-take-back-program",
        },
      ],
    },
  ];

  const title = "Contaminants of Emerging Concern";

  const description =
    "Learn not only what Contaminants of Emerging Concern are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries.";

  const chapters = [
    {
      number: "1",
      description: "Intro",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "What are CECs?",
      body: <Chapter2 />,
    },
    {
      number: "3",
      description: "Why should I care?",
      body: <Chapter3 />,
    },
    {
      number: "4",
      description: "How do they get into the river?",
      body: <Chapter4 />,
    },
    {
      number: "5",
      description: "Regulation & Standards",
      body: <Chapter5 />,
    },
    {
      number: "6",
      description: "When are the most CECs present?",
      body: <Chapter6 />,
    },
    {
      number: "7",
      description: "Denver Metro Surface Water and CECs",
      body: <Chapter7 />,
    },
    {
      number: "8",
      description: "Selected Indicators of Contaminants of Emerging Concern",
      body: <Chapter8 />,
    },
    {
      number: "9",
      description: "What can I do?",
      body: <Chapter9 />,
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

export default ContaminantsOfEmergingConcern;
