import { Container, Title } from '../../styles';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <Container>
    <Title>Página não encontrada</Title>
    <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
      Voltar para a página inicial
    </Link>
  </Container>
);

export default NotFound;
