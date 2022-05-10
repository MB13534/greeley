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

function TotalDissolvedSolids() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 7",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 8",
      links: [],
    },
    {
      chapter: "Chapter 9",
      links: [
        {
          title: "Water Research Center",
          url: "http://www.water-research.net/index.php/water-treatment/tools/total-dissolved-solids",
        },
        {
          title: "EPA, Drinking Water Fact Sheet",
          url: "http://www.epa.gov/safewater/mcl.html",
        },
        {
          title: "CDPHE, Colorado River Salinity Standards",
          url: "https://www.colorado.gov/pacific/sites/default/files/Regulation-39.pdf",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
        {
          title: "Stormwater Discharges Associated with Construction Activity",
          url: "https://www.colorado.gov/pacific/sites/default/files/STORMWATER%20MANAGEMENT%20PLAN%20PREPARATION%20GUIDANCE.pdf",
        },
      ],
    },
  ];

  const title = "Total Dissolved Solids";

  const description =
    "Learn not only what Total Dissolved Solids are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries.";

  const chapters = [
    {
      number: "1",
      description: "Intro",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "What are TDS?",
      body: <Chapter2 />,
    },
    {
      number: "3",
      description: "How are TDS measured?",
      body: <Chapter3 />,
    },
    {
      number: "4",
      description: "Why should I care?",
      body: <Chapter4 />,
    },
    {
      number: "5",
      description: "How do they get into the river?",
      body: <Chapter5 />,
    },
    {
      number: "6",
      description: "Regulation",
      body: <Chapter6 />,
    },
    {
      number: "7",
      description: "Standards",
      body: <Chapter7 />,
    },
    {
      number: "8",
      description: "When are the most TDS present?",
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

export default TotalDissolvedSolids;
