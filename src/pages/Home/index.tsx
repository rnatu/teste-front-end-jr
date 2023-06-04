import { Banner } from '../../components/Banner';
import { Header } from '../../components/Header';
import { Departments } from '../../components/Departments';
import { RelatedProducts } from '../../components/RelatedProducts';
import { RelatedCategories } from '../../components/RelatedCategories';
import { PartnerGroup } from '../../components/PartnerGroup';
import style from './styles.module.scss';

export function Home() {
  return (
    <>
      <Header />

      <Banner />

      <Departments />

      <main className={style.mainContainer}>
        <RelatedProducts>
          <RelatedCategories />
        </RelatedProducts>

        <PartnerGroup />

        <RelatedProducts>
          <a href="/">Ver todos</a>
        </RelatedProducts>

        <PartnerGroup variant />
      </main>
    </>
  );
}
