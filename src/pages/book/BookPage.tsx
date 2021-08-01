import {ReactElement} from 'react';
import {useParams, Redirect} from 'react-router-dom';
import useAppSelector from '../../hooks/useAppSelector';
import {selectFoundBooks} from '../../store/selectors';
import Container from '../../components/shared/container/Container';
import ImageElement from '../../components/shared/image-element/ImageElement';
import './styles.scss';
import UnderlineInfo from '../../components/shared/underline-info/UnderlineInfo';
import Subtitle from '../../components/shared/subtitle/Subtitle';
import SecondaryInfo from '../../components/shared/secondary-info/SecondaryInfo';
import joinStringFromArray from '../../helpers/joinStringFromArray';
import DescriptionField from '../../components/shared/description-field/DescriptionField';

interface BookParams {
  bookId: string;
}

export default function BookPage(): ReactElement {
  const {bookId} = useParams<BookParams>();

  const books = useAppSelector(selectFoundBooks);
  if (books.length === 0) {
    return <Redirect to='/'/>
  }

  const book = books.find(book => book.id === bookId);
  if (!book) {
    return <p>Something went wrong</p>
  }

  const categories = joinStringFromArray(book.volumeInfo.categories, ' / ');
  const authors = joinStringFromArray(book.volumeInfo.authors, ', ');

  return (
    <Container>
      <div className="book-page">
        <div className="book-page__image">
          <ImageElement imageSrc={book.volumeInfo.imageLinks.thumbnail} altText="image" size='l'/>
        </div>
        <div className="book-page__info">
          <SecondaryInfo infoText={categories}/>
          <Subtitle element='h2' titleText={book.volumeInfo.title} mt={3}/>
          <UnderlineInfo infoText={authors} mt={2}/>
          <DescriptionField mt={3} height={2}>
            {book.volumeInfo.description}
          </DescriptionField>
        </div>
      </div>
    </Container>
  )
}
