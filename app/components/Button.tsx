'use client';

import { ButtonHTMLAttributes } from 'react';
import styles from '../styles/Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
}

export default function Button({ 
  children, 
  fontSize, 
  padding, 
  borderRadius, 
  backgroundColor,
  ...props 
}: ButtonProps) {
  return (
    <button 
      className={styles.button}
      style={{
        '--button-font-size': fontSize || '20px',
        '--button-padding': padding || '15px 25px',
        '--button-border-radius': borderRadius || '10px',
        '--button-background-color': backgroundColor || '#4480EA'
      } as React.CSSProperties}
      {...props}
    >
      {children}
    </button>
  );
}
