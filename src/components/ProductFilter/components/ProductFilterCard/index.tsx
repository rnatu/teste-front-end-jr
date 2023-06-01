import styles from './styles.module.scss';

import differentScreens from '../../../../assets/images/icons/different-screens.svg';

export function ProductFilterCard() {
  return (
    <div className={styles.ProductFilterCardContainer}>
      <div>
        <img src={differentScreens} alt="" style={{ fill: 'red' }} />
      </div>

      <p>Tecnologia</p>
    </div>
  );
}
