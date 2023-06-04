import style from './style.module.scss';

export function RegistrationNews() {
  return (
    <div className={style.registrationNewsContainer}>
      <h3>Cadastre-se e Receba nossas</h3>
      <h1>novidades e promoções</h1>

      <p>
        Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem
        ipsum
      </p>

      <form className={style.registerNewsFormContainer}>
        <input type="text" placeholder="SEU E-MAIL" />
        <button type="button">OK</button>
      </form>
    </div>
  );
}
