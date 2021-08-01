import React, {ReactElement} from 'react';
import './styles.scss';
import limitStringLength from '../../helpers/limitStringLength';
import {ImageElement, SecondaryInfo, Subtitle, UnderlineInfo} from '../shared';

interface BookCardProps {
  imageSrc: string;
  title: string;
  category: string;
  authors: string;
  onClick?: () => void;
}

export default function BookCard({imageSrc, title = 'No name', category = '', authors = 'No author', onClick}: BookCardProps): ReactElement {
  return (
    <div className="book-card" onClick={onClick}>
      <ImageElement imageSrc={imageSrc} altText={title}/>
      <UnderlineInfo infoText={category} mt={3}/>
      <Subtitle titleText={limitStringLength(title, 50)} mt={2}/>
      <SecondaryInfo infoText={limitStringLength(authors, 50)}/>
    </div>
  )
}