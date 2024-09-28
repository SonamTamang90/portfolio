/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useRef, useState } from "react";

const SliderContext = createContext();

function Slider({ children }) {
  const sliderContainerRef = useRef(null);
  const [totalSlidableItems, setTotalSlidableItems] = useState(0);

  useEffect(() => {});

  return (
    <SliderContext.Provider value={{ sliderContainerRef }}>
      {children}
    </SliderContext.Provider>
  );
}

function Container() {
  const { sliderContainerRef } = useContext(SliderContext);
  return <ul className="slider-container" ref={sliderContainerRef}></ul>;
}

Slider.Container = Container;

export default Slider;
