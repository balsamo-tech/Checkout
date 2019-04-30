import * as React from 'react';
import styles from './Button.module.css';

type Props = {
  title: string;
};

export const ButtonPrimary = ({ title }: Props) => {
  return <button className={styles.something}>{title}</button>;
};
