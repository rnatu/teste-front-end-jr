import { RelatedCategories } from '../RelatedCategories';
import { ProductSlider } from './components/ProductSlider';
import styles from './styles.module.scss';

export function RelatedProducts() {
  return (
    <section className={styles.relatedProductsContainer}>
      <header>
        <div className={styles.headerTitle}>
          <div />
          <h1>Produtos relacionados</h1>
          <div />
        </div>

        <RelatedCategories />

        <ProductSlider />
      </header>
    </section>
  );
}
