import styles from "./Testimonials.module.css";

const TESTIMONIALS = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "/assets/images/person_1.png",
    quote:
      '"ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."',
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "/assets/images/person_2.png",
    quote:
      '"I\'ve tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."',
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "/assets/images/person_3.png",
    quote:
      '"As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It\'s fulfilling to see my courses making a positive impact on learners globally."',
  },
];

function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.heading}>
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className={styles.intro}>
            At <strong className={styles.brand}>ByteSpace</strong>, our vibrant
            community of learners and creators is at the heart of what we do.
            Hear directly from those who have experienced the transformative
            journey of learning and creating on our platform. Explore
            testimonials that reflect the diverse perspectives of enthusiastic
            learners and accomplished creators.
          </p>
        </div>

        <div className={styles.grid}>
          {TESTIMONIALS.map(({ name, role, avatar, quote }) => (
            <figure key={name} className={styles.card}>
              <img className={styles.avatar} src={avatar} alt={name} />
              <figcaption>
                <p className={styles.name}>{name}</p>
                <p className={styles.role}>{role}</p>
              </figcaption>
              <blockquote className={styles.quote}>{quote}</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
