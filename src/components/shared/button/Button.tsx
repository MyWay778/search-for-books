import {ReactElement, SyntheticEvent} from 'react';
import clsx from 'clsx';
import './styles.scss';

interface ButtonProps {
  onClick: (e?: SyntheticEvent) => void;
  buttonText: string;
  ml?: 5
  disabled?: boolean;
}

export default function Button({onClick, buttonText, ml, disabled = false}: ButtonProps): ReactElement {
  const buttonClass =  clsx(
    'button',
    ml && `button_margin-left-${ml}`,
    disabled && 'button_disabled',
  )

  return (
    <button className={buttonClass} onClick={onClick} disabled={disabled}>{buttonText}</button>
  )
}
