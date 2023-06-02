import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';

import styles from './styles.module.scss';

import arrowLeft from '../../../../assets/images/icons/arrow-left.svg';
import arrowRight from '../../../../assets/images/icons/arrow-right.svg';

const produtsTest = [
  {
    productName: 'Iphone 11 PRO MAX BRANCO 1',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 15000,
  },
  {
    productName: 'IPHONE 13 MINI 1',
    descriptionShort: 'IPHONE 13 MINI 1',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 9000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 2',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 14990,
  },
  {
    productName: 'IPHONE 13 MINI 2',
    descriptionShort: 'IPHONE 13 MINI 2',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 12000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 3',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 3',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 4550,
  },
  {
    productName: 'IPHONE 13 MINI 3',
    descriptionShort: 'IPHONE 13 MINI 3',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 38000,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 4',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 4',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 42000,
  },
  {
    productName: 'IPHONE 13 MINI 4',
    descriptionShort: 'IPHONE 13 MINI 4',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 520,
  },
  {
    productName: 'Iphone 11 PRO MAX BRANCO 5',
    descriptionShort: 'Iphone 11 PRO MAX BRANCO 5',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 149990,
  },
  {
    productName: 'IPHONE 13 MINI 5',
    descriptionShort: 'IPHONE 13 MINI 5',
    photo:
      'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png',
    price: 100000,
  },
];

export function ProductSlider() {
  return (
    <section className={styles.productSliderContainer}>
      <button className="btn-left">
        <img src={arrowLeft} alt="Mover itens para a esquerda" />
      </button>

      <div className={styles.swiperContainer}>
        <Swiper
          modules={[Navigation]}
          spaceBetween={40}
          slidesPerView={4}
          navigation={{
            prevEl: '.btn-left',
            nextEl: '.btn-right',
          }}
        >
          {produtsTest.map((product, index) => (
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
                  <span className="oldPrice">R$ {product.price}</span>
                  <strong>R$ {product.price}</strong>
                  <small>ou 2x de {product.price} sem juros</small>
                  <span className="deliveryCondition">Frete grátis</span>
                  <button type="button">Comprar</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <button className="btn-right">
        <img src={arrowRight} alt="Move itens para a direita" />
      </button>
    </section>
  );
}
