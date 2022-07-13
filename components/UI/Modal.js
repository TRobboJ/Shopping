import React from "react";
import styles from "./Modal.module.scss";
import Portal from "../hoc/Portal";

function BackdropOverlay() {
  return <div className={styles.overlay}></div>;
}

function ModalOverlay(props) {
  return (
    <div className={styles.modal}>
      <div className={styles.content}>{props.children}</div>
    </div>
  );
}

export default function Modal(props) {
  return (
    <Portal selector="#modal">
      <BackdropOverlay />
      <ModalOverlay>{props.children}</ModalOverlay>
    </Portal>
  );
}
