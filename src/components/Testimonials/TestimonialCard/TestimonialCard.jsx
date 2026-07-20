import styles from "./TestimonialCard.module.css";

function TestimonialCard({ text, avatar, author, role }) {
  return (
    <div className={styles.testimonialCard}>
      <p className={styles.testimonialText}>{text}</p>
      <div className={styles.testimonialAuthor}>
        <img className={styles.avatar} src={avatar} alt={author} />
        <div>
          <p className={styles.authorName}>{author}</p>
          <p className={styles.authorRole}>{role}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
