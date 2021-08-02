import {ReactElement} from 'react';
import './styles.scss';

interface InfoLineProps {
  infoText: string;
}

export default function InfoLine({infoText}: InfoLineProps): ReactElement {
  return (
    <div className="info-line">{infoText}</div>
  )
}