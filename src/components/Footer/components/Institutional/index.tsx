import facebookIcon from '../../../../assets/images/icons/facebook-icon.svg';
import instagramIcon from '../../../../assets/images/icons/instagram-icon.svg';
import youtubeIcon from '../../../../assets/images/icons/youtube-icon.svg';

import style from './style.module.scss';

export function Institutional() {
  return (
    <div className={style.institutionalContainer}>
      <h3>Sobre nós</h3>
      <div className={style.aboutUs}>
        <a href="">Conheça</a>
        <a href="">como comprar</a>
        <a href="">Indicação e Desconto</a>
      </div>

      <div className={style.socialMedia}>
        <a href="">
          <img src={facebookIcon} alt="Link para o facebook" />
        </a>
        <a href="">
          <img src={instagramIcon} alt="Link para o facebook" />
        </a>
        <a href="">
          <img src={youtubeIcon} alt="Link para o facebook" />
        </a>
      </div>
    </div>
  );
}
