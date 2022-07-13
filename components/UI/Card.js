import styles from './Card.module.scss';

function Card(props) {
  return <div className={`${styles.card} ${props.className}`}>{props.children}</div>;
}

export default Card;
