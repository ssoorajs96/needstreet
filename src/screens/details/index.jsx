import Body from "./body";
import styles from "./details.module.css";
const Details = (props) => {
  return (
    <div className={styles.homeBody}>
      <Body eventId={props.match.params.id} />;
    </div>
  );
};

export default Details;
