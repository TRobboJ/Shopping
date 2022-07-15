import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import styles from "./StarRating.module.scss";

export default function StarRating() {
    const content = generateRatingStars();
    return <>{content}</>;
}



//When creating the star rating filter I wanted to use their ids to bubble up to the parent div and use that id in the filterRatingHandler.
//I could have just set them manually but I thought it might be a good opportunity to practice recursion and so I created the function below.
function generateRatingStars() {
  const numberOfRows = 4;
  const numberOfStars = 5;
  let output = [];
  for (let i = numberOfRows; i > 0; i--) {
    let stars = [];
    for (let j = 0; j < numberOfStars; j++) {
      if (i > j) stars.push(<AiFillStar key={Math.random() * i} id={i}/>);
      else {
        stars.push(<AiOutlineStar key={Math.random() * i} id={i}/>);
      }
    }

    output.push(
      <div className={styles.rating} id={i}>
        <span id={i}>{stars}</span>
        <span id={i}>+</span>
      </div>
    );
  }
  return output;
}
