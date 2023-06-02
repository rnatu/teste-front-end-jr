import { DepartmentCard } from './components/DepartmentCard';
import { DepartmentData } from './DepartmentData';
import styles from './styles.module.scss';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/scss';

export function Departments() {
  return (
    <section className={styles.DepartmentsContainer}>
      <Swiper slidesPerView={7} spaceBetween={25}>
        {DepartmentData.map((department) => (
          <SwiperSlide key={department.name}>
            <DepartmentCard
              icon={department.icon}
              active={department.active}
              text={department.name}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
