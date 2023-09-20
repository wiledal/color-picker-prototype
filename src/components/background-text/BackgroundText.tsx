import styles from "./BackgroundText.module.scss";

const RepeatingText = () => {
  return (
    <p className={styles.repeatingText}>
      COLOR PICKER COLOR PICKER{" "}
      <span className={styles.repeatingTextRepeated}>
        COLOR PICKER COLOR PICKER
      </span>
    </p>
  );
};

/**
 * A background component with a repeating text pattern.
 */
export const BackgroundText = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundText}>
        {Array.from({ length: 20 }).map((_, i) => (
          <RepeatingText key={i} />
        ))}
      </div>
    </div>
  );
};
