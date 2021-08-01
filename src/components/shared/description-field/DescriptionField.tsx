import {ReactElement} from 'react';
import './styles.scss';
import clsx from 'clsx';

interface DescriptionFieldProps {
  children: string;
  mt?: 3;
  height?: 2;
}

export default function DescriptionField({children, mt, height}: DescriptionFieldProps): ReactElement {
  const descriptionFieldClass = clsx(
    'description-field',
    mt && `description-field_margin-top-${mt}`,
    height && `description-field_height-${height}`
  )
  return (
    <div className={descriptionFieldClass}>
      {children || 'No description'}
    </div>
  )
}
