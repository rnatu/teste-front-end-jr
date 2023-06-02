import styles from './styles.module.scss';
import crown from '../../../../assets/images/icons/crown.svg';

export function Categories() {
  return (
    <nav className={styles.categoriesNav}>
      <ul>
        <li>
          <a href="/">
            <p>Toda Categorias</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Supermercado</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Livros</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Moda</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p>Lançamentos</p>
          </a>
        </li>
        <li>
          <a href="/">
            <p className={styles.highlighted}>Ofertas do Dia</p>
          </a>
        </li>
        <li>
          <img src={crown} alt="" />
          <a href="/">
            <p>Assinatura</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
