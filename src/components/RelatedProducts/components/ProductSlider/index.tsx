import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import styles from './styles.module.scss';

import arrowLeft from '../../../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../../../assets/images/icons/arrow-right.svg';
import { useEffect, useState } from 'react';
import { Product } from '../../../../types/product';
import Modal from '../../../Modal';
import { formatCurrency } from '../../../../utils/formatCurrency';

export function ProductSlider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [modalProduct, setModalProduct] = useState<Product>({} as Product);
  const [showModal, setShowModal] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json',
        );
        const { products } = await response.json();

        setProducts([...products]);
      } catch (error) {
        console.error('Erro:', error);
      }
    };

    fetchData();
  }, []);

  function handleClick(product: Product) {
    setModalProduct(product);
    setShowModal(true);
  }

  return (
    <>
      <section className={styles.productSliderContainer}>
        <button className="btn-left">
          <img src={arrowLeft} alt="Mover itens para a esquerda" />
        </button>

        <Swiper
          className={styles.swiperContainer}
          modules={[Navigation]}
          spaceBetween={16}
          slidesPerView={4}
          navigation={{
            prevEl: '.btn-left',
            nextEl: '.btn-right',
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index}>
              <div className={styles.cardContainer}>
                <div>
                  <img
                    src={product.photo}
                    alt={product.descriptionShort}
                    title={product.descriptionShort}
                  />
                </div>
                <div className={styles.cardContent}>
                  <p>{product.productName}</p>
                  <span className="oldPrice">
                    {formatCurrency(product.price)}
                  </span>
                  <strong>{formatCurrency(product.price)}</strong>
                  <small>
                    ou 2x de {formatCurrency(product.price)} sem juros
                  </small>
                  <span className="deliveryCondition">Frete grátis</span>
                  <button type="button" onClick={() => handleClick(product)}>
                    Comprar
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <button className="btn-right">
          <img src={arrowRight} alt="Move itens para a direita" />
        </button>
      </section>

      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalProduct={modalProduct}
        />
      )}
    </>
  );
}
