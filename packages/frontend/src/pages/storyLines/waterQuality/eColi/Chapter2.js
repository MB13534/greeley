import React from "react";

const Chapter2 = () => {
  return (
    <>
      <h2>
        What are Escherichia coli (<em>E. coli</em>)?
      </h2>
      <p>
        Escherichia coli (<em>E. coli</em>) are bacteria that normally live in
        the intestines of people and animals. The presence of <em>E. coli</em>{" "}
        in recreational waters like the South Platte River is an indicator of
        fecal contamination. <em>E. coli</em> is easy and inexpensive to detect,
        which is why it is used to determine health risks associated with
        recreating in streams and lakes. Most <em>E. coli</em> strains are
        harmless. One dangerous strain is called{" "}
        <a
          href="http://www.fda.gov/Food/FoodborneIllnessContaminants/CausesOfIllnessBadBugBook/ucm071284.htm"
          target="_blank"
          rel="noreferrer noopener"
        >
          <em>E. coli</em> O157:H7
        </a>{" "}
        and it can cause severe illness if it is ingested with food or water.
        Watch the video below for a great overview.
      </p>

      <iframe
        title="ecoli"
        width="85%"
        height="400"
        style={{ margin: "20px auto" }}
        src="https://www.youtube.com/embed/Rlyfc-5fVqI"
        frameBorder="0"
        allowFullScreen=""
      />
    </>
  );
};

export default Chapter2;
