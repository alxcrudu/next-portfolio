import dynamic from "next/dynamic";
import Image from "next/image";

import Slider from "react-infinite-logo-slider";

import { useWindowSize } from "../../helpers/useWindowSize";

import { motion } from "framer-motion";

import { logos } from "../../assets/logos";
import { cn } from "../../helpers/cn";
import { ThemeContext } from "../../context/ThemeProvider";
import { useContext } from "react";

const InfiniteLogoSlider = dynamic(() => Promise.resolve(InfiniteLogoSlider_), {
  ssr: false,
});

const InfiniteLogoSlider_ = () => {
  const [innerWidth, _] = useWindowSize();
  const { theme } = useContext(ThemeContext);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="mt-[5rem] mb-[7.5rem]"
    >
      <Slider
        width={innerWidth < 768 ? "9rem" : "12.5rem"}
        duration={35}
        pauseOnHover={false}
        blurBorders={true}
        blurBoderColor={theme === "light" ? "#d9d9d9" : "#171717"}
      >
        {logos.map((logo, i) => (
          <Slider.Slide key={i}>
            <Image
              src={logo}
              alt={`tech-logo-${i}`}
              width={innerWidth < 768 ? 25 : 50}
              height={innerWidth < 768 ? 25 : 50}
              className={cn("grayscale", theme === "dark" ? "invert" : "")}
            />
          </Slider.Slide>
        ))}
      </Slider>
    </motion.div>
  );
};

export default InfiniteLogoSlider;
