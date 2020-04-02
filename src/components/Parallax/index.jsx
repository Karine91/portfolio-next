import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import ParallaxLayer from "./ParallaxLayer";

import styles from "./styles.module.scss";

const cloud = require("../../assets/img/cloud-4.png");
const sky = require("../../assets/img/sky.png");
const cloudsBig = require("../../assets/img/clouds.png");

const layers = [
  { imgSrc: require("../../assets/img/layer5.jpg") },
  { imgSrc: require("../../assets/img/layer8.png") },
  { imgSrc: require("../../assets/img/layer7.png") },
  { imgSrc: cloud, className: styles["cloud-4"] },
  { imgSrc: cloud, className: styles["cloud-4"] },
  { imgSrc: require("../../assets/img/layer6.png") },
  { imgSrc: require("../../assets/img/layer4.png") },
  { imgSrc: sky, className: styles["cloud-7"] },
  { imgSrc: sky, className: styles["cloud-7"] },
  { imgSrc: require("../../assets/img/layer2.png") },
  { imgSrc: require("../../assets/img/layer1.png") },
  { imgSrc: cloudsBig, className: styles["cloud-10"] },
  { imgSrc: cloudsBig, className: styles["cloud-10"] }
];

const Parallax = () => {
  const [initX, setInitX] = useState(null);
  const [initY, setInitY] = useState(null);
  const moveLayers = e => {
    setInitX(window.innerWidth / 2 - e.pageX);
    setInitY(window.innerHeight / 2 - e.pageY);
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveLayers);
  }, []);
  return (
    <div className={styles.Parallax} id="parallax">
      {layers.map((el, index) => {
        return (
          <ParallaxLayer
            key={index}
            order={index}
            imgSrc={el.imgSrc}
            className={el.className}
            initX={initX}
            initY={initY}
          />
        );
      })}
    </div>
  );
};

Parallax.propTypes = {};

export default Parallax;
