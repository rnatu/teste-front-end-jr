import style from './style.module.scss';

interface PartnerGroupProps {
  variant?: boolean;
}

export function PartnerGroup({ variant = false }: PartnerGroupProps) {
  return (
    <section
      className={`${style.partnerGroupContainer} ${variant && style.variant}`}
    >
      <div>
        <div className={style.partnerGroupMask} />
        <div className={style.partnerGroupContent}>
          {variant ? <h1>Produtos</h1> : <h1>Parceiros</h1>}
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </div>

      <div>
        <div className={style.partnerGroupMask} />
        <div className={style.partnerGroupContent}>
          <h1>Parceiros</h1>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button>Confira</button>
        </div>
      </div>
    </section>
  );
}
