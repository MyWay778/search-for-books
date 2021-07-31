import React, {ReactElement} from 'react';
import UnderlineInfo from '../shared/underline-info/UnderlineInfo';
import Subtitle from '../shared/subtitle/Subtitle';
import SecondaryInfo from '../shared/secondary-info/SecondaryInfo';
import './styles.scss';
import ImageElement from '../shared/image-element/ImageElement';
import limitStringLength from '../../helpers/limitStringLength';

interface BookCardProps {
  imageSrc: string;
  title: string;
  category: string;
  authors: string;
}

export default function BookCard({imageSrc, title = 'No name', category = '', authors = 'No author'}: BookCardProps): ReactElement {
  return (
    <div className="book-card">
      <ImageElement imageSrc={imageSrc} altText={title}/>
      <UnderlineInfo infoText={category} mt={3}/>
      <Subtitle titleText={limitStringLength(title, 50)} mt={2}/>
      <SecondaryInfo infoText={limitStringLength(authors, 50)}/>
    </div>
  )
}