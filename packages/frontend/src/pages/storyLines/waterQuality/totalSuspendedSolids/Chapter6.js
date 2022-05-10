import React from "react";

const Chapter6 = () => {
  return (
    <>
      <h2>What are the standards for TSS</h2>
      <p>TSS are measured in mg/l.</p>
      <ul>
        <li>There are no instream standards for TSS</li>
        <li>
          There is no{" "}
          <a href="https://www.colorado.gov/pacific/sites/default/files/11_2015(05).pdf">
            drinking water standard
          </a>{" "}
          for TSS, but there are turbidity standards. (Turbidity is the
          cloudiness or{" "}
          <a href="https://en.wikipedia.org/wiki/Haze">haziness</a> of a{" "}
          <a href="https://en.wikipedia.org/wiki/Fluid">fluid</a> caused by
          large numbers of individual{" "}
          <a href="https://en.wikipedia.org/wiki/Particle_(ecology)">
            particles
          </a>{" "}
          that are generally invisible to the{" "}
          <a href="https://en.wikipedia.org/wiki/Naked_eye">naked eyes</a>.)
        </li>
        <li>
          <a href="https://www.colorado.gov/pacific/sites/default/files/WQ_COX631000-FS.pdf">
            Standards exist at discharge points
          </a>
          . The 30-day monitoring average must be below 30 mg/L and the 7-day
          average must be below 45 mg/L.
        </li>
      </ul>
    </>
  );
};

export default Chapter6;
