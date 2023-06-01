import styles from './styles.module.scss';
import crown from '../../../../assets/images/icons/crown.svg';

export function Categories() {
  return (
    <nav className={styles.categoriesNav}>
      <ul>
        <li>
          <p>Toda Categorias</p>
        </li>
        <li>
          <p>Supermercado</p>
        </li>
        <li>
          <p>Livros</p>
        </li>
        <li>
          <p>Moda</p>
        </li>
        <li>
          <p>Lançamentos</p>
        </li>
        <li>
          <p className={styles.highlighted}>Ofertas do Dia</p>
        </li>
        <li>
          <img src={crown} alt="" />
          <p>Assinatura</p>
        </li>
      </ul>
    </nav>
  );
}
