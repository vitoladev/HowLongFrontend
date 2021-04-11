import Loader from 'react-loader-spinner';
import { Container, Title } from '../../styles';

const LoadingSpinner = () => (
  <Container style={{ margin: 'auto', padding: 50 }}>
    <Loader type="TailSpin" color="#00BFFF" height={100} width={100} />
    <Title>Carregando...</Title>
  </Container>
);

export default LoadingSpinner;
