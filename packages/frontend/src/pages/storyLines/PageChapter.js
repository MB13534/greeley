import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import styled from "styled-components/macro";

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

const PageBreadcrumbs = ({ id, expanded, handleChange, content }) => {
  return (
    <>
      <Accordion expanded={expanded === id} onChange={handleChange(id)}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`${id}-content`}
          id={`${id}-header`}
        >
          <Heading variant="overline">Chapter {content.number}</Heading>
          <SecondaryHeading variant="subtitle2">
            {content.description}
          </SecondaryHeading>
        </AccordionSummary>
        <AccordionDetails style={{ flexDirection: "column", margin: "25px" }}>
          {content.body}
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default PageBreadcrumbs;
