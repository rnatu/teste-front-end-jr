import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Departments } from '../../components/Departments';
import { RelatedProducts } from '../../components/RelatedProducts';
import { RelatedCategories } from '../../components/RelatedCategories';

export function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Departments />
      <RelatedProducts>
        <RelatedCategories />
      </RelatedProducts>
    </>
  );
}
