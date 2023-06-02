import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { ProductFilter } from '../../components/ProductFilter';
import { RelatedProducts } from '../../components/RelatedProducts';

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductFilter />
      <RelatedProducts />
    </>
  );
}
