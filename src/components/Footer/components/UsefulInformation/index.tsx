import style from './style.module.scss';

export function UsefulInformation() {
  return (
    <div className={style.usefulInformationContainer}>
      <h3>INFORMAÇÕES ÚTEIS</h3>
      <div className={style.informationAnchors}>
        <a href="">Fale conosco</a>
        <a href="">Dúvidas</a>
        <a href="">Prazos de Entrega</a>
        <a href="">Formas de Pagamento</a>
        <a href="">Política de privacidade</a>
        <a href="">Trocas e Devoluções</a>
      </div>
    </div>
  );
}
