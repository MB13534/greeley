import React from "react";

const Chapter1 = () => {
  return (
    <>
      <h2>What is Water Quality</h2>
      <p>
        Water is essential to human life and the health of the environment. It
        has two dimensions that are closely linked: quantity and quality. Water
        quality is defined by its physical, chemical, biological and aesthetic
        (appearance and smell) characteristics. A healthy environment is one in
        which the water quality supports a rich and varied community of
        organisms and protects public health.
      </p>

      <img
        alt="What is Water Quality"
        className="img img-responsive"
        style={{ width: "50%", margin: "20px auto" }}
        src="/static/img/storylines/wq_venn_diagram.png"
      />

      <p>
        Water quality influences the way communities use the water for
        activities such as:
      </p>

      <ul>
        <li>supplying drinking water</li>
        <li>irrigating crops and watering livestock</li>
        <li>industrial processes</li>
        <li>protection of aquatic ecosystems</li>
        <li>wildlife habitats</li>
        <li>scientific study and education</li>
        <li>recreation</li>
      </ul>
    </>
  );
};

export default Chapter1;
