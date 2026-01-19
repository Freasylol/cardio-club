'use client';

import type React from 'react';
import { type InputHTMLAttributes, type CSSProperties } from 'react';
import styles from '../styles/Input.module.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  fontSize?: string;
  padding?: string;
  borderRadius?: string;
  backgroundColor?: string;
  focusBorderColor?: string;
  className?: string;
  color?: string;
}

/**
 * The Input component is a reusable input field that can be customized with various props.
 * @param {string} fontSize - The font size of the input.
 * @param {string} padding - The padding inside the input.
 * @param {string} borderRadius - The border radius of the input.
 * @param {string} backgroundColor - The background color of the input.
 * @param {string} focusBorderColor - The border color when input is focused.
 * @param {string} className - Additional class names.
 * @param {string} color - Text color inside the input.
 * @param {*} props - Additional props for the input element.
 */
export default function Input({
  fontSize,
  padding,
  borderRadius,
  backgroundColor,
  focusBorderColor,
  className = "",
  color,
  ...props
}: InputProps) {
  const styleVars: CSSProperties = {
    ['--input-font-size' as string]: fontSize || '1rem',
    ['--input-padding' as string]: padding || '.625rem 1rem',
    ['--input-border-radius' as string]: borderRadius || '.5rem',
    ['--input-color' as string]: color || '#000',
    ['--input-background-color' as string]: backgroundColor || '#fff',
    ['--input-focus-border-color' as string]: focusBorderColor || '#4480EA',
  };

  return (
    <input
      className={`${className} ${styles.input}`}
      style={styleVars}
      {...props}
    />
  );
}