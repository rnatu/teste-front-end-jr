import styles from './styles.module.scss';

interface ProductFilterCardProps {
  active?: boolean;
  icon: string;
  text: string;
}

export function ProductFilterCard({
  active = false,
  icon,
  text,
}: ProductFilterCardProps) {
  return (
    <div
      className={`${styles.ProductFilterCardContainer} ${
        active && styles.active
      }`}
    >
      <div>
        <img src={icon} alt="" />
      </div>

      <p>{text}</p>
    </div>
  );
}
