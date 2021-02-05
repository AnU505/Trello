import React, {useRef } from "react";
import ImageAndText from "./Pages/ImageAndText";
import data from "./Pages/LandingPageData";
import Header from './Header'
function LandingPage() {
  const [wrapper,header ]= [useRef(null), React.createRef()];
  window.addEventListener("scroll", () => {
    if (wrapper.current !== null) {
      if (wrapper.current.getBoundingClientRect().y < 0 && header.current !== '') {
      header.current.classList.add("shadow");
      } else {
        header.current.classList.remove("shadow");
      }
    }
  });

  function cnt(data) {
    return data.map((e,k) => <ImageAndText key={k} data={e} />);
  }
  return (
    <>
    <Header ref={header}></Header>
    <div className="wrapper" ref={wrapper}>
      {cnt(data)}

    </div>
    </>
  );
}

export default LandingPage;

