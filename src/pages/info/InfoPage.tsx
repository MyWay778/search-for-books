import {ReactElement} from 'react';
import './styles.scss';
import {Container} from '../../components/shared';
import useAppSelector from '../../hooks/useAppSelector';

export default function InfoPage(): ReactElement {
  const fetchStatus = useAppSelector(state => state.books.status);

  const message = fetchStatus === 'failed' ?
    <p className="info info_error">Error: something went wrong...</p> :
    <p className="info">Hello, to find a book you need to type the title of the book to the search field and click on
      the search button or press Enter.</p>

  return (
    <Container>
      {message}
    </Container>
  )
}
