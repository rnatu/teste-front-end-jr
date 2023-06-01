import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { ProductFilter } from '../../components/ProductFilter';

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ProductFilter />
    </>
  );
}
