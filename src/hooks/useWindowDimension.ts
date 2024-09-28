import { useLayoutEffect, useState } from "react";

export default function useWindowDimensions() {

  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  return windowSize;
}
