import style from './styles.module.scss';
// import { ModalContainer, Overlay } from './styles';
import { Product } from '../../types/product';
import closeIcon from '../../assets/images/icons/close-icon.svg';
import { formatCurrency } from '../../utils/formatCurrency';

type ModalProps = {
  showModal: boolean;
  setShowModal: (state: boolean) => void;
  modalProduct: Product;
};

export default function Modal({
  showModal,
  setShowModal,
  modalProduct: { descriptionShort, photo, price, productName },
}: ModalProps) {
  return (
    <div className={style.overlay}>
      <dialog className={style.modalContainer}>
        <div className={style.closeButtonContainer}>
          <button type="button" onClick={() => setShowModal(false)}>
            <img src={closeIcon} alt="Ícone de fechar" />
          </button>
        </div>

        <div className={style.modalContent}>
          <div className="image">
            <img src={photo} alt={descriptionShort} title={descriptionShort} />
          </div>
          <div className={style.content}>
            <h1>{productName}</h1>
            <strong>{formatCurrency(price)}</strong>
            <p>{descriptionShort}</p>
            <a href="/">Veja mais detalhes do produto {`>`}</a>
          </div>
        </div>
      </dialog>
    </div>
  );
}
