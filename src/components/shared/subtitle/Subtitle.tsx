import {ReactElement} from 'react';
import clsx from 'clsx';
import './styles.scss';

interface SubtitleProps {
  titleText: string;
  element?: 'h3';
  mt?: 2;
}

export default function Subtitle({titleText, element = 'h3', mt = 2}: SubtitleProps): ReactElement {
  const subtitleClass = clsx(`subtitle-${element}`, mt && `subtitle-${element}_margin-top-${mt}`);

  const templates = {
    h3: (text: string) => <h3 className={subtitleClass}>{text}</h3>
  }
  return templates[element](titleText);
}