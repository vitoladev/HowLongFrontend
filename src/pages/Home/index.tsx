import { Container, Title, Image } from '../../styles';
import { Link } from 'react-router-dom';
import { SportContainer, SportElement } from './styled';
import LolImage from '../../assets/lol.png';

const Home = () => (
  <Container>
    <Title>Veja o último título dos times do seu esporte favorito</Title>
    <SportContainer>
      <SportElement>
        <Link to={'/lol'}>
          <Image src={LolImage} alt="LoL" />
        </Link>
        <p>LoL</p>
      </SportElement>
    </SportContainer>
  </Container>
);

export default Home;
