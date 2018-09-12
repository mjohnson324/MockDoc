import React from 'react';

const HomeText = () => {
  return(
    <div className="home-text">
    <p className="disclaimer">
      This app is a demo. None of the doctors are real; it is only meant to showcase my abilities.</p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;On this hypothetical platform people can book appointmentments for free care from bad doctors. This site was built around the idea of patients seeking free care in the same way many consumers attempt to access media on the internet.
    </p>
    <p>
      &nbsp;&nbsp;&nbsp;&nbsp;Some might ask why anyone would request bad care, or point out that patients normally don't shop for healthcare this way. I would counter with a simple question: if you need care but can&apos;t influence quality and the service will be lousy no matter what, why pay for it? Hence the idea for this site&apos;s theme and its slogan:       
    </p>
    <p className="slogan">
      MockDoc: get what you pay for in healthcare.
    </p>
    </div>
  );
};

export default HomeText;