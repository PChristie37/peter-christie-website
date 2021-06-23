import React from "react";
import HeroSection2 from "components/HeroSection2";
import TeamBiosSection from "components/TeamBiosSection";

function AboutPage(props) {
  return (
    <>
      <TeamBiosSection
        bgColor="default"
        size="medium"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Pete"
        subtitle=""
      />
    </>
  );
}

export default AboutPage;
