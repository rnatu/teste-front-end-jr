import { Institutional } from './components/Institutional';
import { PaymentMethod } from './components/PaymentMethods';
import { RegistrationNews } from './components/RegistrationNews';
import { UsefulInformation } from './components/UsefulInformation';
import econverseFullLogo from '../../assets/images/econverse-full-logo.svg';
import vtexLogoWhite from '../../assets/images/vtex-full-logo-white.svg';
import style from './style.module.scss';

export function Footer() {
  return (
    <footer className={style.footerContainer}>
      <section className={style.userInfo}>
        <div className={style.interactionContainer}>
          <Institutional />
          <UsefulInformation />
          <PaymentMethod />
        </div>

        <RegistrationNews />
      </section>

      <div className={style.sectionWrap} />

      <section className={style.legalInformation}>
        <p>
          Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas
          imagens são de propriedade de seus respectivos donos. É vedada a
          reprodução, total ou parcial, de qualquer conteúdo sem expressa
          autorização.
        </p>

        <div>
          <img src={econverseFullLogo} alt="Econverse logo" />
          <img src={vtexLogoWhite} alt="Vtex logo" />
        </div>
      </section>
    </footer>
  );
}
