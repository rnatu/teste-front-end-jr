import vtexFullLogo from '../../assets/images/vtex-full-logo.svg';
import style from './style.module.scss';
export function Brands() {
  return (
    <section className={style.brandsContainer}>
      <h1>Navegue por marcas</h1>

      <div className={style.brandsContent}>
        <div>
          <img src={vtexFullLogo} alt="Logotipo da marca vtex" />
        </div>
        <div>
          <img src={vtexFullLogo} alt="Logotipo da marca vtex" />
        </div>
        <div>
          <img src={vtexFullLogo} alt="Logotipo da marca vtex" />
        </div>
        <div>
          <img src={vtexFullLogo} alt="Logotipo da marca vtex" />
        </div>
        <div>
          <img src={vtexFullLogo} alt="Logotipo da marca vtex" />
        </div>
      </div>
    </section>
  );
}
