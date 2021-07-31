import {ReactElement} from 'react';
import clsx from 'clsx';
import './styles.scss';

interface SubtitleProps {
  titleText: string;
  element?: 'h3' | 'h2';
  mt?: 2 | 3;
}

export default function Subtitle({titleText, element = 'h3', mt}: SubtitleProps): ReactElement {
  const subtitleClass = clsx(`subtitle`, `subtitle_${element}`, mt && `subtitle_margin-top-${mt}`);

  const templates = {
    h3: (text: string) => <h3 className={subtitleClass}>{text}</h3>,
    h2: (text: string) => <h2 className={subtitleClass}>{text}</h2>
  }
  return templates[element](titleText);
}