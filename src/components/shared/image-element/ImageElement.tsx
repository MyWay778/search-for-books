import {ReactElement} from 'react';
import clsx from 'clsx';
import imagePlaceholder from '../../../assets/images/image-placeholder.jpg';
import './styles.scss';

interface ImageElementProps {
  imageSrc: string;
  altText?: string;
  size?: 's' | 'l';
}

export default function ImageElement({imageSrc, altText = 'image', size = 's'}: ImageElementProps): ReactElement {
  const imageElementClass = clsx('image-element', `image-element_size-${size}`)

  return (
    <div className={imageElementClass}>
      <img className="image-element-image" src={imageSrc || imagePlaceholder}
           alt={altText}/>
    </div>
  )
}
