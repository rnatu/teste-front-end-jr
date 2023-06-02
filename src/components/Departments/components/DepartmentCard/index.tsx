import styles from './styles.module.scss';

interface ProductFilterCardProps {
  active?: boolean;
  icon: string;
  text: string;
}

export function DepartmentCard({
  active = false,
  icon,
  text,
}: ProductFilterCardProps) {
  return (
    <div
      className={`${styles.DepartmentCardContainer} ${active && styles.active}`}
    >
      <div>
        <img src={icon} alt="" />
      </div>

      <p>{text}</p>
    </div>
  );
}
