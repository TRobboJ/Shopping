import React, { useRef } from "react";
import styles from "./Checkout.module.scss";
import { useSession } from "next-auth/react";

export default function Checkout(props) {
  const emailRef = useRef();
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  const { data: session, status } = useSession();
  if (status === "authenticated") {
    const [firstName, lastName] = session.user.name.split(" ");
    //throws error without timeout.
    setTimeout(() => {
      emailRef.current.value = session.user.email;
      firstNameRef.current.value = firstName;
      lastNameRef.current.value = lastName;
    }, 50);
  }
  function confirmCheckoutHandler(event) {
    event.preventDefault();
  }
  return (
    <form onSubmit={confirmCheckoutHandler}>
      <div className={styles.input_container}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" ref={firstNameRef} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" ref={lastNameRef} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailRef} />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" />
      </div>
      <div className={styles.modal_actions}>
        <button
          type="button"
          onClick={props.onClose}
          className={styles.modal_close}
        >
          Close
        </button>
        <button className={styles.modal_confirm}>Confirm</button>
      </div>
    </form>
  );
}
