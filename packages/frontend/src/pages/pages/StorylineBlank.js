import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { RightDrawerInfo } from "../../components/RightDrawerInfo";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Root = styled.div`
  width: 100%;
`;

const Heading = styled(Typography)`
  font-size: ${(props) => props.theme.typography.pxToRem(15)};
  flex-basis: 33.33%;
  flex-shrink: 0;
`;

const SecondaryHeading = styled(Typography)`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.theme.typography.pxToRem(15)};
  color: ${(props) => props.theme.text};
`;

function EmptyCard() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Empty card
        </Typography>
        <Typography variant="body2" gutterBottom>
          Empty card
        </Typography>
      </CardContent>
    </Card>
  );
}

function StorylineBlank() {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const links = [
    {
      chapter: "Chapter 1",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 2",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 3",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 4",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 5",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 6",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 7",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 8",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 9",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
    {
      chapter: "Chapter 10",
      links: [
        { title: "Google", url: "https://www.google.com" },
        { title: "Yahoo", url: "https://www.yahoo.com" },
      ],
    },
  ];

  return (
    <React.Fragment>
      <RightDrawerInfo links={links} />
      <Helmet title="Storyline Title" />
      <Typography variant="h3" gutterBottom display="inline">
        Storyline Title
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} exact to="/dashboard">
          Dashboard
        </Link>
        <Link component={NavLink} exact to="/storylines">
          Storylines
        </Link>
        <Typography>Storyline Title</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <EmptyCard />
          <Root>
            <Accordion
              expanded={expanded === "panel1"}
              onChange={handleChange("panel1")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
              >
                <Heading variant="overline">Chapter 1</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 1
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.Nulla
                  facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
                  Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                  eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel2"}
              onChange={handleChange("panel2")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel2bh-content"
                id="panel2bh-header"
              >
                <Heading variant="overline">Chapter 2</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 2
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Donec placerat, lectus sed mattis semper, neque lectus feugiat
                  lectus, varius pulvinar diam eros in elit. Pellentesque
                  convallis laoreet laoreet. Nulla facilisi. Phasellus
                  sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel3"}
              onChange={handleChange("panel3")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel3bh-content"
                id="panel3bh-header"
              >
                <Heading variant="overline">Chapter 3</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 3
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel4"}
              onChange={handleChange("panel4")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel4bh-content"
                id="panel4bh-header"
              >
                <Heading variant="overline">Chapter 4</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 4
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nulla facilisi. Phasellus sollicitudin nulla et
                  quam mattis feugiat. Aliquam eget maximus est, id dignissim
                  quam. Nulla facilisi. Phasellus sollicitudin nulla et quam
                  mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel5"}
              onChange={handleChange("panel5")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel5bh-content"
                id="panel5bh-header"
              >
                <Heading variant="overline">Chapter 5</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 5
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nulla facilisi. Phasellus sollicitudin nulla et
                  quam mattis feugiat. Aliquam eget maximus est, id dignissim
                  quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel6"}
              onChange={handleChange("panel6")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel6bh-content"
                id="panel6bh-header"
              >
                <Heading variant="overline">Chapter 6</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 6
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel7"}
              onChange={handleChange("panel7")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel7bh-content"
                id="panel7bh-header"
              >
                <Heading variant="overline">Chapter 7</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 7
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nulla facilisi. Phasellus sollicitudin nulla et
                  quam mattis feugiat. Aliquam eget maximus est, id dignissim
                  quam. Nulla facilisi. Phasellus sollicitudin nulla et quam
                  mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam. Nulla
                  facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
                  Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                  eget maximus est, id dignissim quam. Nulla facilisi. Phasellus
                  sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel8"}
              onChange={handleChange("panel8")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel8bh-content"
                id="panel8bh-header"
              >
                <Heading variant="overline">Chapter 8</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 8
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nulla facilisi. Phasellus sollicitudin nulla et
                  quam mattis feugiat. Aliquam eget maximus est, id dignissim
                  quam. Nulla facilisi. Phasellus sollicitudin nulla et quam
                  mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel9"}
              onChange={handleChange("panel9")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel9bh-content"
                id="panel9bh-header"
              >
                <Heading variant="overline">Chapter 9</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 9
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue.
                </Typography>
              </AccordionDetails>
            </Accordion>
            <Accordion
              expanded={expanded === "panel10"}
              onChange={handleChange("panel10")}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel10bh-content"
                id="panel10bh-header"
              >
                <Heading variant="overline">Chapter 10</Heading>
                <SecondaryHeading variant="subtitle2">
                  Description of the chapter 10
                </SecondaryHeading>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Nunc vitae orci ultricies, auctor nunc in, volutpat nisl.
                  Integer sit amet egestas eros, vitae egestas augue. Duis vel
                  est augue. Nulla facilisi. Phasellus sollicitudin nulla et
                  quam mattis feugiat. Aliquam eget maximus est, id dignissim
                  quam. Nulla facilisi. Phasellus sollicitudin nulla et quam
                  mattis feugiat. Aliquam eget maximus est, id dignissim quam.
                  Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                  feugiat. Aliquam eget maximus est, id dignissim quam. Nulla
                  facilisi. Phasellus sollicitudin nulla et quam mattis feugiat.
                  Aliquam eget maximus est, id dignissim quam. Nulla facilisi.
                  Phasellus sollicitudin nulla et quam mattis feugiat. Aliquam
                  eget maximus est, id dignissim quam. Nulla facilisi. Phasellus
                  sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam. Nulla facilisi. Phasellus
                  sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam. Nulla facilisi. Phasellus
                  sollicitudin nulla et quam mattis feugiat. Aliquam eget
                  maximus est, id dignissim quam.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </Root>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default StorylineBlank;
