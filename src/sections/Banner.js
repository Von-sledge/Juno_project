import React from "react";
import ButtonMain from "../components/ButtonMain";
import HeaderSecondary from "../components/HeaderSecondary";
function Banner() {
  return (
    <div className="banner">
      <div className="banner-con">
        <HeaderSecondary heading="innovation comes to life"></HeaderSecondary>
        <h1 className="banner-con--header-main">
          building a generation of skilled engineers
        </h1>
        <p
          className="banner-con--paragraph"
        >
          This is simply dummy text of the printing setting industry has been
          the industry's standard
        </p>
        <ButtonMain></ButtonMain>
      </div>
    </div>
  );
}

export default Banner;
