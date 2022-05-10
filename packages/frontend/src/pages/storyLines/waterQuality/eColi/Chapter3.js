import React from "react";
import { Box } from "@material-ui/core";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";

const CenteredFigcaption = styled.figcaption`
  text-align: center;
`;

const Space = styled.div(spacing);

const Chapter3 = () => {
  return (
    <>
      <h2>
        Why should I care about <em>E. coli</em> in the South Platte River?
      </h2>
      <p>
        The presence of <em>E. coli</em> in the South Platte River is an
        indicator of fecal contamination. More harmful bacteria, viruses, and
        parasites, such as shigella, hepatitis and giardia, may be present when
        there is fecal contamination. Sickness can occur when contaminated water
        is swallowed or enters the skin through an open cut or wound. Young
        children and people with weakened immune systems are more at risk for
        sickness.
      </p>

      <Box display="flex" justifyContent="center">
        <Space mr={8}>
          <img
            alt="ecoli"
            style={{ margin: "20px auto" }}
            src="/static/img/storylines/ecoli.jpg"
          />
          <CenteredFigcaption>
            <em>E. coli</em>
          </CenteredFigcaption>
        </Space>

        <Space mr={8}>
          <img
            alt="giardia"
            style={{ margin: "20px auto" }}
            src="/static/img/storylines/giardia.jpg"
          />
          <CenteredFigcaption>Giardia</CenteredFigcaption>
        </Space>

        <Space>
          <img
            alt="shigella"
            style={{ margin: "20px auto" }}
            src="/static/img/storylines/shigella.jpg"
          />
          <CenteredFigcaption>Shigella</CenteredFigcaption>
        </Space>
      </Box>
    </>
  );
};

export default Chapter3;
