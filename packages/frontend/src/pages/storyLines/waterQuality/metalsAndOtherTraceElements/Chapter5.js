import React from "react";
import styled from "styled-components/macro";
import { customSecondary } from "../../../../theme/variants";

const CenteredTable = styled.table`
  width: 100%;
  text-align: center;

  & thead th {
    border-bottom: 2px solid gray;
  }

  & th {
    font-size: 16px;
    padding-bottom: 5px;
    color: ${() => customSecondary[500]};
  }

  & tbody td {
    border-bottom: 1px solid lightGray;
  }

  & tbody tr {
    &:hover {
      background-color: #f5f5f5;
    }
  }

  & td {
    font-size: 14px;
    padding-top: 5px;
    padding-bottom: 5px;
  }
`;

const Chapter5 = () => {
  return (
    <>
      <h2>Standards</h2>
      <p>
        Water quality standards for metals and other trace elements vary
        significantly depending on the specific element. While some trace
        elements are necessary for aquatic life, others are toxic at small
        levels. The Environmental Protection Agency produces some guidelines for
        metals, and the Colorado Department of Public Health and the Environment
        sets their own standards for the South Platte River.
      </p>
      <p>
        Maximum levels of some metals and trace elements according to the CDPHE
        and EPA are included below:
      </p>
      <CenteredTable>
        <thead>
          <tr>
            <th>Metal or Trace Element</th>
            <th>Maximum Level in mg/L</th>
            <th>Criteria Maximum Concentration in mg/L (EPA)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Arsenic</td>
            <td>0.01</td>
            <td>0.34</td>
          </tr>
          <tr>
            <td>Barium</td>
            <td>2</td>
            <td>---</td>
          </tr>
          <tr>
            <td>Chromium</td>
            <td>0.1</td>
            <td>0.57</td>
          </tr>
          <tr>
            <td>Lead</td>
            <td>---</td>
            <td>0.082</td>
          </tr>
          <tr>
            <td>Mercury</td>
            <td>0.002</td>
            <td>0.0014</td>
          </tr>
          <tr>
            <td>Selenium</td>
            <td>0.05</td>
            <td>---</td>
          </tr>
        </tbody>
      </CenteredTable>
    </>
  );
};

export default Chapter5;
