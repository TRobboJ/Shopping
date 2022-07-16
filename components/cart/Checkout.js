import React, { useRef, useState } from "react";
import styles from "./Checkout.module.scss";
import { useSession } from "next-auth/react";

export default function Checkout(props) {
  const [formValidity, setFormValidity] = useState({
    firstName: true,
    lastName: true,
    email: true,
    address: true,
    postalCode: true
  })

  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();
  const addressRef = useRef();
  const postalCodeRef = useRef();

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
    //get current input values from refs on form submission
    const submittedFirstName = firstNameRef.current.value;
    const submittedLastName = lastNameRef.current.value;
    const submittedEmail = emailRef.current.value;
    const submittedAddress = addressRef.current.value;
    const submittedPostalCode = postalCodeRef.current.value;

    //the below should all return true for valid inputs
    const firstNameValid = !isEmpty(submittedFirstName);
    const lastNameValid = !isEmpty(submittedLastName);
    const emailValid = !isEmpty(submittedEmail);
    const addressValid = !isEmpty(submittedAddress);
    const postalCodeValid = isSixChars(submittedPostalCode);

    //show user feedback concerning form validity
    setFormValidity({
      firstName: firstNameValid,
      lastName: lastNameValid,
      email: emailValid,
      address: addressValid,
      postalCode: postalCodeValid
    })

    //check total form validity
    const formValid =
      firstNameValid &&
      lastNameValid &&
      emailValid &&
      addressValid &&
      postalCodeValid;

    
    
    if (!formValid) {
      return
    }
    if (formValid) {
      //sends userData to submitOrderToServer function in Cart.js
      props.onConfirm({
          firstName: submittedFirstName,
          lastName: submittedLastName,
          email: submittedEmail,
          address: submittedAddress,
          postalCode: submittedPostalCode        
      })
    }

  }


  const invalidInput = <p>Please enter a valid input.</p>
  const postalCodeInvalidInput = <p>Please enter a valid input. (6 numbers)</p>


  return (
    <form onSubmit={confirmCheckoutHandler} className={styles.form}>
      <div className={`${styles.input_container} ${formValidity.firstName ? '' : styles.invalid}`}>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" ref={firstNameRef} />
        {!formValidity.firstName && invalidInput}
      </div>
      <div className={`${styles.input_container} ${formValidity.lastName ? '' : styles.invalid}`}>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" ref={lastNameRef} />
        {!formValidity.lastName && invalidInput}
      </div>
      <div className={`${styles.input_container} ${formValidity.email ? '' : styles.invalid}`}>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" ref={emailRef} />
        {!formValidity.email && invalidInput}
      </div>
      <div className={`${styles.input_container} ${formValidity.address ? '' : styles.invalid}`}>
        <label htmlFor="address">Address</label>
        <input type="text" id="address" ref={addressRef} />
        {!formValidity.address && invalidInput}
      </div>
      <div className={`${styles.input_container} ${formValidity.postalCode ? '' : styles.invalid}`}>
        <label htmlFor="postal-code">Postal Code</label>
        <input type="text" id="postal-code" ref={postalCodeRef} />
        {!formValidity.postalCode && postalCodeInvalidInput}
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

function isEmpty(value) {
  return value.trim().length === 0;
}
function isSixChars(value) {
  return value.trim().length === 6; //6 chars for Japanese postal code
}
