import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

import styles from "./styles.module.scss";

const ParallaxLayer = ({
  imgSrc,
  className,
  initX,
  initY,
  order
}) => {
  const divider = order / 100;
  const positionX = initX * divider;
  const positionY = initY * divider;
  const transformString = `translate(${positionX}px, ${positionY}px)`;
  return (
    <div
      style={{
        transform: transformString
      }}
      className={classnames([
        styles.ParallaxLayer,
        className
      ])}>
      <img
        className={styles.ParallaxImg}
        src={imgSrc}
        alt="parralax-layer"
      />
    </div>
  );
};

ParallaxLayer.propTypes = {};

export default ParallaxLayer;
