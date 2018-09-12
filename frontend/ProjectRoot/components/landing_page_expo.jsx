import React from 'react';

const HomeText = () => {
  return(
    <div className="home-text">
    <p className="disclaimer">
      This app is a demo. None of the doctors are real; it is only meant to showcase my abilities.</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;On this hypothetical platform people can book appointmentments for free care from bad doctors, the idea being that unlike many patients today they won&apos;t struggle to pay for care that isn&apos;t worth the cost. After all, if the service is lousy why pay for it?
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;I designed this site based off what I&apos;ve learned about the healthcare industry, including the disturbing statistic that medical errors are the <a href="https://www.bmj.com/content/353/bmj.i2139">3rd highest cause of death in the US</a>. This site was built around the idea of people seeking free care the same way they seek free content on the internet even at the cost of quality. Hence the idea for this site&apos;s theme and its slogan:
    </p>
    <p className="slogan">
      MockDoc: get what you pay for in healthcare.
    </p>
    </div>
  );
};

export default HomeText;