import vtexFullLogo from '../../../../assets/images/vtex-full-logo.svg';
import magnifyingGlass from '../../../../assets/images/icons/magnifying-glass.svg';
import boxWithArrow from '../../../../assets/images/icons/box-with-arrow.svg';
import heart from '../../../../assets/images/icons/heart.svg';
import userCircle from '../../../../assets/images/icons/user-circle.svg';
import shoppingCart from '../../../../assets/images/icons/shopping-cart.svg';

import styles from './styles.module.scss';

export function UserActions() {
  return (
    <div className={styles.UserActionsContainer}>
      <img src={vtexFullLogo} alt="Logo da vtex" />

      <form className={styles.searchBar}>
        <input type="search" placeholder="O que você está buscando?" />
        <button type="submit" aria-label="Buscar">
          <img src={magnifyingGlass} alt="Imagem de uma lupa" />
        </button>
      </form>

      <nav className={styles.userActionsNav}>
        <ul>
          <li>
            <a href="#">
              <img src={boxWithArrow} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={heart} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={userCircle} alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src={shoppingCart} alt="" />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
