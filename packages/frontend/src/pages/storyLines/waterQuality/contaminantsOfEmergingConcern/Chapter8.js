import React from "react";

const Chapter8 = () => {
  return (
    <>
      <h2>Selected Indicators of Contaminants of Emerging Concern</h2>
      <p>
        This website has a selected set of 14 indicators. An indicator in this
        context is a chemical of concern that has been analyzed at a laboratory
        and displays an estimated concentration level. The set of indicators
        represent various classes of CECs by use. The set of 14 indicators was
        primarily chosen because they are consistently detected in the South
        Platte River, just upstream of the confluence with Clear Creek. The 14
        indicators were selected from about 270 emerging contaminants that are
        being analyzed by EPA each year in the Northern Front Range of Colorado,
        including the Denver Metro area. Many analyses for emerging contaminants
        resulted in nondetects, which indicate the chemical is either not
        present or at a lower concentration level than the laboratory can
        confidently report on. Ten sites were selected to represent the South
        Platte River and key tributaries in the Denver Metro area.
      </p>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>CEC Class Description</th>
            <th>Indicator Example</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Herbicide</td>
            <td>2,4-D</td>
          </tr>
          <tr>
            <td>Chemical used to make polycarbonate plastics and resins</td>
            <td>Bisphenol A</td>
          </tr>
          <tr>
            <td>Mild Central Nervous System Stimulant</td>
            <td>Caffeine</td>
          </tr>
          <tr>
            <td>Epileptic treatment and neuropathic pain reliever</td>
            <td>Gabapentin</td>
          </tr>
          <tr>
            <td>Blood Pressure and Diuretic</td>
            <td>Hydrochlorothiazide</td>
          </tr>
          <tr>
            <td>Anti-convulsant</td>
            <td>Lamotrigine</td>
          </tr>
          <tr>
            <td>Local anesthetic, anti-arrhythmic</td>
            <td>Lidocaine</td>
          </tr>
          <tr>
            <td>Anti-diabetic</td>
            <td>Metformin</td>
          </tr>
          <tr>
            <td>Used in personal care products and other items</td>
            <td>Nonylphenol</td>
          </tr>
          <tr>
            <td>Narcotic pain reliever</td>
            <td>Oxycodone</td>
          </tr>
          <tr>
            <td>Sulfonamide anti-bacterial</td>
            <td>Sulfamethoxazole</td>
          </tr>
          <tr>
            <td>Opioid analgesic for arthritis and fibromyalgia</td>
            <td>Tramadol</td>
          </tr>
          <tr>
            <td>Flame retardant</td>
            <td>Tri(dichloroisopropyl) Phosphate</td>
          </tr>
          <tr>
            <td>Anti-bacterial and anti-fungal</td>
            <td>Triclosan</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Chapter8;
