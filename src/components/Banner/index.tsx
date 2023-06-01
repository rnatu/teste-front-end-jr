import styles from './styles.module.scss';

export function Banner() {
  return (
    <section className={styles.bannerImage}>
      <div className={styles.bannerMask} />

      <div className={styles.bannerContainer}>
        <h1>Venha conhecer nossas promoções</h1>
        <h3>50% Off nos produtos </h3>

        <button type="button">Ver produto</button>
      </div>
    </section>
  );
}
