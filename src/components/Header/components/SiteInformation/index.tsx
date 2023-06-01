import shieldCheck from '../../../../assets/images/icons/shield-check.svg';
import truck from '../../../../assets/images/icons/truck.svg';
import creditCard from '../../../../assets/images/icons/credit-card.svg';

import styles from './styles.module.scss';

export function SiteInformation() {
  return (
    <div className={styles.siteInformationContainer}>
      <div>
        <img src={shieldCheck} alt="Ícone de segurança" />
        <p>
          Compra <span>100% segura</span>
        </p>
      </div>
      <div>
        <img src={truck} alt="Ícone de um caminhão" />
        <p>
          <span>Frete grátis</span> acima de R$ 200
        </p>
      </div>
      <div>
        <img src={creditCard} alt="ícone de um cartão de crédito" />
        <p>
          <span>Parcele</span> suas compras
        </p>
      </div>
    </div>
  );
}
