import React from 'react';
import Link from 'next/link';

import styles from '@/styles/custom_error.module.scss';
import { Props } from '@/interfaces/CustomError.interface';

const CustomError: React.FC<Props> = ({
  title,
  subtitle,
  description,
  homeButtonLabel
}) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <h2 className={styles.subtitle}>{subtitle}</h2>
      <p className={styles.description}>
        {description}
      </p>
      <Link href="/" className={styles.link}>
        {homeButtonLabel}
      </Link>
    </div>
  );
};

export default CustomError;