import {ReactElement} from 'react';
import Container from '../../components/shared/container/Container';
import './styles.scss';

export default function InfoPage (): ReactElement {
  return (
    <Container>
      <p className="info">
        Hello, to find a book you need to type the title of the book to the search field and click on the search button or press Enter.
      </p>
    </Container>
  )
}
