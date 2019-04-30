import * as React from 'react';
import '/Button.module.css';

type Props = {
  title: string;
};

export const ButtonPrimary = ({ title }: Props) => {
  return (
    <button className='button'>{title}</button>
  );
}