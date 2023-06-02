import { ProductFilterCard } from './components/ProductFilterCard';
import { categoryFilterItems } from './categoryFilterItems';
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

export function ProductFilter() {
  return (
    <section className={styles.ProductFilterContainer}>
      <Swiper slidesPerView={7} spaceBetween={25}>
        {categoryFilterItems.map((product) => (
          <SwiperSlide key={product.name}>
            <ProductFilterCard
              icon={product.icon}
              active={product.active}
              text={product.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
