import React from "react";
import styled from "styled-components/macro";

import {
  CardContent,
  Grid,
  Card as MuiCard,
  Typography,
} from "@material-ui/core";

import { spacing } from "@material-ui/system";
import { RightDrawerInfo } from "../../../components/RightDrawerInfo";
import PageBreadcrumbs from "../PageBreadcrumbs";
import PageChapter from "../PageChapter";

const Card = styled(MuiCard)(spacing);

const Root = styled.div`
  width: 100%;
`;

function PageHeader({ title, description }) {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" gutterBottom>
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

function WaterQualityPage({ links, title, description, chapters }) {
  const [expanded, setExpanded] = React.useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <React.Fragment>
      <RightDrawerInfo links={links} />
      <PageBreadcrumbs title={title} />
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Root>
            <PageHeader title={title} description={description} />
            {chapters.map((chapter) => (
              <PageChapter
                key={chapter.number}
                id={chapter.number}
                expanded={expanded}
                handleChange={handleChange}
                content={chapter}
              />
            ))}
          </Root>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default WaterQualityPage;
