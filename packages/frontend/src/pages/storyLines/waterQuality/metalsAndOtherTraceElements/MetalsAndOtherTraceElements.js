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

function MetalsAndOtherTraceElements() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [
        {
          title: "Metal Biogeochemistry in Surface",
          url: "https://pubs.usgs.gov/circ/1988/1013/report.pdf",
        },
        {
          title: "Selenium and Thyroid Disease",
          url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5307254/",
        },
        {
          title: "Metals and Other Trace Elements | US Geological Survey",
          url: "https://www.usgs.gov/mission-areas/water-resources/science/metals-and-other-trace-elements?qt-science_center_objects=0#qt-science_center_objects",
        },
      ],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "Metal Bioceochemistry in Surface-Water Systems",
          url: "https://pubs.usgs.gov/circ/1988/1013/report.pdf ",
        },
        {
          title: "Metals and Other Trace Elements | US Geological Survey",
          url: "https://www.usgs.gov/mission-areas/water-resources/science/metals-and-other-trace-elements?qt-science_center_objects=0#qt-science_center_objects ",
        },
        {
          title: "Basic Information about Lead in Drinking Water | US EPA",
          url: "https://www.epa.gov/ground-water-and-drinking-water/basic-information-about-lead-drinking-water",
        },
        {
          title: "Radionuclides | US Geological Survey",
          url: "https://www.usgs.gov/mission-areas/water-resources/science/radionuclides?qt-science_center_objects=0#qt-science_center_objects",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title: "Metals and Other Trace Elements | US Geological Survey",
          url: "https://www.usgs.gov/mission-areas/water-resources/science/metals-and-other-trace-elements?qt-science_center_objects=0#qt-science_center_objects ",
        },
        {
          title: "Metal Biogeochemistry in Surface-Water Systems",
          url: "https://pubs.usgs.gov/circ/1988/1013/report.pdf",
        },
        {
          title:
            "Areas Susceptible to Irrigation-Induced Selenium Contaminants",
          url: "https://pubs.usgs.gov/circ/circ1180/pdf/circ1180.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        {
          title: "Colorado Water Permits | Water Quality Control",
          url: "https://spwaterrenewalpartners.org/resources/regulatory-information-data/",
        },
        {
          title: "Summary of the Clean Water Act | US EPA",
          url: "https://www.epa.gov/laws-regulations/summary-clean-water-act",
        },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        {
          title: "Water Quality Control Commission Regulations",
          url: "https://www.colorado.gov/pacific/cdphe/water-quality-control-commission-regulations",
        },
        {
          title: "Colorado Water Permits | Water quality Control",
          url: "https://spwaterrenewalpartners.org/resources/regulatory-information-data/",
        },
        {
          title: "National Recommended Water Quality Criteria",
          url: "https://www.epa.gov/wqc/national-recommended-water-quality-criteria-aquatic-life-criteria-table",
        },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [],
    },
    {
      chapter: "Chapter 7",
      links: [
        {
          title: "Linking Selenium Sources to Ecosystems: Mining",
          url: "https://www.usgs.gov/mission-areas/water-resources/science/linking-selenium-sources-ecosystems-mining?qt-science_center_objects=0#qt-science_center_objects",
        },
      ],
    },
    {
      chapter: "Chapter 8",
      links: [
        {
          title: "How Can You Help Protect Source Water? | US EPA",
          url: "https://www.epa.gov/sourcewaterprotection/how-can-you-help-protect-source-water",
        },
        {
          title: "How We Protect Watersheds",
          url: "https://www.nature.org/en-us/what-we-do/our-priorities/protect-water-and-land/land-and-water-stories/how-we-protect-watersheds/",
        },
      ],
    },
  ];

  const title = "Metals and Other Trace Elements";

  const description = "Learn about metals and other trace elements.";

  const chapters = [
    {
      number: "1",
      description: "What are metals and trace elements?",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "Why should I care?",
      body: <Chapter2 />,
    },
    {
      number: "3",
      description: "How do metals and other trace elements get into the river?",
      body: <Chapter3 />,
    },
    {
      number: "4",
      description: "Regulation",
      body: <Chapter4 />,
    },
    {
      number: "5",
      description: "Standards",
      body: <Chapter5 />,
    },
    {
      number: "6",
      description: "When are the most metals present?",
      body: <Chapter6 />,
    },
    {
      number: "7",
      description: "Impacts of storm runoff?",
      body: <Chapter7 />,
    },
    {
      number: "8",
      description: "What can I do?",
      body: <Chapter8 />,
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

export default MetalsAndOtherTraceElements;
