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

function Nutrients() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "Wikipedia, Phosphorus",
          url: "https://en.wikipedia.org/wiki/Phosphorus",
        },
        {
          title: "Wikipedia, nitrate",
          url: "https://en.wikipedia.org/wiki/Nitrate",
        },
        {
          title: "Wikipedia, ammonia",
          url: "https://en.wikipedia.org/wiki/Ammonia",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title: "ATSDR, ToxFAQs, Nitrate and Nitrite",
          url: "http://www.atsdr.cdc.gov/toxfaqs/tf.asp?id=1186&tid=258",
        },
        {
          title: "ATSDR, ToxFAQs, Ammonia",
          url: "https://www.atsdr.cdc.gov/toxfaqs/tf.asp?id=10&tid=2",
        },
        {
          title: "EPA, Nutrient Pollution, The Problem",
          url: "https://www.epa.gov/nutrientpollution/problem",
        },
        {
          title: "USGS, Phosphorus and Water",
          url: "http://water.usgs.gov/edu/phosphorus.html",
        },
        {
          title: "USGS, Nitrogen and Water",
          url: "https://water.usgs.gov/edu/nitrogen.html",
        },
        {
          title: "USGS, Toxic Algal Blooms",
          url: "https://www.usgs.gov/news/science-harmful-algae-blooms",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        {
          title: "EPA, Nutrient Pollution, Sources and Solutions",
          url: "https://www.epa.gov/nutrientpollution/sources-and-solutions",
        },
        {
          title: "USGS, Phosphorus and Water",
          url: "http://www.exploremetrodenverwaterquality.org/",
        },
        {
          title: "USGS, Nitrogen and Water",
          url: "https://water.usgs.gov/edu/nitrogen.html",
        },
        {
          title: "National Atmospheric Deposition Program",
          url: "http://nadp.sws.uiuc.edu/",
        },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        {
          title: "EPA, Safe Drinking Water Act",
          url: "http://www.epa.gov/dwstandardsregulations/background-drinking-water-standards-safe-drinking-water-act-sdwa",
        },
        {
          title: "EPA< Drinking Water Contaminants",
          url: "http://www.epa.gov/your-drinking-water/table-regulated-drinking-water-contaminants",
        },
        {
          title: "CDPHE, Water Quality Control Commission Regulations",
          url: "https://www.colorado.gov/pacific/cdphe/water-quality-control-commission-regulations",
        },
        {
          title: "CDPHE, Nutrients Management Control Regulation #85",
          url: "https://www.colorado.gov/pacific/sites/default/files/WQ_nonpoint_source-Regulation-85.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [
        {
          title: "EPA, Table of Regulated Drinking Water Contaminants",
          url: "https://www.epa.gov/ground-water-and-drinking-water/table-regulated-drinking-water-contaminants",
        },
        {
          title: "EPA, Drinking Water Contaminants",
          url: "http://www.epa.gov/your-drinking-water/table-regulated-drinking-water-contaminants",
        },
        {
          title: "CDPHE, Water Quality Control Commission Regulations",
          url: "http://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=375&fileName=5%20CCR%201003-5http://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=375&fileName=5%20CCR%201003-5",
        },
      ],
    },
    {
      chapter: "Chapter 7",
      links: [],
    },
    {
      chapter: "Chapter 8",
      links: [
        {
          title: "EPA, Sources and Solutions - Stormwater",
          url: "https://www.epa.gov/nutrientpollution/sources-and-solutions-stormwater",
        },
        {
          title:
            "Water Quality Outreach, What the Heck is Storm Water Runoff? (video)",
          url: "https://www.youtube.com/watch?v=kyH02NjyfPA",
        },
        {
          title: "CDPHE, Nonpoint Source Education and Outreach",
          url: "https://www.colorado.gov/pacific/cdphe/nonpoint-source-education-and-outreach",
        },
        {
          title: "USGS, Urbanization and Water Quality",
          url: "http://water.usgs.gov/edu/urbanquality.html",
        },
      ],
    },
    {
      chapter: "Chapter 9",
      links: [
        {
          title: "Denver Environmental Health, 2014 Water Quality Update",
          url: "http://www.denvergov.org/content/dam/denvergov/Portals/771/documents/WQ_Docs/Water%20Quality%20Report%202014%20web.pdf",
        },
        {
          title: "Colorado Data Sharing Netork",
          url: "http://www.coloradowaterdata.org/aboutcdsn_cdsn.html",
        },
      ],
    },
    {
      chapter: "Chapter 10",
      links: [
        {
          title: "EPA, Nonpoint Source Pollution",
          url: "http://water.epa.gov/polwaste/nps/whatudo.cfm",
        },
        {
          title: "EPA, Septic Systems",
          url: "http://water.epa.gov/infrastructure/septic/local-outreach-toolkit.cfm",
        },
        {
          title: "EPA, Pet Waste Management",
          url: "http://www.epa.gov/nutrientpollution/what-you-can-do-your-home#pet",
        },
        {
          title:
            "EPA, What are Green Infrastructure and low impact development?",
          url: "http://water.epa.gov/infrastructure/greeninfrastructure/gi_what.cfm",
        },
        {
          title: "Wikipedia, Green Infrastructure",
          url: "https://en.wikipedia.org/wiki/Green_infrastructure",
        },
        {
          title: "US Department of Justice, Medication Take-back Programs",
          url: "http://www.deadiversion.usdoj.gov/drug_disposal/takeback/",
        },
        {
          title:
            "Denver Environmental Health, How You Can Help Protect Lakes, Rivers and Streams",
          url: "http://www.denvergov.org/content/denvergov/en/wastewater-management/keep-it-clean/how-you-can-help.html",
        },
        {
          title: "Denver, Household Hazardous Waste Program",
          url: "http://www.denvergov.org/content/denvergov/en/trash-and-recycling/hazardous-waste.html",
        },
        {
          title: "Semi-Arid Green Infrastructure",
          url: "https://www.epa.gov/region8/green-infrastructure",
        },
        {
          title: "Stormwater Messaging",
          url: "http://www.barr-milton.org/resources/messages/",
        },
      ],
    },
  ];

  const title = "Nutrients";

  const description =
    "Learn not only what nutrients are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries.";

  const chapters = [
    {
      number: "1",
      description: "Intro",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "What are nutrients?",
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
      description: "When are the most nutrients present?",
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

export default Nutrients;
