import { ReactNode } from 'react';
import { ProductSlider } from './components/ProductSlider';
import styles from './styles.module.scss';

interface RelatedProductsProps {
  children: ReactNode;
}

export function RelatedProducts({ children }: RelatedProductsProps) {
  return (
    <section className={styles.relatedProductsContainer}>
      <header>
        <div className={styles.headerTitle}>
          <div />
          <h1>Related Products</h1>
          <div />
        </div>

        <div>{children}</div>
      </header>

      <ProductSlider />
    </section>
  );
}
