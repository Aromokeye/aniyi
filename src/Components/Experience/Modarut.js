import React from "react";
import "./Experience.css";

const Modarut = () => {
  return (
    <div className="flex flex-column employ-details">
      <div className="ba bw1 br-100 h2 w2 f4 tc dib">a</div>
      <div className="flex flex-row justify-between flex-wrap items-center summary mv1">
        <div className="ttu tracked f6 b">organization</div>
        <div className="f6 measure lh-copy">The Modarut Company Limited</div>
      </div>
      <div className="flex flex-row justify-between flex-wrap summary2 w-100">
        <div className="ttu tracked f6 b">Job</div>
        <div className="f6 measure lh-copy">
          Educational Technology Specialist
        </div>
      </div>
      <div className="flex flex-row justify-between flex-wrap  summary2 w-100">
        <div className="ttu tracked f6 b">Period</div>
        <div className="f6 measure lh-copy">September 2013 - March 2021</div>
      </div>
      <div className="f5-ns f6 measure-wide-ns lh-copy">
        <div className="ttu tracked f6 b">JOB SUMMARY:</div>I work with clients
        in Learning Management System (LMS) consulting, deployment and content
        management. I customise the front-end of major open source LMSs such as
        Moodle, Chamilo and Wordpress Based LMSs. I also design learning modules
        using eLearning authoring tools.
      </div>
    </div>
  );
};

export default Modarut;
