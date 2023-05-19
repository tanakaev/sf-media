import { useEffect } from "react";

const useScrollRotateAnimation = (className) => {
  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;

      const elements = document.getElementsByClassName(className);

      if (elements) {
        for (let el of elements) {
          const rotation = (st / 5) % 360; // zmieniamy tutaj obliczanie rotacji
          el.style.transform = `rotate(${rotation}deg)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [className]);

  return null;
};

export default useScrollRotateAnimation;
