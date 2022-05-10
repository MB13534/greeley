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

function EColi() {
  const links = [
    {
      chapter: "Chapter 1",
      links: [],
    },
    {
      chapter: "Chapter 2",
      links: [
        {
          title: "CDC, E. coli",
          url: "http://www.cdc.gov/ecoli/general/",
        },
        {
          title: "Wikipedia, E. coli",
          url: "http://en.wikipedia.org/wiki/Escherichia_coli",
        },
        {
          title: "EPA, E. coli in drinking water",
          url: "http://nepis.epa.gov/Exe/ZyNET.exe/P1005EJT.txt?ZyActionD=ZyDocument&Client=EPA&Index=2006%20Thru%202010&Docs=&Query=&Time=&EndTime=&SearchMethod=1&TocRestrict=n&Toc=&TocEntry=&QField=&QFieldYear=&QFieldMonth=&QFieldDay=&UseQField=&IntQFieldOp=0&ExtQFieldOp=0&XmlQuery=&File=D%3A%5CZYFILES%5CINDEX%20DATA%5C06THRU10%5CTXT%5C00000011%5CP1005EJT.txt&User=ANONYMOUS&Password=anonymous&SortMethod=h%7C-&MaximumDocuments=1&FuzzyDegree=0&ImageQuality=r75g8/r75g8/x150y150g16/i425&Display=p%7Cf&DefSeekPage=x&SearchBack=ZyActionL&Back=ZyActionS&BackDesc=Results%20page&MaximumPages=1&ZyEntry=2",
        },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        {
          title: "EPA, Fecal Bacteria",
          url: "http://water.epa.gov/type/rsl/monitoring/vms511.cfm%20",
        },
        {
          title: "CDC, Sickness caused by E. coli bacteria",
          url: "http://www.cdc.gov/ecoli/qa_ecoli_sickness.htm",
        },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        {
          title: "EPA, Non point source pollution",
          url: "http://water.epa.gov/polwaste/nps/whatis.cfm",
        },
        {
          title: "EPA, Septic Systems",
          url: "http://water.epa.gov/infrastructure/septic/local-outreach-toolkit.cfm",
        },
        {
          title: "Denver Water Quality",
          url: "http://www.denvergov.org/content/denvergov/en/environmental-health/environmental-quality/water-quality.html",
        },
        {
          title: "USGS, Urbanization and Water Quality",
          url: "http://water.usgs.gov/edu/urbanquality.html",
        },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        {
          title: "EPA, Clean Water Act",
          url: "http://www2.epa.gov/laws-regulations/summary-clean-water-act",
        },
        {
          title: "EPA, Safe Drinking Water Act",
          url: "http://www.epa.gov/dwstandardsregulations/background-drinking-water-standards-safe-drinking-water-act-sdwa",
        },
        {
          title: "EPA, Drinking Water Contaminants",
          url: "http://www.epa.gov/your-drinking-water/table-regulated-drinking-water-contaminants",
        },
        {
          title: "EPA, Water",
          url: "http://water.epa.gov/%20",
        },
        {
          title: "CDPHE, Water Quality Control Commission",
          url: "https://www.colorado.gov/pacific/cdphe/water-quality-control-commission-regulations",
        },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [
        {
          title: "EPA, 2012 Recreational Water Quality Criteria",
          url: "http://water.epa.gov/scitech/swguidance/standards/criteria/health/recreation/upload/factsheet2012.pdf",
        },
        {
          title: "CDPHE, Water Quality Control Commission Regulations",
          url: "http://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=375&fileName=5%20CCR%201003-5http://www.sos.state.co.us/CCR/GenerateRulePdf.do?ruleVersionId=375&fileName=5%20CCR%201003-5",
        },
        {
          title: "Wikipedia, Colony Forming Unit",
          url: "https://en.wikipedia.org/wiki/Colony-forming_unit",
        },
      ],
    },
    {
      chapter: "Chapter 7",
      links: [
        {
          title: "Denver Environmental Health, 2016 Water Quality Update",
          url: "http://www.denvergov.org/content/dam/denvergov/Portals/771/documents/EQ/WQ/2016WQReport.pdf",
        },
      ],
    },
    {
      chapter: "Chapter 8",
      links: [
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
      ],
    },
  ];

  const title = "E. coli";

  const description =
    "Learn not only what E. coli are, but additionally what can be done to reduce its pollutant load in the South Platte River and its tributaries.";

  const chapters = [
    {
      number: "1",
      description: "Intro",
      body: <Chapter1 />,
    },
    {
      number: "2",
      description: "What are E. coli?",
      body: <Chapter2 />,
    },
    {
      number: "3",
      description: "Why should I care?",
      body: <Chapter3 />,
    },
    {
      number: "4",
      description: "How does it get into the river?",
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
      description: "When is the most E. coli present?",
      body: <Chapter7 />,
    },
    {
      number: "8",
      description: "Impacts of storm runoff?",
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

export default EColi;
