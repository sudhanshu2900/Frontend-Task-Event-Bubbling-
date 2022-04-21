import React, { useState, useEffect } from "react";

function Sample() {
  const [innerStyle, setInnerStyle] = useState({
    display: "none"
  });

  useEffect(() => {
    document.querySelector("#btn").addEventListener("click", () => {
      setInnerStyle({
        display: "block"
      });
    });

    document.querySelector("#outer").addEventListener(
      "click",
      () => {
        setInnerStyle({
          display: "none"
        });
      },
      true
    );

    document.querySelector("#inner").addEventListener("click", (e) => {
      setInnerStyle({
        display: "block"
      });
      e.stopPropagation();
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        setInnerStyle({
          display: "none"
        });
      }
    });
  }, [innerStyle]);

  return (
    <>
      <button id="btn">Press</button>
      <div
        id="outer"
        style={{ backgroundColor: "rgb(241, 111, 111)", height: "500px" }}
      >
        <div id="inner" style={innerStyle}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. U quis vero
          ad sequi quisquam dicta fugit natus debitis vaub laudantium error.
        </div>
      </div>
    </>
  );
}

export default Sample;
