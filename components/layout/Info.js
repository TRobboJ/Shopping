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
        <SiReact color={reactIconColour} size={iconSize} />
        <p>React</p>

        <SiRedux color={reduxIconColour} size={iconSize} />
        <p>Redux</p>

        <SiNextdotjs color={nextIconColour} size={iconSize} />
        <p>Next</p>

        <SiSass color={sassIconColour} size={iconSize} />
        <p>Sass</p>

        <img
          src="https://next-auth.js.org/img/logo/logo-xs.png"
          height={iconSize}
          alt="NextAuth.js icon"
        ></img>
        <p>NextAuth</p>
      </div>
      <p>and using the FakeStoreApi to fetch product data.</p>
    </div>
  );
}
