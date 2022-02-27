import React from "react";
import "./Experience.css";

const Freelance = () => {
  return (
    <div className="flex flex-column employ-details">
      <div className="ba bw1 br-100 h2 w2 f4 tc dib">b</div>
      <div className="flex flex-row justify-between flex-wrap items-center summary mv1">
        <div className="ttu tracked f6 b">organization</div>
        <div className="f6 measure lh-copy">James and Beulah</div>
      </div>
      <div className="flex flex-row justify-between flex-wrap summary2 w-100">
        <div className="ttu tracked f6 b">Job</div>
        <div className="f6 measure lh-copy">Web Developer</div>
      </div>
      <div className="flex flex-row justify-between flex-wrap  summary2 w-100">
        <div className="ttu tracked f6 b">Period</div>
        <div className="f6 measure lh-copy">June 2015 - March 2021</div>
      </div>
      <div className="f5-ns f6 measure-wide-ns lh-copy">
        <div className="ttu tracked f6 b">JOB SUMMARY:</div>Built and managed
        the ecommerce site of James and Beulah Restaurant. Also social media
        integrations for online sale.
      </div>
    </div>
  );
};

export default Freelance;
