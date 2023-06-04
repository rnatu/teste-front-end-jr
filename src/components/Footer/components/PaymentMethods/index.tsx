import style from './style.module.scss';
import visa from '../../../../assets/images/payment-method-icons/visa.svg';
import elo from '../../../../assets/images/payment-method-icons/elo.svg';
import alelo from '../../../../assets/images/payment-method-icons/alelo.svg';
import dinners from '../../../../assets/images/payment-method-icons/dinners.svg';
import ifood from '../../../../assets/images/payment-method-icons/ifood.svg';
import mastercard from '../../../../assets/images/payment-method-icons/mastercard.svg';
import pix from '../../../../assets/images/payment-method-icons/pix.svg';
import amex from '../../../../assets/images/payment-method-icons/amex.svg';
import ticket from '../../../../assets/images/payment-method-icons/ticket.svg';
import sodexo from '../../../../assets/images/payment-method-icons/sodexo.svg';

export function PaymentMethod() {
  return (
    <div className={style.paymentMethodContainer}>
      <h3>FORMAS DE PAGAMENTO</h3>
      <div className={style.paymentMethodContent}>
        <a href="">
          <img src={visa} alt="" />
        </a>
        <a href="">
          <img src={elo} alt="" />
        </a>
        <a href="">
          <img src={alelo} alt="" />
        </a>
        <a href="">
          <img src={dinners} alt="" />
        </a>
        <a href="">
          <img src={ifood} alt="" />
        </a>
        <a href="">
          <img src={mastercard} alt="" />
        </a>
        <a href="">
          <img src={pix} alt="" />
        </a>
        <a href="">
          <img src={amex} alt="" />
        </a>
        <a href="">
          <img src={ticket} alt="" />
        </a>
        <a href="">
          <img src={sodexo} alt="" />
        </a>
      </div>
    </div>
  );
}
