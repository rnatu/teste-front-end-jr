import { Categories } from './components/Categories';
import { SiteInformation } from './components/SiteInformation';
import { UserActions } from './components/UserActions';
import styles from './styles.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <SiteInformation />
      <UserActions />
      <Categories />
    </header>
  );
}
