import React from "react";
import styles from "./Info.module.scss";
import { SiReact, SiRedux, SiNextdotjs, SiSass } from "react-icons/si";

export default function Info() {
  const iconSize = "40px";
  const reactIconColour = "#61DBFB";
  const reduxIconColour = "#764abc";
  const nextIconColour = "#242424";
  const sassIconColour = "#CD6799";

  return (
    <div className={styles.section}>
      <h2>This website was created using the following technologies:</h2>
      <div className={styles.icons}>
        <div>
          <SiReact color={reactIconColour} size={iconSize} />
        </div>
        <div>
          <SiRedux color={reduxIconColour} size={iconSize} />
        </div>
        <div>
          <SiNextdotjs color={nextIconColour} size={iconSize} />
        </div>
        <div>
          <SiSass color={sassIconColour} size={iconSize} />
        </div>
      </div>
      <p>and using the FakeStoreApi to fetch product data.</p>
    </div>
  );
}
